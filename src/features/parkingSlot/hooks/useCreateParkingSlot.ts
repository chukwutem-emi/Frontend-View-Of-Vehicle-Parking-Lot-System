import { useState } from "react";
import type { CreateParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/createParkingSlotAttributes";
import { createParkingSlotAPI } from "../APIs/createParkingSlotAPI";
import { useAppSelector } from "../../../utils/useAppSelector";
import { useNavigate } from "react-router-dom";

type UseCreateParkingSlotReturns = {
    handleCreateParkingSlot : (payload: CreateParkingSlotAttributes) => Promise<void>;
    message                 : string;
    errMessage              : boolean;
    loading                 : boolean;
    clearMessage            : () => void;
};

export const useCreateParkingSlot = (): UseCreateParkingSlotReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);


    const userToken = useAppSelector((state) => state.auth.token);

    const navigate = useNavigate();

    const clearMessage = () => {
        setErrMessage(false);
        setMessage("");
    };

    const handleCreateParkingSlot = async (payload: CreateParkingSlotAttributes) => {
        setLoading(true);
        try {
            const res = await createParkingSlotAPI(userToken, payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setLoading(false);
                return;
            };
            setMessage(res.data.message);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/app/parking-slot-dashboard"); 
            }, 4000);
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
        clearMessage,
        errMessage,
        handleCreateParkingSlot,
        loading,
        message
    };
};