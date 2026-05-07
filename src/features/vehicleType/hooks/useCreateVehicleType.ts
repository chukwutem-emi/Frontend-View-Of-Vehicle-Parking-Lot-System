import { useState } from "react";
import type { CreateVehicleTypePayloadAttributes } from "../../../types/vehicleTypeAttributes/createVehicleTypeAttribute";
import { createVehicleTypeAPI } from "../APIs/createVehicleTypeAPI";
import { useAppSelector } from "../../../utils/useAppSelector";


type UseCreateVehicleTypeReturns = {
    handleCreateVehicleType : (payload: CreateVehicleTypePayloadAttributes) => Promise<void>;
    clearMessage            : () => void;
    errMessage              : boolean;
    message                 : string;
    loading                 : boolean;
    progress                : number;
    open                    : boolean;
};

export const useCreateVehicleType = (): UseCreateVehicleTypeReturns => {
    const[errMessage, setErrMessage] = useState(false);
    const[progress, setProgress]     = useState(0);
    const[loading, setLoading]       = useState(false);
    const[message, setMessage]       = useState("");
    const[open, setOpen]             = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleCreateVehicleType = async (payload: CreateVehicleTypePayloadAttributes) => {
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
            const res = await createVehicleTypeAPI(userToken, payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setLoading(false);
                setOpen(false);
                setProgress(0);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            setErrMessage(false);
            clearInterval(interval);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setOpen(false);
            setProgress(0);
            setLoading(false);
        } finally {
            setLoading(false);
            setOpen(false);
            setProgress(0);
        }

    }
    return {
        clearMessage,
        errMessage,
        handleCreateVehicleType,
        loading,
        message,
        open,
        progress
    };
};