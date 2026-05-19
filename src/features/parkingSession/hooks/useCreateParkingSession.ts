import { useState } from "react";
import {createParkingSessionAPI} from "../APIs/createParkingSessionAPI";
import type { CreateParkingSessionAttributes } from "../../../types/parkingSessionAttributes/createParkingSessionAttributes";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../utils/useAppSelector";

type UseCreateParkingSessionReturns = {
    message                    : string; 
    errMessage                 : boolean; 
    loading                    : boolean; 
    clearMessage               : () => void; 
    handleCreateParkingSession : (payload: CreateParkingSessionAttributes) => Promise<void>
};

export const useCreateParkingSession = (): UseCreateParkingSessionReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleCreateParkingSession = async (payload: CreateParkingSessionAttributes) => {
        setLoading(true);

        try {
            const res = await createParkingSessionAPI(payload, userToken);
            if (!res.data.success) {
                setMessage(res.data.Message);
                setErrMessage(true);
                return;
            };
            setMessage(res.data.Message);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/app/parking-session-dashboard");
            }, 3000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setLoading(false);
        } finally {
            setLoading(false);
        };
    };

    return {
        loading,
        clearMessage,
        message,
        handleCreateParkingSession,
        errMessage
    };
};