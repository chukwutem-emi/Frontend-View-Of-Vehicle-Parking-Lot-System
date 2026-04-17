import {useCreateParkingSession} from "../hooks/useCreateParkingSession";
import {CreateParkingSession} from "../components/CreateParkingSession";
import React, { useEffect, useRef, useState, type JSX } from "react";


type FormData = {
    vehicleOwnerNextOfKinAddress : string;
    vehicleOwnerNextOfKinPhone   : string;
    vehicleOwnerNextOfKin        : string;
    vehicleOwnerAddress          : string;
    vehicleOwnerPhone            : string;
    vehicleNumber                : string;
    slotId                       : number;
    vehicleTypeId                : number; 
} | null;

const CreateParkingSessionPage = (): JSX.Element => {
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

    const handleCreateParkingSessionForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            vehicleOwnerNextOfKinAddress : vehicleOwnerNextOfKinAddressRef.current!.value,
            vehicleOwnerNextOfKinPhone   : vehicleOwnerNextOfKinPhoneRef.current!.value,
            vehicleOwnerNextOfKin        : vehicleOwnerNextOfKinRef.current!.value,
            vehicleOwnerAddress          : vehicleOwnerAddressRef.current!.value,
            vehicleOwnerPhone            : vehicleOwnerPhoneRef.current!.value,
            vehicleNumber                : vehicleNumberRef.current!.value,
            slotId                       : +slotIdRef.current!.value,
            vehicleTypeId                : +vehicleTypeIdRef.current!.value
        };
        setFormData(payload);
        setIsOpen(true);
    };

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
        <div className="overflow-x-hidden overflow-y-auto">
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
            />
        </div>
    );
};
export default CreateParkingSessionPage;