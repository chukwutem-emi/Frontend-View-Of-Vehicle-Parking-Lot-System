import { useState } from "react";
import {createParkingSessionAPI} from "../APIs/createParkingSessionAPI";
import { useSelector } from "react-redux";
import type { CreateParkingSessionAttributes } from "../../../types/parkingSessionAttributes/createParkingSessionAttributes";

type FunctionReturnValues = {
    message                    : string; 
    errMessage                 : boolean; 
    loading                    : boolean; 
    progress                   : number; 
    open                       : boolean; 
    clearMessage               : () => void; 
    handleCreateParkingSession : (payload: CreateParkingSessionAttributes) => Promise<void>
};

export const useCreateParkingSession = (): FunctionReturnValues => {
    
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[open, setOpen]             = useState(false);

    const userToken = useSelector((store: any) => store.token?.getToken);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleCreateParkingSession = async (payload: CreateParkingSessionAttributes) => {
        setLoading(true);
        setProgress(20);
        setOpen(true);

        const interval = setTimeout(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return prev
                };
                return prev + 10
            });
        }, 400);

        try {
            const {data, status} = await createParkingSessionAPI(payload, userToken);
            if (status === 201) {
                setMessage(data?.Message);
                setErrMessage(false);
                setProgress(100);
                clearInterval(interval);           
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