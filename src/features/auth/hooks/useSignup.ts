import { useState } from "react";
import {createUser} from "../APIs/signupAPI";
import type {SignupPayloadAttributes} from "../../../types/authAttributes/signupAttributes";

export const useSignup = () => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[isOpen, setIsOpen]         = useState(false);

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
            const {data, status} = await createUser(payload);
    
            if (status === 201) {
                setMessage(data.message);
                clearInterval(interval);
                setProgress(100);
                clearInterval(interval);
                setErrMessage(false);
            } else  {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "An error occurred!"]);
                setErrMessage(true);
            }
        } catch (err) {
            console.log("ERROR:", err);
            setMessage((err as Error).message);
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