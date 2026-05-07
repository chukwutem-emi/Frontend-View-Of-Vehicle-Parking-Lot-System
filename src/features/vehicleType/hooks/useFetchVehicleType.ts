import React, { useState } from "react";
import { fetchVehicleTypeAPI } from "../APIs/fetchVehicleTypeAPI";
import type { FetchVehicleTypeAttributes } from "../../../types/vehicleTypeAttributes/fetchVehicleTypeAttribute";
import { useAppSelector } from "../../../utils/useAppSelector";



type UseFetchVehicleTypeReturns = {
    handleFetchVehicleType  : (vehicleName: string) => Promise<void>;
    clearMessage            : () => void;
    errMessage              : boolean;
    message                 : string;
    loading                 : boolean;
    progress                : number;
    open                    : boolean;
    vehicleType             : FetchVehicleTypeAttributes | null;
    isDivOpen               : boolean;
    setIsDivOpen            : React.Dispatch<React.SetStateAction<boolean>>;
};

export const useFetchVehicleType = (): UseFetchVehicleTypeReturns => {
    const[errMessage, setErrMessage]   = useState(false);
    const[progress, setProgress]       = useState(0);
    const[loading, setLoading]         = useState(false);
    const[message, setMessage]         = useState("");
    const[open, setOpen]               = useState(false);
    const[vehicleType, setVehicleType] = useState<FetchVehicleTypeAttributes | null>(null);
    const[isDivOpen, setIsDivOpen]     = useState(false);

    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleFetchVehicleType = async (vehicleName: string) => {
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
            const res = await fetchVehicleTypeAPI(userToken, vehicleName);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                setLoading(false);
                setOpen(false);
                setProgress(0);
                return;
            };
            setProgress(100);
            setVehicleType(res.data.data ?? null);
            setErrMessage(false);
            setIsDivOpen(true);
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
            setProgress(0);
            setOpen(false);
        }
    };
    return {
        clearMessage,
        errMessage,
        handleFetchVehicleType,
        loading,
        message,
        open,
        progress,
        vehicleType,
        isDivOpen,
        setIsDivOpen
    };
};