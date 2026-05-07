import React, { useEffect, useState } from "react";
import type { GetAllParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/getAllParkingSlotAttributes";
import type { PaginationAttributes } from "../../../types/paginationAttributes";
import { getAllParkingSlotAPI } from "../APIs/getAllParkingSlotAPI";
import { useAppSelector } from "../../../utils/useAppSelector";


type UseGetAllParkingSlotsReturns = {
    pagination               : PaginationAttributes;
    setPagination            : React.Dispatch<React.SetStateAction<PaginationAttributes>>;
    message                  : string;
    errMessage               : boolean;
    progress                 : number;
    open                     : boolean;
    clearMessage             : () => void;
    slots                    : GetAllParkingSlotAttributes;
    openMessage              : boolean;
    setOpenMessage           : React.Dispatch<React.SetStateAction<boolean>>;
};

export const useGetAllParkingSlots = (): UseGetAllParkingSlotsReturns => {
    const[message, setMessage]         = useState("");
    const[errMessage, setErrMessage]   = useState(false);
    const[progress, setProgress]       = useState(0);
    const[open, setOpen]               = useState(false);
    const[slots, setSlots]             = useState<GetAllParkingSlotAttributes>([]);
    const[openMessage, setOpenMessage] = useState(false);
    const[pagination, setPagination]   = useState<PaginationAttributes>({
        currentPage   : 1,
        limit         : 2,
        sort          : "-createdAt",
        total         : 0,
        totalPages    : 1,
        vehicleTypeId : undefined
    });

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setErrMessage(false);
        setMessage("");
    };
    
    useEffect(() => {
        if (userToken) {
            handleGetAllParkingSlots();
        };
    }, [userToken, pagination?.currentPage, pagination?.vehicleTypeId]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const handleGetAllParkingSlots = async () => {
        setOpen(true);
        setProgress(20);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return prev;
                };
                return prev + 10;
            });
        }, 400);
        try {
            const res = await getAllParkingSlotAPI(userToken, pagination?.vehicleTypeId, pagination?.limit, pagination?.sort, pagination?.currentPage);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setOpen(false);
                setProgress(0);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            setSlots(res.data.data ?? []);
            clearInterval(interval);
            setErrMessage(false);
            if (res.data.pagination) {
                setPagination((prev) => {
                    if (prev?.currentPage === res.data.pagination?.currentPage && prev?.limit === res.data.pagination?.limit && prev?.total === res.data.pagination?.total && prev?.totalPages === res.data.pagination?.totalPages) {
                        return prev;
                    };
                    return {...prev, ...res.data.pagination};
                });
            };
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setProgress(0);
            setOpen(false);
        } finally {
            setOpen(false);
            setProgress(0);
        }
    };
    return {
        clearMessage,
        errMessage,
        message,
        open,
        openMessage,
        pagination,
        progress,
        slots,
        setOpenMessage,
        setPagination
    };
};