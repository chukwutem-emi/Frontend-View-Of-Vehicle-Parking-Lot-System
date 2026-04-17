import React, { useEffect, useRef, useState, type JSX } from "react";
import { useParams } from "react-router";
import { useUpdateUserDetails } from "../hooks/useUpdateUserDetails";
import { UpdateUserDetailsForm } from "../components/UpdateUserDetailsForm";


type FormData = {
    confirmPassword : string;
    password        : string;
    username        : string;
    email           : string;
    phone           : string;
    userAddress     : string;
} | null;

const UpdateUserDetailsPage = (): JSX.Element => {

    const {userId} = useParams();

    const usernameRef        = useRef<HTMLInputElement>(null);
    const passwordRef        = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const emailRef           = useRef<HTMLInputElement>(null);
    const userAddressRef     = useRef<HTMLInputElement>(null);
    const phoneRef           = useRef<HTMLInputElement>(null);

     const[formData, setFormData]       = useState<FormData>(null);
     const[isOpen, setIsOpen]           = useState(false);
     const[openMessage, setOpenMessage] = useState(false);

    const {
        errMessage,
        handleUpdateUserDetails : handleUpdateUserDetailsPayload,
        loading,
        message,
        open,
        progress,
        clearMessage
    } = useUpdateUserDetails();

    const handleUpdateUserDetailsForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            confirmPassword : confirmPasswordRef.current!.value,
            userAddress     : userAddressRef.current!.value,
            password        : passwordRef.current!.value,
            username        : usernameRef.current!.value,
            email           : emailRef.current!.value,
            phone           : phoneRef.current!.value
        };
        setFormData(payload);
        setIsOpen(true);
    };
    useEffect(() => {
        if (message && !errMessage) {
            confirmPasswordRef.current!.value = "";
            userAddressRef.current!.value     = "";
            passwordRef.current!.value        = "";
            usernameRef.current!.value        = "";
            emailRef.current!.value           = "";
            phoneRef.current!.value           = "";  
        };
        if (message) {
            setOpenMessage(true);
        };
    }, [message, errMessage]);

    const handleConfirm = () => {
        if (formData) {
            handleUpdateUserDetailsPayload(formData, userId);
        };
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleOnclick = () => {
        setOpenMessage(false);
        clearMessage();
    };
    
    return (
        <div className="overflow-x-hidden overflow-y-auto w-full">
            <UpdateUserDetailsForm 
                errMessage={errMessage}
                handleCancel={handleCancel}
                handleConfirm={handleConfirm}
                handleDivCancel={handleCancel}
                handleDivClick={handleOnclick}
                handleOnclick={handleOnclick}
                handleSubmitForm={handleUpdateUserDetailsForm}
                isOpen={open}
                loading={loading}
                message={message}
                open={isOpen}
                openMessage={openMessage}
                progress={progress}
                confirmPassword={confirmPasswordRef}
                email={emailRef}
                password={passwordRef}
                phone={phoneRef}
                userAddress={userAddressRef}
                username={usernameRef}
            />
        </div>
    );
}; 
export default UpdateUserDetailsPage;