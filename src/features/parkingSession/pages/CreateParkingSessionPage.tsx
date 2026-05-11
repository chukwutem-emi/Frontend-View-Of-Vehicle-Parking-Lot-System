import {useCreateParkingSession} from "../hooks/useCreateParkingSession";
import {CreateParkingSession} from "../components/CreateParkingSession";
import React, { useEffect, useRef, useState, type ReactNode } from "react";


type FormData = {
    vehicleOwnerNextOfKinAddress : string;
    vehicleOwnerNextOfKinPhone   : string;
    vehicleOwnerNextOfKin        : string;
    vehicleOwnerAddress          : string;
    vehicleOwnerPhone            : string;
    vehicleNumber                : string;
    slotId                       : number;
    vehicleId                    : number; 
} | null;

const CreateParkingSessionPage = (): ReactNode => {
    const vehicleOwnerNextOfKinAddressRef  = useRef<HTMLInputElement>(null);
    const vehicleOwnerNextOfKinPhoneRef    = useRef<HTMLInputElement>(null);
    const vehicleOwnerNextOfKinRef         = useRef<HTMLInputElement>(null);
    const vehicleOwnerAddressRef           = useRef<HTMLInputElement>(null);
    const vehicleOwnerPhoneRef             = useRef<HTMLInputElement>(null);
    const vehicleNumberRef                 = useRef<HTMLInputElement>(null);
    const slotIdRef                        = useRef<HTMLInputElement>(null);
    const vehicleTypeIdRef                 = useRef<HTMLInputElement>(null); 

    const[openMessage, setOpenMessage] = useState(false);
    const[formData, setFormData]       = useState<FormData>(null);
    const[isOpen, setIsOpen]           = useState(false);

    const {
        clearMessage,
        errMessage,
        handleCreateParkingSession : handleCreateParkingSessionPayload,
        loading,
        message,
        open,
        progress
    } = useCreateParkingSession();
    
    useEffect(() => {
        if (message && !errMessage) {
            vehicleOwnerNextOfKinAddressRef.current!.value = "";
            vehicleOwnerNextOfKinPhoneRef.current!.value   = "";
            vehicleOwnerNextOfKinRef.current!.value        = ""
            vehicleOwnerAddressRef.current!.value          = "";
            vehicleOwnerPhoneRef.current!.value            = "";
            vehicleNumberRef.current!.value                = "";
            slotIdRef.current!.value                       = "";
            vehicleTypeIdRef.current!.value                = "";
        };
        if (message) {
            setOpenMessage(true);
        };
    }, [message, errMessage]);
    
    const handleCreateParkingSessionForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const rawSlotId = slotIdRef.current?.value;
        const rawVehicleId = vehicleTypeIdRef.current?.value;

        const parsedSlotId = Number(rawSlotId);
        const parsedVehicleId = Number(rawVehicleId);

        const payload = {
            vehicleOwnerNextOfKinAddress : vehicleOwnerNextOfKinAddressRef.current?.value ?? "",
            vehicleOwnerNextOfKinPhone   : vehicleOwnerNextOfKinPhoneRef.current?.value ?? "",
            vehicleOwnerNextOfKin        : vehicleOwnerNextOfKinRef.current?.value ?? "",
            vehicleOwnerAddress          : vehicleOwnerAddressRef.current?.value ?? "",
            vehicleOwnerPhone            : vehicleOwnerPhoneRef.current?.value ?? "",
            vehicleNumber                : vehicleNumberRef.current?.value ?? "",
            slotId                       : parsedSlotId,
            vehicleId                    : parsedVehicleId
        };
        setFormData(payload);
        setIsOpen(true);
    };


    const handleConfirm = () => {
        if (formData) {
            handleCreateParkingSessionPayload(formData)
        };
        setIsOpen(false)
    };
    
    const handleCancel = () => setIsOpen(false);

    const handleOnClick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    return (
        <div className="overflow-x-hidden overflow-y-auto my-[6rem]">
            <CreateParkingSession 
                errMessage={errMessage}
                handleCancel={handleCancel}
                handleConfirm={handleConfirm}
                handleDivCancel={handleCancel}
                handleDivOnClick={handleOnClick}
                handleOnClick={handleOnClick}
                handleParkingSessionForm={handleCreateParkingSessionForm}
                isOpen={isOpen}
                loading={loading}
                message={message}
                open={open}
                progress={progress}
                openMessage={openMessage}
                slotId={slotIdRef}
                vehicleId={vehicleTypeIdRef}
                vehicleNumber={vehicleNumberRef}
                vehicleOwnerAddress={vehicleOwnerAddressRef}
                vehicleOwnerNextOfKin={vehicleOwnerNextOfKinRef}
                vehicleOwnerNextOfKinAddress={vehicleOwnerNextOfKinAddressRef}
                vehicleOwnerNextOfKinPhone={vehicleOwnerNextOfKinPhoneRef}
                vehicleOwnerPhone={vehicleOwnerPhoneRef}
            />
        </div>
    );
};
export default CreateParkingSessionPage;