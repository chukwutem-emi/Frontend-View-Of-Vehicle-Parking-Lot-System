import { useState } from "react";
import { useSelector } from "react-redux";
import type { UpdateUserDetailsPayloadAttributes } from "../../../types/authAttributes/updateUserDetailsAttributes";
import {updateUserDetailsAPI} from "../APIs/updateUserDetailsAPI";



export const useUpdateUserDetails = () => {
    const[message, setMessage]       = useState("");
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[errMessage, setErrMessage] = useState(false);
    const[open, setOpen]             = useState(false);


    const userToken = useSelector((store: any) => store.token?.getToken);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleUpdateUserDetails = async <U>(payload: UpdateUserDetailsPayloadAttributes, userId: U) => {
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
            const {data, status} = await updateUserDetailsAPI(payload, userToken, userId);
            if (status === 200) {
                setMessage(data?.message);
                clearInterval(interval);
                setProgress(100);
                setErrMessage(false);
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "An error occurred!"]);
                setErrMessage(true);
                setProgress(0);
                setOpen(false);
            };
        } catch (err: any) {
            console.log("ERROR:", err.message);
            setMessage(err.message);
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