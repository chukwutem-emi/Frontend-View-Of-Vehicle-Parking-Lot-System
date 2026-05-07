import { useEffect, useRef, useState, type ReactNode } from "react";
import type { GetParkingSlotAttributes } from "../../types/ParkingSlotAttributes/getParkingSlotAttributes";
import type { GetAllParkingSlotAttributes } from "../../types/ParkingSlotAttributes/getAllParkingSlotAttributes";
import { useAppSelector } from "../../utils/useAppSelector";
import { getDashboardParkingSlotAPI } from "../../features/parkingSlot/APIs/dashboardParkingSlotAPI";
import { BigBackgroundSpinner } from "../../components/BigBackgroundSpinner";
import { ParkingSlot } from "./ParkingSlot";



const ParkingSlotDashboard = (): ReactNode => {
    const[backgroundLoading, setBackgroundLoading]   = useState(true);
    const[isSideBarOpen, setIsSideBarOpen]         = useState(false);
    const[selectedSlot, setSelectedSlot]           = useState<GetParkingSlotAttributes | null>(null);
    const[message, setMessage]                     = useState("");
    const[errMessage, setErrMessage]               = useState(false);
    const[isDivOpen, setIsDivOpen]                 = useState(false);
    const[open, setOpen]                           = useState(false);
    const[slots, setSlots]                         = useState<GetAllParkingSlotAttributes>([]);
    const[filteredSlots, setFilteredSlots]         = useState<GetAllParkingSlotAttributes>([]);

    const userToken = useAppSelector((state) => state.auth.token);
    
    const divRef = useRef<HTMLDivElement>(null);

    const getAllSlots = async (): Promise<void> => {
        try {
            const response = await getDashboardParkingSlotAPI(userToken);
            if (!response.data.success) {
                setMessage(response.data.message);
                setErrMessage(true);
                return;
            };
            setMessage(response.data.message ?? "");
            setErrMessage(false);
            setSlots(response.data.data ?? []);
            setFilteredSlots(response.data.data ?? []);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
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
            getAllSlots();
        }
        window.addEventListener("mousedown", handleClickOutside);
        const interval = setInterval(() => {
            getAllSlots();
        }, 1800000);
        const timer = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);

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
      ) : (
        <ParkingSlot divRef={divRef} errMessage={errMessage} handleDivClick={handleDivClick} handleOnclick={handleOnClick} isDivOpen={isDivOpen} isSideBarOpen={isSideBarOpen} message={message} open={open} selectedSlot={selectedSlot} setIsDivOpen={setIsDivOpen} setIsSideBarOpen={setIsSideBarOpen} setSelectedSlot={setSelectedSlot} slots={slots} setFilteredSlots={setFilteredSlots} filteredSlots={filteredSlots} />
      )
    }
    </>
  )
};
export default ParkingSlotDashboard
