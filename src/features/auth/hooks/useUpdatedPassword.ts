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
};

export const useUpdatePassword = (): UseUpdatePasswordReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = (): void => {
        setMessage("");
        setErrMessage(false);
    };

    const handleUpdatePassword = async (payload: UpdatePasswordAttributes, resetToken: string) => {
        setLoading(true);
        try {
            const response = await updatePasswordAPI(userToken, payload, resetToken);
            if (!response.data.success) {
                setErrMessage(true);
                setMessage(response.data.message);
                return;
            };
            setMessage(response.data.message);
            setErrMessage(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log({
                    ERROR: err.message,
                    CAUSE: err.cause
                });
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
        handleUpdatePassword,
        loading,
        message
    };
};