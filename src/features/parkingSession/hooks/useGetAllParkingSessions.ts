import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import type { GetAllParkingSessionsAttributes } from "../../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import type { PaginationAttributes } from "../../../types/paginationAttributes";
import { getAllParkingSessionsAPI } from "../APIs/getAllParkingSessionAPI";


type FunctionReturnValues = {
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

export const useGetAllParkingSessions = (): FunctionReturnValues => {

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
        vehicleTypeId: 1
    });

    const userToken = useSelector((store: any) => store.token?.getToken);

    useEffect(() => {
        if (userToken) {
            handleGetAllParkingSessions(pagination?.currentPage);
        };
    }, [userToken, pagination?.currentPage]);

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
            const {data, status} = await getAllParkingSessionsAPI(userToken, pagination?.vehicleTypeId, page, pagination?.limit, pagination?.sort);

            if (status === 200) {
                setMessage(data?.message);
                setSessions(data?.data);
                setErrMessage(false);
                setProgress(100);
                clearInterval(interval);
                if (data?.pagination) {
                    setPagination((prev) => {
                        if(prev?.currentPage === data?.pagination.currentPage && prev?.total === data?.pagination?.total && prev?.totalPages === data?.pagination?.totalPages) {
                            return prev
                        };
                        return {...prev, ...data?.pagination}
                    });

                };
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "Something went wrong!"]);
                setErrMessage(true);
                setOpen(false);
                setProgress(0);
            };
        } catch (err: any) {
            console.log("ERROR:", err.message);
            setMessage(err.message);
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