import {useState} from "react";
import type { LoginPayloadAttributes } from "../../../types/authAttributes";
import {loginUser} from "../loginAPI";
import { useDispatch } from "react-redux";
import { setToken } from "../../../utils/tokenSlice";



export const useLogin = () => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false); 

    const dispatch = useDispatch();

    const clearMessage = () => {
        setMessage("");
    };

    const handleLoginUser = async (payload: LoginPayloadAttributes) => {
        setLoading(true);
        try {
            const {data, status} = await loginUser(payload);
            if (status === 200) {
                setMessage(data.message);
                dispatch(setToken(data.token));
                setErrMessage(false);
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key || "An error occurred!"]);
                setErrMessage(true);
            }
        } catch (error) {
            setErrMessage(true);
            setMessage((error as Error).message);
        } finally {
            setLoading(false);
        }

    };
    return {
        errMessage,
        message,
        loading,
        clearMessage,
        handleLoginUser
    };
};