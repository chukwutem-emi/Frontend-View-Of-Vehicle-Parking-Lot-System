import { useState } from "react";
import { demoteUserAPI } from "../APIs/demoteUserAPI";
import { useSelector } from "react-redux";



export const useDemoteUser = () => {
    const[message, setMessage]       = useState("");
    const[progress, setProgress]     = useState(0);
    const[errMessage, setErrMessage] = useState(false);
    const[open, setOpen]             = useState(false);

    const userToken = useSelector((store:any) => store.token?.getToken);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    
    const handleDemoteUser = async <U>(userId: U) => {
        setProgress(20);
        setOpen(true);
        
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval)
                    return prev;
                };
                return prev + 10;
            });
        }, 400);
        
        try {
            const {data, status} = await demoteUserAPI(userToken, userId);
            if (status === 200) {
                setMessage(data?.message);
                setProgress(100);
                setErrMessage(false);
                clearInterval(interval);
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "Something went wrong!"]);
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
            setOpen(false);
            setProgress(0)
        };
    };

    return {
        message,
        errMessage,
        progress,
        open,
        clearMessage,
        handleDemoteUser
    };
};