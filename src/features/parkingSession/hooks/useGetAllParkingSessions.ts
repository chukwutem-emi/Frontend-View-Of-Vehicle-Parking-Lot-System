import React, { useEffect, useState } from "react"
import type { GetAllParkingSessionsAttributes } from "../../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import type { PaginationAttributes } from "../../../types/paginationAttributes";
import { getAllParkingSessionsAPI } from "../APIs/getAllParkingSessionAPI";
import { useAppSelector } from "../../../utils/useAppSelector";


type UseGetAllParkingSessionsReturns = {
    message        : string; 
    errMessage     : boolean; 
    sessions       : GetAllParkingSessionsAttributes; 
    open           : boolean; 
    progress       : number; 
    clearMessage   : () => void; 
    openMessage    : boolean
    setOpenMessage : React.Dispatch<React.SetStateAction<boolean>>;
    setPagination  : React.Dispatch<React.SetStateAction<PaginationAttributes>>;
    pagination     : PaginationAttributes;
};

export const useGetAllParkingSessions = (): UseGetAllParkingSessionsReturns => {
    const[message, setMessage]          = useState("");
    const[progress, setProgress]        = useState(0);
    const[errMessage, setErrMessage]    = useState(false);
    const[open, setOpen]                = useState(false);
    const[openMessage, setOpenMessage] = useState(false);
    const[sessions, setSessions]        = useState<GetAllParkingSessionsAttributes>([]);
    const[pagination, setPagination]    = useState<PaginationAttributes>({
        currentPage: 1,
        limit: 1,
        sort: "-createdAt" ,
        total: 0,
        totalPages: 1,
        vehicleTypeId: undefined
    });

    const userToken = useAppSelector((state) => state.auth.token);

    useEffect(() => {
        if (userToken) {
            handleGetAllParkingSessions(pagination?.currentPage);
        };
    }, [userToken, pagination?.currentPage, pagination?.vehicleTypeId]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleGetAllParkingSessions = async (page = 1): Promise<void> => {
        setProgress(20);
        setOpen(true);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return prev
                };
                return prev + 10;
            });
        }, 400);
        
        try {
            const res = await getAllParkingSessionsAPI(userToken, pagination?.vehicleTypeId, page, pagination?.limit, pagination?.sort);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setOpen(false);
                setProgress(0);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            setSessions(res.data.data);
            setErrMessage(false);
            clearInterval(interval);
            if (res.data.pagination) {
                setPagination((prev) => {
                    if(prev?.currentPage === res.data.pagination?.currentPage && prev?.total === res.data.pagination?.total && prev?.totalPages === res.data.pagination?.totalPages) {
                        return prev
                    };
                    return {...prev, ...res.data.pagination}
                });
            };
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setOpen(false);
            setProgress(0);
        } finally {
            setOpen(false);
            setProgress(0);
        };
    };
    return {
        clearMessage,
        errMessage,
        message,
        open,
        progress,
        sessions,
        openMessage,
        setOpenMessage,
        pagination,
        setPagination
    };
}