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
};

export const useResetPassword = (): UseResetPasswordReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = (): void => {
        setMessage("");
        setErrMessage(false);
    };

    const handleResetPassword = async (payload: ResetPasswordAttribute) => {
        setLoading(true);

        try {
            const response = await resetPasswordAPI(payload, userToken);
            if (!response.data.success) {
                setErrMessage(true);
                setMessage(response.data.message);
                return;
            };
            setMessage(response.data.message);
            setErrMessage(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setLoading(false);
        } finally {
            setLoading(false);
        };
    };
    return {
        clearMessage,
        errMessage,
        handleResetPassword,
        loading,
        message
    };
};