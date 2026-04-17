import { useEffect, useRef, useState, type JSX } from "react";
import type { GetParkingSessionAttributes } from "../../types/parkingSessionAttributes/getParkingSessionAttributes";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import { apiClient } from "../../services/apiClient";
import { useSelector } from "react-redux";
import { BigBackgroundSpinner } from "../../components/BigBackgroundSpinner";
import { ParkingSession } from "./ParkingSession";



const ParkingSessionDashboard = (): JSX.Element => {
    const[backgroundLoading, setBackgroundLoading] = useState(true);
    const[isSideBarOpen, setIsSideBarOpen]         = useState(false);
    const[selectedSession, setSelectedSession]     = useState<GetParkingSessionAttributes | null>(null);
    const[message, setMessage]                     = useState("");
    const[errMessage, setErrMessage]               = useState(false);
    const[isDivOpen, setIsDivOpen]                 = useState(false);
    const[open, setOpen]                           = useState(false);
    const[sessions, setSessions]                   = useState<GetAllParkingSessionsAttributes>([]);


    const userToken = useSelector((store: any) => store.token?.getToken);

    const divRef = useRef<HTMLDivElement>(null);

    const getAllSessions = async (): Promise<void> => {
        try {
            const response = await apiClient("/session/get-sessions", {
                method: "GET",
                headers: {
                    "Authorization" : `Bearer ${userToken}`
                }
            });
            if (response?.status === 200) {
                setMessage(response?.data?.message ?? "");
                setErrMessage(false);
                setSessions(response?.data?.data ?? []);
            } else {
                const [key] = Object.keys(response?.data);
                setMessage(response?.data[key ?? "Something went wrong!"]);
                setErrMessage(true);
            };
        } catch (err: any) {
            setMessage(err.message);
            setErrMessage(true);
        };
    };
    const handleClickOutside = (e: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(e.target as Node)) {
            setIsDivOpen(false);
        };
    };

    useEffect(() => {
        if (userToken) {
            getAllSessions();
        }
        window.addEventListener("mousedown", handleClickOutside);
        const interval = setInterval(() => {
            getAllSessions();
        }, 1800000);
        const timer = setTimeout(() => {
            setBackgroundLoading(false);
        }, 3000);

        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
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
                <ParkingSession divRef={divRef} errMessage={errMessage} handleDivClick={handleDivClick} handleOnclick={handleOnClick} isDivOpen={isDivOpen} isSideBarOpen={isSideBarOpen} message={message} open={open} selectedSession={selectedSession} sessions={sessions} setIsDivOpen={setIsDivOpen} setIsSideBarOpen={setIsSideBarOpen} setSelectedSession={setSelectedSession}/>
            )
        }
        </>
    );
};
export default ParkingSessionDashboard;