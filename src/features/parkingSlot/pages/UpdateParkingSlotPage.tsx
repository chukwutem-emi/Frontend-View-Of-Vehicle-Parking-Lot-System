import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { UpdateParkingSlot } from "../components/UpdateParkingSlot";
import { useParams } from "react-router-dom";
import { useUpdateParkingSlot } from "../hooks/useUpdateParkingSlot";

type FormData = {
    availableCapacity : number;
    maximumCapacity   : number;
    slotCode          : string;
} | null;

const UpdateParkingSlotPage = (): ReactNode => {
    const {vehicleTypeId} = useParams();

    const vehicleId = Number(vehicleTypeId);
    const validId   = vehicleTypeId && !isNaN(vehicleId);

    const[openMessage, setOpenMessage] = useState(false);
    const[formData, setFormData]       = useState<FormData>(null);
    const[isOpen, setIsOpen]           = useState(false);

    const availableCapacityRef = useRef<HTMLInputElement>(null);
    const maximumCapacityRef   = useRef<HTMLInputElement>(null);
    const slotCodeRef          = useRef<HTMLInputElement>(null);

    const {
        clearMessage,
        errMessage,
        handleUpdateParkingSlot : handleUpdateParkingSlotPayload,
        loading,
        message,
        open,
        progress
    } = useUpdateParkingSlot();

    useEffect(() => {
        if (message && !errMessage) {
            availableCapacityRef.current!.value = "";
            maximumCapacityRef.current!.value   = "";
            slotCodeRef.current!.value          = "";
        };
    }, [message, errMessage]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);
    
    const handleSubmitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const parsedAvailableCapacity = availableCapacityRef.current?.value;
        const parsedMaximumCapacity   = maximumCapacityRef.current?.value;

        const convertedAvailableCapacity = Number(parsedAvailableCapacity);
        const convertedMaximumCapacity   = Number(parsedMaximumCapacity);

        const payload = {
            availableCapacity : convertedAvailableCapacity,
            maximumCapacity   : convertedMaximumCapacity,
            slotCode          : slotCodeRef.current?.value ?? ""
        };
        setFormData(payload);
        setIsOpen(true);
    };


    const handleConfirm = () => {
        if (formData && validId) {
            handleUpdateParkingSlotPayload(formData, vehicleId);
        };
        setIsOpen(false);
    };

    const handleCancel = () => setIsOpen(false);

    const handleOnClick = () => {
        clearMessage();
        setOpenMessage(false);
    };

  return (
    <div className="overflow-x-hidden overflow-y-auto my-[6rem]">
      <UpdateParkingSlot
        availableCapacity={availableCapacityRef}
        errMessage={errMessage}
        handleCancel={handleCancel}
        handleConfirm={handleConfirm}
        handleDivCancel={handleCancel}
        handleDivClick={handleOnClick}
        handleOnclick={handleOnClick}
        handleSubmitForm={handleSubmitForm}
        isOpen={isOpen}
        loading={loading}
        maximumCapacity={maximumCapacityRef}
        message={message}
        open={open}
        openMessage={openMessage}
        progress={progress}
        slotCode={slotCodeRef}
      />
    </div>
  )
};
export default UpdateParkingSlotPage;