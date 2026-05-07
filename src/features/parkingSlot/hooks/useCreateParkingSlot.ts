import { useState } from "react";
import type { CreateParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/createParkingSlotAttributes";
import { createParkingSlotAPI } from "../APIs/createParkingSlotAPI";
import { useAppSelector } from "../../../utils/useAppSelector";

type UseCreateParkingSlotReturns = {
    handleCreateParkingSlot : (payload: CreateParkingSlotAttributes) => Promise<void>;
    message                 : string;
    errMessage              : boolean;
    loading                 : boolean;
    progress                : number;
    open                    : boolean;
    clearMessage            : () => void;
};

export const useCreateParkingSlot = (): UseCreateParkingSlotReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[open, setOpen]             = useState(false);


    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setErrMessage(false);
        setMessage("");
    };

    const handleCreateParkingSlot = async (payload: CreateParkingSlotAttributes) => {
        setLoading(true);
        setOpen(true);
        setProgress(20);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return prev;
                };
                return prev + 10;
            });
        }, 400);
        try {
            const res = await createParkingSlotAPI(userToken, payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setProgress(0);
                setOpen(false);
                setLoading(false);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            clearInterval(interval);
            setErrMessage(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setLoading(false);
            setProgress(0);
            setOpen(false)
        } finally {
            setLoading(false);
            setOpen(false);
            setProgress(0);
        };
    };

    return {
        clearMessage,
        errMessage,
        handleCreateParkingSlot,
        loading,
        message,
        open,
        progress
    };
};