import { useState } from "react";
import type { UpdateParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/updateParkingSlotAttributes";
import { updateParkingSlotAPI } from "../APIs/updateParkingSlotAPI";
import { useAppSelector } from "../../../utils/useAppSelector";



type UseUpdateParkingSlotReturns = {
    handleUpdateParkingSlot : (payload: UpdateParkingSlotAttributes, vehicleTypeId: number) => Promise<void>;
    message                 : string;
    errMessage              : boolean;
    loading                 : boolean;
    progress                : number;
    open                    : boolean;
    clearMessage            : () => void;
};


export const useUpdateParkingSlot = (): UseUpdateParkingSlotReturns => {
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

    const handleUpdateParkingSlot = async (payload: UpdateParkingSlotAttributes, vehicleTypeId: number) => {
        setLoading(true);
        setProgress(20);
        setOpen(true);

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
            const res = await updateParkingSlotAPI(userToken, vehicleTypeId, payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setOpen(false);
                setProgress(0);
                setLoading(false);
                return;
            };
            setMessage(res.data.message);
            setProgress(100);
            clearInterval(interval);
            setErrMessage(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setProgress(0);
            setOpen(false);
            setLoading(false);
        } finally {
            setLoading(false);
            setOpen(false);
            setProgress(0);
        };
    };

    return {
        clearMessage,
        errMessage,
        handleUpdateParkingSlot,
        loading,
        message,
        open,
        progress
    };
};