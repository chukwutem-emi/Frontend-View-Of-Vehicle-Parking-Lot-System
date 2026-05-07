import React, { useEffect, useState } from "react";
import type { GetAllLoggedInDevicesAttributes } from "../../../types/userDevices/getAllLoggedInDevicesAttributes";
import { useAppSelector } from "../../../utils/useAppSelector";
import { getAllLoggedInDevicesAPI } from "../APIs/getAllLoggedInDevices";


type UseGetAllLoggedInDevicesReturns = {
    clearMessage                : () => void;
    devices                     : GetAllLoggedInDevicesAttributes;
    message                     : string;
    errMessage                  : boolean;
    open                        : boolean;
    progress                    : number;
    openMessage                 : boolean;
    filteredDevices             : GetAllLoggedInDevicesAttributes;
    setFilteredDevices          : React.Dispatch<React.SetStateAction<GetAllLoggedInDevicesAttributes>>;
    handleGetAllLoggedInDevices : () => Promise<void>;
    setOpenMessage              : React.Dispatch<React.SetStateAction<boolean>>;
};

export const useGetAllLoggedInDevices = () : UseGetAllLoggedInDevicesReturns => {
    const [devices, setDevices]                 = useState<GetAllLoggedInDevicesAttributes>([]);
    const [message, setMessage]                 = useState("");
    const [errMessage, setErrMessage]           = useState(false);
    const [open, setOpen]                       = useState(false);
    const [progress, setProgress]               = useState(0);
    const [openMessage, setOpenMessage]         = useState(false);
    const [filteredDevices, setFilteredDevices] = useState<GetAllLoggedInDevicesAttributes>([]);

    const userToken = useAppSelector((state) => state.auth.token);


    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        }
    }, [message]);

    const handleGetAllLoggedInDevices = async () => {
        setOpen(true);
        setProgress(20);

        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress >= 90) {
                    clearInterval(interval);
                    return prevProgress;
                }
                return prevProgress + 10;
            });
        }, 400);

        try {
            const res = await getAllLoggedInDevicesAPI(userToken);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setProgress(100);
                setOpen(false);
                return;
            };
            setProgress(100);
            setDevices(res.data.data);
            setFilteredDevices(res.data.data);
            setMessage(res.data.message);
            clearInterval(interval);
        } catch (err: unknown) {
           if (err instanceof Error) {
                setMessage(err.message);
            }
            setErrMessage(true);
            setProgress(0);
            setOpen(false);
        } finally {
            setOpen(false);
        };
    };

    return {
        clearMessage,
        devices,
        message,
        errMessage,
        open,
        progress,
        openMessage,
        filteredDevices,
        setFilteredDevices,
        handleGetAllLoggedInDevices,
        setOpenMessage
    };
};