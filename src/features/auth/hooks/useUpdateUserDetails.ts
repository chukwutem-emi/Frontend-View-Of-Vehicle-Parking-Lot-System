import { useState } from "react";
import type { UpdateUserDetailsPayloadAttributes } from "../../../types/authAttributes/updateUserDetailsAttributes";
import {updateUserDetailsAPI} from "../APIs/updateUserDetailsAPI";
import { useAppSelector } from "../../../utils/useAppSelector";
import { useNavigate } from "react-router-dom";


type UseUpdateUserDetailsReturns = {
    message                 : string;
    loading                 : boolean;
    errMessage              : boolean;
    handleUpdateUserDetails : (payload: UpdateUserDetailsPayloadAttributes, userId: number) => Promise<void>;
    clearMessage            : () => void;
};

export const useUpdateUserDetails = (): UseUpdateUserDetailsReturns => {
    const[message, setMessage]       = useState("");
    const[loading, setLoading]       = useState(false);
    const[errMessage, setErrMessage] = useState(false);


     const userToken = useAppSelector((state) => state.auth?.token);
     const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleUpdateUserDetails = async (payload: UpdateUserDetailsPayloadAttributes, userId: number) => {
        setLoading(true);

        try {
            const res = await updateUserDetailsAPI(payload, userToken, userId);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                return;
            };
            setMessage(res.data.message);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/auth/current-user");
            }, 3000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
        } finally {
            setLoading(false);
        }
    };
    return {
        message,
        loading,
        errMessage,
        handleUpdateUserDetails,
        clearMessage
    };
};