import React, { useState } from "react";
import type { GetParkingSessionAttributes } from "../../../types/parkingSessionAttributes/getParkingSessionAttributes";
import { useSelector } from "react-redux";
import { getParkingSessionAPI } from "../APIs/getParkingSessionAPI";


type FunctionReturnValues = {
    setOpenMessage          : React.Dispatch<React.SetStateAction<boolean>>;
    openMessage             : boolean;
    errMessage              : boolean;
    open                    : boolean;
    progress                : number;
    clearMessage            : () => void;
    session?                : GetParkingSessionAttributes | null;
    handleGetParkingSession : <U>(sessionId: U)  => Promise<void>
    message                 : string;
};

export const  useGetParkingSession = (): FunctionReturnValues => {
    const[message, setMessage]          = useState("");
    const[progress, setProgress]        = useState(0);
    const[errMessage, setErrMessage]    = useState(false);
    const[open, setOpen]                = useState(false);
    const[openMessage, setOpenMessage]  = useState(false);
    const[session, setSession]          = useState<GetParkingSessionAttributes | null>(null);

    const userToken = useSelector((store: any) => store.token?.getToken);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleGetParkingSession = async <U>(sessionId: U): Promise<void> => {
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
            const {data, status} = await getParkingSessionAPI(sessionId, userToken);
            if (status === 200) {
                setMessage(data?.message);
                setSession(data?.data);
                setProgress(100);
                setErrMessage(false);
                clearInterval(interval);
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "Something went wrong!"]);
                setErrMessage(true);
                setProgress(0);
                setOpen(false);
            };
        } catch (err: any) {
            console.log("ERROR:", err.cause);
            setMessage(err.cause);
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