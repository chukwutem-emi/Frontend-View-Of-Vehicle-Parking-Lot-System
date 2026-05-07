import { useState } from "react";
import type { ResetPasswordAttribute } from "../../../types/authAttributes/resetPasswordAttribute";
import { resetPasswordAPI } from "../APIs/resetPasswordAPI";
import { useAppSelector } from "../../../utils/useAppSelector";



type UseResetPasswordReturns = {
    handleResetPassword : (payload: ResetPasswordAttribute) => Promise<void>;
    errMessage          : boolean;
    message             : string;
    loading             : boolean;
    clearMessage        : () => void;
    progress            : number;
    open                : boolean;
};

export const useResetPassword = (): UseResetPasswordReturns => {
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

    const handleResetPassword = async (payload: ResetPasswordAttribute) => {
        setOpen(true);
        setLoading(true);
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
            const response = await resetPasswordAPI(payload, userToken);
            if (!response.data.success) {
                setErrMessage(true);
                setMessage(response.data.message);
                setOpen(false);
                setProgress(0);
                return;
            };
            setMessage(response.data.message);
            setProgress(100);
            setErrMessage(false);
            clearInterval(interval);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setProgress(0);
            setOpen(false);
            setErrMessage(true);
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
        handleResetPassword,
        open,
        loading,
        message,
        progress
    };
};