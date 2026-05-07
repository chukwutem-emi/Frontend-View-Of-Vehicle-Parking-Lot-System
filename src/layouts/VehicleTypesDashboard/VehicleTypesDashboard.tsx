import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { BigBackgroundSpinner } from "../../components/BigBackgroundSpinner";
import { useFetchVehicleType } from "../../features/vehicleType/hooks/useFetchVehicleType";
import { VehicleType } from "./VehicleType";



const VehicleTypesDashboard = (): ReactNode => {
    const[bacKgroundLoading, setBackgroundLoading] = useState(true);
    const[value, setValue]                         = useState("");
    const[openMessage, setOpenMessage]             = useState(false);
    const[isSideBarOpen, setIsSideBarOpen]         = useState(false);

    const divRef = useRef<HTMLDivElement>(null);

    const handleClickOutSide = (e: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(e.target as Node)) {
            setIsDivOpen(false);
        };
    };

    const {
        clearMessage,
        errMessage,
        handleFetchVehicleType : handleFetchVehicleTypeWithVehicleName,
        isDivOpen,
        loading,
        message,
        open,
        progress,
        setIsDivOpen,
        vehicleType
    } = useFetchVehicleType();


    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutSide);

        const timer = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);
        return () => {
            clearTimeout(timer);
            window.removeEventListener("mousedown", handleClickOutSide);
        };
    }, []);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        }
    }, [message]);

    const handleVehicleTypeSearchForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleFetchVehicleTypeWithVehicleName(value);
    };

    const handleOnClick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    return (
        <>
        {
            bacKgroundLoading ? (
                <BigBackgroundSpinner />
            ): (
                <VehicleType
                    errMessage={errMessage}
                    handleDivOnClick={handleOnClick}
                    handleOnClick={handleOnClick}
                    handleVehicleTypeSearchForm={handleVehicleTypeSearchForm}
                    isDivOpen={isDivOpen}
                    loading={loading}
                    message={message}
                    open={open}
                    openMessage={openMessage}
                    progress={progress}
                    setValue={setValue}
                    value={value}
                    vehicle={vehicleType}
                    isSideBarOpen={isSideBarOpen}
                    setIsSideBarOpen={setIsSideBarOpen}
                    divRef={divRef}
                />
            )
        }
        </>
    );
};
export default VehicleTypesDashboard;