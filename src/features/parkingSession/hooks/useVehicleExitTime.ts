import { useState } from "react";
import type { VehicleExitTimeAttributes } from "../../../types/parkingSessionAttributes/vehicleExitTimeAttributes";
import { vehicleExitTimeAPI } from "../APIs/vehicleExitTimeAPI";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../utils/useAppSelector";


type UseVehicleExitTimeReturns = {
    handleVehicleExitTime : (payload: VehicleExitTimeAttributes) => Promise<void>;
    clearMessage          : () => void;
    message               : string;
    errMessage            : boolean;
    loading               : boolean;
};

export const useVehicleExitTime = (): UseVehicleExitTimeReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const navigate = useNavigate();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleVehicleExitTime = async (payload: VehicleExitTimeAttributes): Promise<void> => {
        setLoading(true);

        try {
            const res = await vehicleExitTimeAPI(payload, userToken);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                return;
            };
            setMessage(res.data.message);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/app/parking-session-dashboard");
            }, 3000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
        } finally {
            setLoading(false);
        };
    };

    return {
        errMessage,
        handleVehicleExitTime,
        loading,
        message,
        clearMessage
    };
};