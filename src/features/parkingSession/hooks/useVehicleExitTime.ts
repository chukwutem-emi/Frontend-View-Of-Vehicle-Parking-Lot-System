import { useState } from "react";
import type { VehicleExitTimeAttributes } from "../../../types/parkingSessionAttributes/vehicleExitTimeAttributes";
import { useSelector } from "react-redux";
import { vehicleExitTimeAPI } from "../APIs/vehicleExitTimeAPI";
import { useNavigate } from "react-router";


type FunctionReturnValues = {
    handleVehicleExitTime : (payload: VehicleExitTimeAttributes) => Promise<void>;
    clearMessage          : () => void;
    message               : string;
    errMessage            : boolean;
    loading               : boolean;
    progress              : number;
    open                  : boolean;
};

export const useVehicleExitTime = (): FunctionReturnValues => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[progress, setProgress]     = useState(0);
    const[open, setOpen]             = useState(false);

    const userToken = useSelector((store: any) => store.token?.getToken);

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
            const {data, status} = await vehicleExitTimeAPI(payload, userToken);
            if (status === 200) {
                setMessage(data?.message);
                setProgress(100);
                clearInterval(interval);
                setErrMessage(false);
                setTimeout(() => {
                    navigate("/app/get-sessions");
                }, 4000);
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "Something went wrong!"]);
                setErrMessage(true);
                setOpen(false);
                setProgress(0);
            };
        } catch (err: any) {
            console.log("ERROR:", err.message);
            setMessage(err.message);
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