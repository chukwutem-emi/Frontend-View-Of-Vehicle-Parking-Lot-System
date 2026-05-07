import { useState } from "react";
import type { UpdateVehicleTypePayloadAttributes } from "../../../types/vehicleTypeAttributes/updateVehicleTypeAttribute";
import { updateVehicleTypeAPI } from "../APIs/updateVehicleTypeAPI";
import { useAppSelector } from "../../../utils/useAppSelector";

type UseUpdateVehicleTypeReturns = {
    clearMessage            : () => void;
    errMessage              : boolean;
    progress                : number;
    loading                 : boolean;
    message                 : string;
    open                    : boolean;
    handleUpdateVehicleType : (payload: UpdateVehicleTypePayloadAttributes, vehicleId: number) => Promise<void>;
};

export const useUpdateVehicleType = (): UseUpdateVehicleTypeReturns => {
    const[errMessage, setErrMessage]   = useState(false);
    const[progress, setProgress]       = useState(0);
    const[loading, setLoading]         = useState(false);
    const[message, setMessage]         = useState("");
    const[open, setOpen]               = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    
    const handleUpdateVehicleType = async (payload: UpdateVehicleTypePayloadAttributes, vehicleId: number) => {
        setLoading(true);
        setProgress(20);
        setOpen(true);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 90) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 10;
            });
        }, 400);

        try {
            const res = await updateVehicleTypeAPI(userToken, vehicleId, payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setLoading(false);
                setOpen(false);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            setErrMessage(false);
            clearInterval(interval);
        } catch (error: unknown) {
            if (error instanceof Error) {
                setMessage(error.message);
            };
            setErrMessage(true);
            setLoading(false);
            setOpen(false);
        } finally {
            setLoading(false);
            setProgress(100);
            setOpen(false);
        }

    };
    return {
        clearMessage,
        errMessage,
        progress,
        loading,
        message,
        open,
        handleUpdateVehicleType
    };
};
