import { useState } from "react";
import {createParkingSessionAPI} from "../APIs/createParkingSessionAPI";
import type { CreateParkingSessionAttributes } from "../../../types/parkingSessionAttributes/createParkingSessionAttributes";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../utils/useAppSelector";

type UseCreateParkingSessionReturns = {
    message                    : string; 
    errMessage                 : boolean; 
    loading                    : boolean; 
    progress                   : number; 
    open                       : boolean; 
    clearMessage               : () => void; 
    handleCreateParkingSession : (payload: CreateParkingSessionAttributes) => Promise<void>
};

export const useCreateParkingSession = (): UseCreateParkingSessionReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[open, setOpen]             = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleCreateParkingSession = async (payload: CreateParkingSessionAttributes) => {
        setLoading(true);
        setProgress(20);
        setOpen(true);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return prev
                };
                return prev + 10
            });
        }, 400);

        try {
            const res = await createParkingSessionAPI(payload, userToken);
            if (!res.data.success) {
                setMessage(res.data.Message);
                setErrMessage(true);
                setOpen(false);
                setProgress(0);
                return;
            };
            setProgress(100);
            setMessage(res.data.Message);
            setErrMessage(false);
            clearInterval(interval);
            setTimeout(() => {
                navigate("/app/parking-session-dashboard");
            }, 3000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setLoading(false);
            setProgress(0);
            setOpen(false);
        } finally {
            setLoading(false);
            setOpen(false);
            setProgress(0);
        };
    };

    return {
        loading,
        clearMessage,
        message,
        progress,
        open,
        handleCreateParkingSession,
        errMessage
    };
};