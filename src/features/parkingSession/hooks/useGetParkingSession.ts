import React, { useState } from "react";
import type { GetParkingSessionAttributes } from "../../../types/parkingSessionAttributes/getParkingSessionAttributes";
import { getParkingSessionAPI } from "../APIs/getParkingSessionAPI";
import { useAppSelector } from "../../../utils/useAppSelector";


type UseGetParkingSessionReturns = {
    setOpenMessage          : React.Dispatch<React.SetStateAction<boolean>>;
    openMessage             : boolean;
    errMessage              : boolean;
    open                    : boolean;
    progress                : number;
    clearMessage            : () => void;
    session?                : GetParkingSessionAttributes | null;
    handleGetParkingSession : (sessionId: number)  => Promise<void>
    message                 : string;
};

export const  useGetParkingSession = (): UseGetParkingSessionReturns => {
    const[message, setMessage]          = useState("");
    const[progress, setProgress]        = useState(0);
    const[errMessage, setErrMessage]    = useState(false);
    const[open, setOpen]                = useState(false);
    const[openMessage, setOpenMessage]  = useState(false);
    const[session, setSession]          = useState<GetParkingSessionAttributes | null>(null);

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleGetParkingSession = async (sessionId: number): Promise<void> => {
        setOpen(true);
        setProgress(20);

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
            const res = await getParkingSessionAPI(sessionId, userToken);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setProgress(0);
                setOpen(false);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            setSession(res.data.data ?? null);
            setErrMessage(false);
            clearInterval(interval);
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
        };
    };
    return {
        clearMessage,
        errMessage,
        handleGetParkingSession,
        open,
        openMessage,
        progress,
        setOpenMessage,
        session,
        message
    };
};