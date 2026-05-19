import { useState } from "react";
import type { CreateVehicleTypePayloadAttributes } from "../../../types/vehicleTypeAttributes/createVehicleTypeAttribute";
import { createVehicleTypeAPI } from "../APIs/createVehicleTypeAPI";
import { useAppSelector } from "../../../utils/useAppSelector";
import { useNavigate } from "react-router-dom";


type UseCreateVehicleTypeReturns = {
    handleCreateVehicleType : (payload: CreateVehicleTypePayloadAttributes) => Promise<void>;
    clearMessage            : () => void;
    errMessage              : boolean;
    message                 : string;
    loading                 : boolean;
};

export const useCreateVehicleType = (): UseCreateVehicleTypeReturns => {
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);
    const[message, setMessage]       = useState("");

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const navigate = useNavigate();

    const handleCreateVehicleType = async (payload: CreateVehicleTypePayloadAttributes) => {
        setLoading(true);

        try {
            const res = await createVehicleTypeAPI(userToken, payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setLoading(false);
                return;
            };
            setMessage(res.data.message);
            setErrMessage(false);
            setTimeout(() => {
                navigate("/app/vehicle-type-dashboard");
            }, 4000);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setLoading(false);
        } finally {
            setLoading(false);
        }

    }
    return {
        clearMessage,
        errMessage,
        handleCreateVehicleType,
        loading,
        message
    };
};