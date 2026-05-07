import { useState } from "react";
import { deleteUserAPI } from "../APIs/deleteUserAPI";
import { useAppSelector } from "../../../utils/useAppSelector";
import { useNavigate } from "react-router-dom";




type UseDeleteUserReturns = {
    clearMessage     : () => void;
    handleDeleteUser : (userId: number) => Promise<void>
    message          : string;
    open             : boolean;
    progress         : number;
    errMessage       : boolean;
};

export const useDeleteUser = (): UseDeleteUserReturns => {
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

    const handleDeleteUser = async (userId: number) => {
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
            const res = await deleteUserAPI(userToken, userId);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setOpen(false);
                setProgress(0);
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
            setErrMessage(true);
            setProgress(0);
            setOpen(false);
        } finally {
            setOpen(false);
            setProgress(0)
        };
    };
    return {
        clearMessage,
        handleDeleteUser,
        message,
        open,
        progress,
        errMessage
    };
};