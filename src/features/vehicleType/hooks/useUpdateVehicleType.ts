import { useState } from "react";
import type { UpdateVehicleTypePayloadAttributes } from "../../../types/vehicleTypeAttributes/updateVehicleTypeAttribute";
import { updateVehicleTypeAPI } from "../APIs/updateVehicleTypeAPI";
import { useAppSelector } from "../../../utils/useAppSelector";
import { useNavigate } from "react-router";


type UseUpdateVehicleTypeReturns = {
    clearMessage            : () => void;
    errMessage              : boolean;
    loading                 : boolean;
    message                 : string;
    handleUpdateVehicleType : (payload: UpdateVehicleTypePayloadAttributes, vehicleId: number) => Promise<void>;
};

export const useUpdateVehicleType = (): UseUpdateVehicleTypeReturns => {
    const[errMessage, setErrMessage]   = useState(false);
    const[loading, setLoading]         = useState(false);
    const[message, setMessage]         = useState("");

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    
    const navigate = useNavigate();

    const handleUpdateVehicleType = async (payload: UpdateVehicleTypePayloadAttributes, vehicleId: number) => {
        setLoading(true);
        try {
            const res = await updateVehicleTypeAPI(userToken, vehicleId, payload);
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
        } catch (error: unknown) {
            if (error instanceof Error) {
                setMessage(error.message);
            };
            setErrMessage(true);
            setLoading(false);
        } finally {
            setLoading(false);
        }

    };
    return {
        clearMessage,
        errMessage,
        loading,
        message,
        handleUpdateVehicleType
    };
};
