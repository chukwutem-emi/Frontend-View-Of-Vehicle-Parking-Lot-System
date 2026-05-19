import { useState } from "react";
import {createUser} from "../APIs/signupAPI";
import type {SignupPayloadAttributes} from "../../../types/authAttributes/signupAttributes";
import { useNavigate } from "react-router-dom";



type UseSignUpReturns = {
    errMessage       : boolean;
    handleCreateUser : (payload: SignupPayloadAttributes) => Promise<void>;
    message          : string;
    loading          : boolean;
    clearMessage     : () => void;
};

export const useSignup = (): UseSignUpReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);

    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    const handleCreateUser = async (payload: SignupPayloadAttributes) => {
        setLoading(true);
        try {
            const res = await createUser(payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                return;
            };
            setMessage(res.data.message);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/auth/login")
            }, 4000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
        } finally {
            setLoading(false);
        };
    };
    return {
        errMessage,
        handleCreateUser,
        message,
        loading,
        clearMessage
    };
};