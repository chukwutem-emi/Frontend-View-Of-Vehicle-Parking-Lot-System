import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { useUpdateVehicleType } from "../hooks/useUpdateVehicleType";
import { useParams } from "react-router";
import  { UpdateVehicleTypeForm } from "../components/UpdateVehicleTypeForm";



type FormData = {
    newVehicleName   : string;
    newHourlyRate    : string;
} | null;

const UpdateVehicleTypePage = (): ReactNode => {
    const { vehicleId } = useParams();
    const id = Number(vehicleId);
    const validId = vehicleId && !isNaN(id);

    const[isOpen, setIsOpen]           = useState(false);
    const[openMessage, setOpenMessage] = useState(false);
    const[formData, setFormData]       = useState<FormData>(null);

    const newVehicleNameRef = useRef<HTMLInputElement>(null);
    const newHourlyRateRef  = useRef<HTMLInputElement>(null);

    const {
        clearMessage,
        errMessage,
        handleUpdateVehicleType : handleUpdateVehicleTypePayload,
        loading,
        message,
        open,
        progress
    } = useUpdateVehicleType();

    const handleSubmitForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            newVehicleName : newVehicleNameRef.current?.value ?? "",
            newHourlyRate  : newHourlyRateRef.current?.value ?? "",
        };
        setFormData(payload);
        setIsOpen(true);
    };

    useEffect(() => {
        if (message && !errMessage) {
            newVehicleNameRef.current!.value = "";
            newHourlyRateRef.current!.value  = "";
        }
    }, [message, errMessage]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        }
    }, [message]);

    const handleConfirm = () => {
        if (formData && validId) {
            handleUpdateVehicleTypePayload(formData, id);
        }
    };

    const handleCancel = () => setIsOpen(false);

    const handleOnclick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    return (
        <div className="overflow-x-hidden overflow-y-auto my-[6rem]">
            <UpdateVehicleTypeForm 
                errMessage={errMessage}
                handleCancel={handleCancel} 
                handleConfirm={handleConfirm}
                handleDivCancel={handleCancel}
                handleDivOnclick={handleOnclick}
                handleOnclick={handleOnclick}
                handleSubmitForm={handleSubmitForm}
                isOpen={isOpen}
                loading={loading}
                message={message}
                open={open}
                openMessage={openMessage}
                newHourlyRate={newHourlyRateRef}
                newVehicleName={newVehicleNameRef}
                progress={progress}
            />
        </div>
    );
};
export default UpdateVehicleTypePage;