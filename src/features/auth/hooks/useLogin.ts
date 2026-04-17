import {useState} from "react";
import type { LoginPayloadAttributes } from "../../../types/authAttributes/loginAttributes";
import {loginUser} from "../APIs/loginAPI";
import { useDispatch } from "react-redux";
import { setToken } from "../authSlices/tokenSlice";
import { useNavigate } from "react-router";
import {apiClient} from "../../../services/apiClient";
import { setUserDetails } from "../authSlices/userSlice";



export const useLogin = () => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[isOpen, setIsOpen]         = useState(false); 
    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    const getUser = async (token: any) => {
        try {
            const res = await apiClient("/auth/user", {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                method: "GET"
            });
            if (res.status === 200) {
                dispatch(setUserDetails(res?.data?.userDetails));
            };
        } catch (err: any) {
            console.log("ERROR:", err.message);
        };
    };
    const handleLoginUser = async (payload: LoginPayloadAttributes) => {
        setLoading(true);
        setIsOpen(true);
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
            const {data, status} = await loginUser(payload);
            if (status === 200) {
                setMessage(data.message);
                clearInterval(interval);
                setProgress(100);
                dispatch(setToken(data.token));
                await getUser(data.token);
                setErrMessage(false);
                navigate("/app/dashboard");
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "An error occurred!"]);
                setErrMessage(true);
                setProgress(0);
                setIsOpen(false)
            }
        } catch (error) {
            setErrMessage(true);
            setMessage((error as Error).message);
            setProgress(0);
            setIsOpen(false);
        } finally {
            setLoading(false);
            setIsOpen(false);
            setProgress(0);
        }
    };
    return {
        errMessage,
        message,
        loading,
        clearMessage,
        handleLoginUser,
        progress,
        isOpen
    };
};
