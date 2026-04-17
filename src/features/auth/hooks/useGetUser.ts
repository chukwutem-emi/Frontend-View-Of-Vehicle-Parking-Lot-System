import { useEffect, useState } from "react";
import {getUserAPI} from "../APIs/getUserAPI";
import { useSelector } from "react-redux";
import type {GetUserAttributes} from "../../../types/authAttributes/getUserAttributes";


export const useGetUser = () => {
    const[message, setMessage]         = useState("");
    const[errMessage, setErrMessage]   = useState(false);
    const[loading, setLoading]         = useState(false);
    const[openMessage, setOpenMessage] = useState(false);
    const[user, setUser]               = useState<GetUserAttributes | undefined>(undefined)         

    const userToken = useSelector((store: any) => store.token?.getToken);


    useEffect(() => {
        if (userToken) {
            handleGetUser();
        };
    }, [userToken]);
    
    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    const handleGetUser = async () => {
        setLoading(true)
        try {
            const {data, status} = await getUserAPI(userToken);
            if (status === 200) {
                setUser(data?.userDetails);
                setMessage("User retrieved successfully!");
                setErrMessage(false);
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "An error occurred!"]);
                setErrMessage(true);
            }
        } catch (err: any) {
            setMessage(err.message);
            setErrMessage(true);
        } finally {
            setLoading(false);
        }
    };
    return {
        errMessage,
        message,
        loading,
        setOpenMessage,
        openMessage,
        user,
        clearMessage
    };
};