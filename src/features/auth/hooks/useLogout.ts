import type React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { removeToken } from "../authSlices/tokenSlice";
import { removeUserDetails } from "../authSlices/userSlice";
import { useNavigate } from "react-router";


type FunctionReturnValue = {
    handleLogout   : () => void;
    clearMessage   : () => void;
    setIsOpen      : React.Dispatch<React.SetStateAction<boolean>>;
    isOpen         : boolean;
    open           : boolean;
    setOpen        : React.Dispatch<React.SetStateAction<boolean>>;
    message        : string;
    progress       : number;
    errMessage     : boolean;
    openMessage    : boolean;
    setOpenMessage : React.Dispatch<React.SetStateAction<boolean>>;
};

export const useLogout = (): FunctionReturnValue => {
    const[isOpen, setIsOpen]           = useState(false);
    const[progress, setProgress]       = useState(0);
    const[message, setMessage]         = useState("");
    const[open, setOpen]               = useState(false);
    const[errMessage, setErrMessage]   = useState(false);
    const[openMessage, setOpenMessage] = useState(false);

    const dispatchActionAndRemoveToken = useDispatch();
    const dispatchActionAndRemoveUserDetails = useDispatch();

    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    useEffect(() => {
        setIsOpen(true);
    }, []);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const handleLogout = () => {

        setProgress(20);
        setOpen(true);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return prev;
                };
                return prev + 20
            });
        }, 400);

        try {
            dispatchActionAndRemoveToken(removeToken());
            dispatchActionAndRemoveUserDetails(removeUserDetails());
            setErrMessage(false);
            setTimeout(() => {
                setProgress(100);
                clearInterval(interval); 
            }, 3000);
            setTimeout(() => {
                setMessage("You have successfully logged-out.");   
            }, 4000);

            setTimeout(() => {
                navigate("/");
            }, 6000);

        } catch (err: any) {
            setErrMessage(true);
            setOpen(false);
            setMessage(err.message);
            setProgress(0);
        };
    };
    return {
        clearMessage,
        errMessage,
        handleLogout,
        isOpen,
        message,
        open,
        progress,
        setIsOpen,
        setOpen,
        openMessage,
        setOpenMessage
    };
}