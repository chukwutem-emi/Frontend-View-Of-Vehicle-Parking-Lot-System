import { useState } from "react";
import { demoteUserAPI } from "../APIs/demoteUserAPI";
import { useAppSelector } from "../../../utils/useAppSelector";
import { useNavigate } from "react-router-dom";


type UseDemoteUserReturns = {
    message          : string;
    errMessage       : boolean;
    progress         : number;
    open             : boolean;
    clearMessage     : () => void;
    handleDemoteUser : (userId: number) => Promise<void>;
};

export const useDemoteUser = (): UseDemoteUserReturns => {
    const[message, setMessage]       = useState("");
    const[progress, setProgress]     = useState(0);
    const[errMessage, setErrMessage] = useState(false);
    const[open, setOpen]             = useState(false);

    const userToken = useAppSelector((state) => state.auth?.token);

    const navigate = useNavigate();

    const clearMessage = (): void => {
        setMessage("");
        setErrMessage(false);
    };

    
    const handleDemoteUser = async (userId: number) => {
        setProgress(20);
        setOpen(true);
        
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval)
                    return prev;
                };
                return prev + 10;
            });
        }, 400);
        
        try {
            const res = await demoteUserAPI(userToken, userId);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setProgress(0);
                setOpen(false);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            setErrMessage(false);
            clearInterval(interval);
            setTimeout(() => {
                navigate("/app/users-dashboard");
            }, 3000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setOpen(false);
            setProgress(0);
        } finally {
            setOpen(false);
            setProgress(0)
        };
    };

    return {
        message,
        errMessage,
        progress,
        open,
        clearMessage,
        handleDemoteUser
    };
};