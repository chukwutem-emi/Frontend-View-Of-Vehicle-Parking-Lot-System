import { useState } from "react";
import { useAppSelector } from "../../../utils/useAppSelector";
import type { GetLoggedInDeviceAttributes } from "../../../types/userDevices/getLoggedInDeviceAttributes";
import { getLoggedInDeviceAPI } from "../APIs/getLoggedInDevice";


type UseGetLoggedInDeviceReturns = {
    clearMessage            : () => void;
    device                  : GetLoggedInDeviceAttributes | null;
    message                 : string;
    errMessage              : boolean;
    open                    : boolean;
    progress                : number;
    openMessage             : boolean;
    handleGetLoggedInDevice : (userId: number) => Promise<void>;
    setOpenMessage          : React.Dispatch<React.SetStateAction<boolean>>;
};

export const useGetLoggedInDevice = () : UseGetLoggedInDeviceReturns => {
    const [device, setDevice]                   = useState<GetLoggedInDeviceAttributes | null>(null);
    const [message, setMessage]                 = useState("");
    const [errMessage, setErrMessage]           = useState(false);
    const [open, setOpen]                       = useState(false);
    const [progress, setProgress]               = useState(0);
    const [openMessage, setOpenMessage]         = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);


    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleGetLoggedInDevice = async (userId: number) => {
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
            const res = await getLoggedInDeviceAPI(userToken, userId);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setProgress(100);
                setOpen(false);
                return;
            };
            setProgress(100);
            setDevice(res.data.data);
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
        device,
        message,
        errMessage,
        open,
        progress,
        openMessage,
        handleGetLoggedInDevice,
        setOpenMessage
    };
};