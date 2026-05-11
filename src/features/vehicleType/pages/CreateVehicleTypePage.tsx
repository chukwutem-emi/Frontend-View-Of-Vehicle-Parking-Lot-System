import React, { useEffect, useRef, useState, type ReactNode } from "react";
import type { CreateVehicleTypeFormDataAttributes } from "../../../types/vehicleTypeAttributes/createVehicleTypeAttribute";
import { useCreateVehicleType } from "../hooks/useCreateVehicleType";
import { CreateVehicleTypeForm } from "../components/CreateVehicleTypeForm";




const  CreateVehicleTypePage = (): ReactNode => {
    const[openMessage, setOpenMessage] = useState(false);
    const[isOpen, setIsOpen]           = useState(false);
    const[formData, setFormData]       = useState<CreateVehicleTypeFormDataAttributes>(null);

    const vehicleNameRef = useRef<HTMLInputElement>(null);
    const hourlyRateRef  = useRef<HTMLInputElement>(null);

    const {
        errMessage,
        loading,
        message,
        open,
        clearMessage,
        handleCreateVehicleType : handleCreateVehicleTypePayload,
        progress
    } = useCreateVehicleType();

    useEffect(() => {
        if(message && !errMessage){
            vehicleNameRef.current!.value = "";
            hourlyRateRef.current!.value  = "";
        };
    }, [message, errMessage]);

    useEffect(() => {
        if(message) {
            setOpenMessage(true);
        };
    }, [message]);
    
    const handleVehicleTypeForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            vehicleName : vehicleNameRef.current?.value ?? "",
            hourlyRate  : hourlyRateRef.current?.value ?? ""
        };
        setFormData(payload);
        setIsOpen(true);
    };

    const handleConfirm = () => {
        if(formData) {
            handleCreateVehicleTypePayload(formData);
        };
        setIsOpen(false);
    };
    const handleCancel = () =>  setIsOpen(false);

    const handleOnClick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    const handleDivCancel = () => setIsOpen(false);

  return (
    <div className="overflow-x-hidden overflow-y-auto my-[6rem]">
        <CreateVehicleTypeForm
            errMessage={errMessage}
            handleCancel={handleCancel}
            handleConfirm={handleConfirm}
            handleDivCancel={handleDivCancel}
            handleDivOnClick={handleOnClick}
            handleOnClick={handleOnClick}
            handleVehicleTypeForm={handleVehicleTypeForm}
            hourlyRate={hourlyRateRef}
            isOpen={isOpen}
            loading={loading}
            message={message}
            open={open}
            openMessage={openMessage}
            progress={progress}
            vehicleName={vehicleNameRef}
        />
    </div>
  );
}   
export default CreateVehicleTypePage;