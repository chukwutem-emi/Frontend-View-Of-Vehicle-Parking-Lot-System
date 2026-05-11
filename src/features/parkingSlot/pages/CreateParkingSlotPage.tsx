import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { useCreateParkingSlot } from "../hooks/useCreateParkingSlot";
import { CreateParkingSlotForm } from "../components/CreateParkingSlotForm";



type FormData = {
    vehicleTypeId : number;
    slotCode      : string;
} | null;

const CreateParkingSlotPage = (): ReactNode => {
    const[openMessage, setOpenMessage] = useState(false);
    const[isOpen, setIsOpen]           = useState(false);
    const[formData, setFormData]       = useState<FormData>(null);

    const vehicleTypeIdRef = useRef<HTMLInputElement>(null);
    const slotCodeRef      = useRef<HTMLInputElement>(null);

    const {
        clearMessage,
        errMessage,
        handleCreateParkingSlot : handleCreateParkingSlotPayload,
        loading,
        message,
        open,
        progress
    } = useCreateParkingSlot();
    
    useEffect(() => {
        if (message && !errMessage) {
            vehicleTypeIdRef.current!.value = "";
            slotCodeRef.current!.value      = "";
        }
    }, [message, errMessage]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const handleParkingSlotForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const parsedVehicleTypeId = vehicleTypeIdRef.current?.value;

        const convertedVehicleTypeId = Number(parsedVehicleTypeId);

        const payload = {
            vehicleTypeId : convertedVehicleTypeId,
            slotCode      : slotCodeRef.current?.value ?? ""
        };
        setFormData(payload);
        setIsOpen(true);
    };


    const handleConfirm = () => {
        if (formData) {
            handleCreateParkingSlotPayload(formData);
        };
        setIsOpen(false);
    };
    const handleCancel = () => setIsOpen(false);

    const handleOnclick = () => {
        setOpenMessage(false);
        clearMessage();
    };

  return (
    <div className="overflow-x-hidden overflow-y-auto my-[6rem]">
      <CreateParkingSlotForm 
        errMessage={errMessage}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        handleDivCancel={handleCancel}
        handleDivOnClick={handleOnclick}
        handleOnClick={handleOnclick}
        handleParkingSlotForm={handleParkingSlotForm}
        isOpen={isOpen}
        loading={loading}
        message={message}
        open={open}
        openMessage={openMessage}
        progress={progress}
        slotCode={slotCodeRef}
        vehicleTypeId={vehicleTypeIdRef}
      />
    </div>
  )
};
export default CreateParkingSlotPage;