import { useState } from "react";
import type { UpdateUserDetailsPayloadAttributes } from "../../../types/authAttributes/updateUserDetailsAttributes";
import {updateUserDetailsAPI} from "../APIs/updateUserDetailsAPI";
import { useAppSelector } from "../../../utils/useAppSelector";
import { useNavigate } from "react-router-dom";


type UseUpdateUserDetailsReturns = {
    message                 : string;
    loading                 : boolean;
    progress                : number;
    errMessage              : boolean;
    open                    : boolean;
    handleUpdateUserDetails : (payload: UpdateUserDetailsPayloadAttributes, userId: number) => Promise<void>;
    clearMessage            : () => void;
};

export const useUpdateUserDetails = (): UseUpdateUserDetailsReturns => {
    const[message, setMessage]       = useState("");
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[errMessage, setErrMessage] = useState(false);
    const[open, setOpen]             = useState(false);


     const userToken = useAppSelector((state) => state.auth?.token);
     const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleUpdateUserDetails = async (payload: UpdateUserDetailsPayloadAttributes, userId: number) => {
        setLoading(true);
        setOpen(true);
        setProgress(20);

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
            const res = await updateUserDetailsAPI(payload, userToken, userId);
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
                navigate("/auth/current-user");
            }, 3000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setOpen(false);
            setProgress(0);
        } finally {
            setLoading(false);
            setOpen(false);
            setProgress(0)
        }
    };
    return {
        message,
        loading,
        progress,
        errMessage,
        open,
        handleUpdateUserDetails,
        clearMessage
    };
};