import { useState } from "react";
import {createUser} from "../APIs/signupAPI";
import type {SignupPayloadAttributes} from "../../../types/authAttributes/signupAttributes";
import { useNavigate } from "react-router";



type UseSignUpReturns = {
    errMessage       : boolean;
    handleCreateUser : (payload: SignupPayloadAttributes) => Promise<void>;
    message          : string;
    loading          : boolean;
    clearMessage     : () => void;
    progress         : number;
    isOpen           : boolean;
};

export const useSignup = (): UseSignUpReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[isOpen, setIsOpen]         = useState(false);

    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    const handleCreateUser = async (payload: SignupPayloadAttributes) => {
        setLoading(true);
        setProgress(20);
        setIsOpen(true);

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
            const res = await createUser(payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            clearInterval(interval);
            clearInterval(interval);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/auth/login")
            }, 4000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setIsOpen(false);
            setProgress(0);
        } finally {
            setLoading(false);
            setIsOpen(false);
        };
    };
    return {
        errMessage,
        handleCreateUser,
        message,
        loading,
        clearMessage,
        progress,
        isOpen
    };
};