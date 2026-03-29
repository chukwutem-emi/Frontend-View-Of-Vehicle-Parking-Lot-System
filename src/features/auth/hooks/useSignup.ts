import { useState } from "react";
import {createUser} from "../signupAPI";
import type {SignupPayloadAttributes} from "../../../types/authAttributes";

export const useSignup = () => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);

    const clearMessage = () => {
        setMessage("");
    };
    const handleCreateUser = async (payload: SignupPayloadAttributes) => {
        setLoading(true);
        try {
            const {data, status} = await createUser(payload);
    
            if (status === 201) {
                setMessage(data.message);
                setErrMessage(false);
            } else  {
                const [key] = Object.keys(data);
                setMessage(data[key || "An error occurred!"]);
                setErrMessage(true);
            }
        } catch (err) {
            console.log("ERROR:", err);
            setMessage((err as Error).message);
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