import { useState } from "react";
import type { UpdateParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/updateParkingSlotAttributes";
import { updateParkingSlotAPI } from "../APIs/updateParkingSlotAPI";
import { useAppSelector } from "../../../utils/useAppSelector";



type UseUpdateParkingSlotReturns = {
    handleUpdateParkingSlot : (payload: UpdateParkingSlotAttributes, vehicleTypeId: number) => Promise<void>;
    message                 : string;
    errMessage              : boolean;
    loading                 : boolean;
    clearMessage            : () => void;
};


export const useUpdateParkingSlot = (): UseUpdateParkingSlotReturns => {
    const[message, setMessage]       = useState("");
    const[errMessage, setErrMessage] = useState(false);
    const[loading, setLoading]       = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setErrMessage(false);
        setMessage("");
    };

    const handleUpdateParkingSlot = async (payload: UpdateParkingSlotAttributes, vehicleTypeId: number) => {
        setLoading(true);

        try {
            const res = await updateParkingSlotAPI(userToken, vehicleTypeId, payload);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setLoading(false);
                return;
            };
            setMessage(res.data.message);
            setErrMessage(false);
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
        handleUpdateParkingSlot,
        loading,
        message
    };
};