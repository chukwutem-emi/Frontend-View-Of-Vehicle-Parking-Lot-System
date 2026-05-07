import { useEffect, useState } from "react";
import type {GetUserAttributes} from "../../../types/authAttributes/getUserAttributes";
import { useAppSelector } from "../../../utils/useAppSelector";
import { getCurrentUserAPI } from "../APIs/getCurrentUserAPI";


type UseGetCurrentUserReturns = {
    errMessage            : boolean;
    message               : string;
    loading               : boolean;
    setOpenMessage        : React.Dispatch<React.SetStateAction<boolean>>;
    openMessage           : boolean;
    user                  : GetUserAttributes | undefined;
    clearMessage          : () => void;
    handleGetCurrentUser  : () => Promise<void>;
};

export const useGetCurrentUser = (): UseGetCurrentUserReturns => {
    const[message, setMessage]         = useState("");
    const[errMessage, setErrMessage]   = useState(false);
    const[loading, setLoading]         = useState(false);
    const[openMessage, setOpenMessage] = useState(false);
    const[user, setUser]               = useState<GetUserAttributes | undefined>(undefined)         

     const userToken = useAppSelector((state) => state.auth?.token);

    
    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    const handleGetCurrentUser = async () => {
        setLoading(true)
        try {
            const res = await getCurrentUserAPI(userToken);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                return;
            };
            setUser(res.data.data);
            setMessage(res.data.message);
            setErrMessage(false);
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
        errMessage,
        message,
        loading,
        setOpenMessage,
        openMessage,
        user,
        clearMessage,
        handleGetCurrentUser
    };
};