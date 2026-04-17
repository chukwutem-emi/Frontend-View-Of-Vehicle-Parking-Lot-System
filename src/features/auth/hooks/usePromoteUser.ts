import { useState } from "react";
import { useSelector } from "react-redux";
import { promoteUserAPI } from "../APIs/promoteUserAPI";
import { useNavigate } from "react-router";




export const usePromoteUser = () => {
    const[message, setMessage]       = useState("");
    const[progress, setProgress]     = useState(0);
    const[errMessage, setErrMessage] = useState(false);
    const[open, setOpen]             = useState(false);

    const userToken = useSelector((store:any) => store.token?.getToken);

    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handlePromoteUser = async <U>(userId: U) => {
        setProgress(20);
        setOpen(true);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return prev
                };
                return prev + 10;
            });
        }, 400);

        try {
            const {data, status} = await promoteUserAPI(userToken, userId);
            if (status === 200) {
                setMessage(data?.message);
                setProgress(100);
                clearInterval(interval);
                setErrMessage(false);
                setTimeout(() => {
                    navigate("/app/users");
                }, 4000);
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
            setOpen(false);
            setProgress(0);
            setErrMessage(true);
        } finally {
            setOpen(false);
            setProgress(0);
        }
    };

    return {
        message,
        clearMessage,
        errMessage,
        handlePromoteUser,
        open,
        progress
    };
};