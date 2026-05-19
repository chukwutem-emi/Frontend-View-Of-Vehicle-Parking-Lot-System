import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { useVehicleExitTime } from "../hooks/useVehicleExitTime";
import { VehicleExitTime } from "../components/VehicleExitTime";



type FormData = {
    vehicleName   : string;
    vehicleNumber : string;
} | null;

const VehicleExitTimePage = (): ReactNode => {
    const vehicleNumberRef = useRef<HTMLInputElement>(null);
    const vehicleNameRef   = useRef<HTMLInputElement>(null);

    const[openMessage, setOpenMessage] = useState(false);
    const[isOpen, setIsOpen]           = useState(false);
    const[formData, setFormData]       = useState<FormData>(null);

    const {
        clearMessage,
        errMessage,
        handleVehicleExitTime : handleVehicleExitTimePayload,
        loading,
        message,
    } = useVehicleExitTime();
    
    useEffect(() => {
        if (message && !errMessage) {
            vehicleNumberRef.current!.value = "";
            vehicleNameRef.current!.value   = "";
        };

        if (message) {
            setOpenMessage(true);
        };
    }, [message, errMessage]);

    const handleVehicleExitTimeForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            vehicleNumber : vehicleNumberRef.current?.value ?? "",
            vehicleName   : vehicleNameRef.current?.value ?? ""
        };
        setFormData(payload);
        setIsOpen(true);
    };


    const handleConfirm = () => {
        if (formData) {
            handleVehicleExitTimePayload(formData);
        };
        setIsOpen(false);
    };

    const handleCancel = () => setIsOpen(false);

    const handleOnclick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    return (
        <div className="overflow-x-hidden overflow-y-auto w-full my-[6rem]">
            <VehicleExitTime
                errMessage={errMessage}
                handleCancel={handleCancel} 
                handleConfirm={handleConfirm}
                handleDivCancel={handleCancel}
                handleDivOnclick={handleOnclick}
                handleOnclick={handleOnclick}
                handleSubmitForm={handleVehicleExitTimeForm}
                isOpen={isOpen}
                loading={loading}
                message={message}
                openMessage={openMessage}
                vehicleName={vehicleNameRef}
                vehicleNumber={vehicleNumberRef}
            />
        </div>
    );
};
export default VehicleExitTimePage;