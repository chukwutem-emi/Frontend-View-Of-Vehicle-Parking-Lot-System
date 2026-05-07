import { useState } from "react";
import type { VehicleExitTimeAttributes } from "../../../types/parkingSessionAttributes/vehicleExitTimeAttributes";
import { vehicleExitTimeAPI } from "../APIs/vehicleExitTimeAPI";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../utils/useAppSelector";


type UseVehicleExitTimeReturns = {
    handleVehicleExitTime : (payload: VehicleExitTimeAttributes) => Promise<void>;
    clearMessage          : () => void;
    message               : string;
    errMessage            : boolean;
    loading               : boolean;
    progress              : number;
    open                  : boolean;
};

export const useVehicleExitTime = (): UseVehicleExitTimeReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[open, setOpen]             = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleVehicleExitTime = async (payload: VehicleExitTimeAttributes): Promise<void> => {
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
            const res = await vehicleExitTimeAPI(payload, userToken);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setOpen(false);
                setProgress(0);
                return;
            };
            setProgress(100);
            setMessage(res.data.message);
            clearInterval(interval);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/app/parking-session-dashboard");
            }, 3000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setOpen(false);
            setProgress(0);
            setErrMessage(true);
        } finally {
            setLoading(false);
            setOpen(false);
            setProgress(0);
        };
    };

    return {
        errMessage,
        handleVehicleExitTime,
        loading,
        message,
        open,
        progress,
        clearMessage
    };
};