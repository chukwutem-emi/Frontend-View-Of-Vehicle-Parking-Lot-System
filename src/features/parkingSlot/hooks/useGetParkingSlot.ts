import type React from "react";
import type { GetParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/getParkingSlotAttributes";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getParkingSlotAPI } from "../APIs/getParkingSlotAPI";
import { setSlotDetails } from "../slotSlices/createSlotSlice";
import { useAppSelector } from "../../../utils/useAppSelector";




type UseGetParkingSlotReturns = {
    message                  : string;
    errMessage               : boolean;
    progress                 : number;
    open                     : boolean;
    clearMessage             : () => void;
    slot                     : GetParkingSlotAttributes | null;
    openMessage              : boolean;
    setOpenMessage           : React.Dispatch<React.SetStateAction<boolean>>;
    handleGetParkingSlot     : (vehicleTypeId: number) => Promise<void>;
};

export const useGetParkingSlot = (): UseGetParkingSlotReturns => {
    const[message, setMessage]         = useState("");
    const[errMessage, setErrMessage]   = useState(false);
    const[progress, setProgress]       = useState(0);
    const[open, setOpen]               = useState(false);
    const[slot, setSlot]               = useState<GetParkingSlotAttributes | null>(null);
    const[openMessage, setOpenMessage] = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const dispatch = useDispatch();

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };


    const handleGetParkingSlot = async (vehicleTypeId: number) => {
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
            const res = await getParkingSlotAPI(userToken, vehicleTypeId);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setProgress(0)
                setOpen(false);
                return;
            };
            setProgress(100);
            setMessage("Parking slot retrieved successfully!");
            setSlot(res.data.data ?? null);
            dispatch(setSlotDetails(res.data.data ?? null));
            setErrMessage(false);
            clearInterval(interval);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
            setOpen(false);
            setProgress(0);

        } finally {
            setProgress(0);
            setOpen(false);
        };
    };

    return {
        clearMessage,
        errMessage,
        message,
        open,
        openMessage,
        progress,
        setOpenMessage,
        slot, 
        handleGetParkingSlot
    };
};