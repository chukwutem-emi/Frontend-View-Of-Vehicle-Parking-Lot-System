import {useState} from "react";
import type { LoginPayloadAttributes } from "../../../types/authAttributes/loginAttributes";
import {loginUser} from "../APIs/loginAPI";
import { useDispatch } from "react-redux";
import { setToken } from "../authSlices/tokenSlice";
import { useNavigate } from "react-router-dom";
import {apiClient} from "../../../services/apiClient";
import { setUserDetails } from "../authSlices/userSlice";
import type { GetUserAttributes } from "../../../types/authAttributes/getUserAttributes";



type UseLoginReturns = {
    errMessage      : boolean;
    message         : string;
    loading         : boolean;
    clearMessage    : () => void;
    handleLoginUser : (payload: LoginPayloadAttributes) => Promise<void>;
};

type GetUserAPIResponse = {
    success : boolean;
    message : string;
    data    : GetUserAttributes;
};

export const useLogin = (): UseLoginReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);

    

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    const getUser = async (token: string) => {
        try {
            const res = await apiClient<GetUserAPIResponse>("/auth/current-user", {
                headers: {
                    "Authorization": `Bearer ${token}`
                },
                method: "GET"
            });

            if (!res.data.success) return;

            dispatch(setUserDetails(res.data.data));
            return res.data.data;

        } catch (err: unknown) {
            if (err instanceof Error) {
                console.log({
                    ERROR: err.message,
                    CAUSE: err.cause
                });
            };
        };
    };
    const handleLoginUser = async (payload: LoginPayloadAttributes) => {
        setLoading(true);

        try {
            const res = await loginUser(payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                return;
            };
            setLoading(false);
            const user = await getUser(res.data.token);
            setErrMessage(false);
            dispatch(setToken(res.data.token));
            if (!user?.isAdmin) {
                navigate("/");
                return;
            }
            navigate("/app/dashboard");
        } catch (error: unknown) {
            if (error instanceof Error) {
                setMessage(error.message);
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
        clearMessage,
        handleLoginUser
    };
};
