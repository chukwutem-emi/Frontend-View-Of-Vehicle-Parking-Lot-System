import { useEffect, useState, type ReactNode } from "react";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import { apiClient } from "../../services/apiClient";
import { BigBackgroundSpinner } from "../../components/BigBackgroundSpinner";
import { ParkingSession } from "./ParkingSession";
import { useAppSelector } from "../../utils/useAppSelector";
import type { APIResponse } from "../../features/parkingSession/APIs/getAllParkingSessionAPI";



const ParkingSessionDashboard = (): ReactNode => {
    const[backgroundLoading, setBackgroundLoading]   = useState(true);
    const[isSideBarOpen, setIsSideBarOpen]           = useState(false);
    const[message, setMessage]                       = useState("");
    const[errMessage, setErrMessage]                 = useState(false);
    const[open, setOpen]                             = useState(false);
    const[sessions, setSessions]                     = useState<GetAllParkingSessionsAttributes>([]);
    const[filteredSessions, setFilteredSessions]     = useState<GetAllParkingSessionsAttributes>([]);


    const userToken = useAppSelector((state) => state.auth.token);


    const getAllSessions = async (): Promise<void> => {
        try {
            const response = await apiClient<APIResponse>("/session/get-sessions", {
                method: "GET",
                headers: {
                    "Authorization" : `Bearer ${userToken}`
                }
            });
            if (!response.data.success) {
                setMessage(response.data.message);
                setErrMessage(true);
                return;
            };
            setMessage(response.data.message ?? "");
            setErrMessage(false);
            setSessions(response.data.data ?? []);
            setFilteredSessions(response.data.data ?? []);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
        };
    };

    useEffect(() => {
        if (userToken) {
            getAllSessions();
        }
        const interval = setInterval(() => {
            getAllSessions();
        }, 1800000);
        const timer = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [userToken]);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    useEffect(() => {
        if (message) {
            setOpen(true);
        };
    }, [message]);
    
    const handleDivClick = () => {
        setOpen(false);
        clearMessage();
    };
    const handleOnClick  = () => {
        setOpen(false);
        clearMessage();
    };
    return (
        <>
        {
            backgroundLoading ? (
                <BigBackgroundSpinner /> 
            ): (
                <ParkingSession errMessage={errMessage} handleDivClick={handleDivClick} handleOnclick={handleOnClick} isSideBarOpen={isSideBarOpen} message={message} open={open} sessions={sessions} setIsSideBarOpen={setIsSideBarOpen} setFilteredSessions={setFilteredSessions} filteredSessions={filteredSessions} />
            )
        }
        </>
    );
};
export default ParkingSessionDashboard;