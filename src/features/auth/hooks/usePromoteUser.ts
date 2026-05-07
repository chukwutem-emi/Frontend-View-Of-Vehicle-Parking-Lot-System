import { useState } from "react";
import { promoteUserAPI } from "../APIs/promoteUserAPI";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../utils/useAppSelector";


type UsePromoteUserReturns = {
    message           : string;
    clearMessage      : () => void;
    errMessage        : boolean;
    handlePromoteUser : (userId: number) => Promise<void>;
    open              : boolean;
    progress          : number;
};

export const usePromoteUser = (): UsePromoteUserReturns => {
    const[message, setMessage]       = useState("");
    const[progress, setProgress]     = useState(0);
    const[errMessage, setErrMessage] = useState(false);
    const[open, setOpen]             = useState(false);

     const userToken = useAppSelector((state) => state.auth?.token);


    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handlePromoteUser = async (userId: number) => {
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
            const res = await promoteUserAPI(userToken, userId);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setProgress(0);
                setOpen(false);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            clearInterval(interval);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/app/users-dashboard");
            }, 3000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setOpen(false);
            setProgress(0);
            setErrMessage(true);
        } finally {
            setOpen(false);
            setProgress(0);
        }
    };

    return {
        message,
        clearMessage,
        errMessage,
        handlePromoteUser,
        open,
        progress
    };
};