import { useState } from "react";
import type { UpdatePasswordAttributes } from "../../../types/authAttributes/updatePasswordAttributes";
import { useAppSelector } from "../../../utils/useAppSelector";
import { updatePasswordAPI } from "../APIs/updatePasswordAPI";



type UseUpdatePasswordReturns = {
    handleUpdatePassword : (payload: UpdatePasswordAttributes, resetToken: string) => Promise<void>;
    errMessage           : boolean;
    message              : string;
    loading              : boolean;
    clearMessage         : () => void;
    progress             : number;
    open                 : boolean;
};

export const useUpdatePassword = (): UseUpdatePasswordReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[open, setOpen]             = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = (): void => {
        setMessage("");
        setErrMessage(false);
    };

    const handleUpdatePassword = async (payload: UpdatePasswordAttributes, resetToken: string) => {
        setLoading(true);
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
            const response = await updatePasswordAPI(userToken, payload, resetToken);
            if (!response.data.success) {
                setErrMessage(true);
                setMessage(response.data.message);
                setOpen(false);
                setProgress(0);
                return;
            };
            setProgress(100);
            setMessage(response.data.message);
            setErrMessage(false);
            clearInterval(interval);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log({
                    ERROR: err.message,
                    CAUSE: err.cause
                });
                setMessage(err.message);
            };
            setErrMessage(true);
            setProgress(0);
            setOpen(false);
            setLoading(false);
        } finally {
            setLoading(false);
            setOpen(false);
            setProgress(0);
        };
    };
    return {
        clearMessage,
        errMessage,
        handleUpdatePassword,
        loading,
        message,
        open,
        progress
    };
};