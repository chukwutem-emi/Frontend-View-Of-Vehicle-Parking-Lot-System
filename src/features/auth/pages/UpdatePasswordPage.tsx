import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { useUpdatePassword } from "../hooks/useUpdatedPassword";
import { BigBackgroundSpinner } from "../../../components/BigBackgroundSpinner";
import { UpdatePassword } from "../components/UpdatePassword";
import { useParams } from "react-router-dom";


type FormData = {
    confirmPassword : string;
    password        : string;
} | null;

const UpdatePasswordPage = (): ReactNode => {
    const {resetToken} = useParams();

    const[backgroundLoading, setBackgroundLoading] = useState(true);
    const[openMessage, setOpenMessage]             = useState(false);
    const[isOpen, setIsOpen]                       = useState(false);
    const[formData, setFormData]                   = useState<FormData>(null);

    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const passwordRef        = useRef<HTMLInputElement>(null);

    const {
        clearMessage,
        errMessage,
        handleUpdatePassword : handleUpdatePasswordPayload,
        loading,
        message
    } = useUpdatePassword();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);
        return () => clearTimeout(timeOut);
    }, []);
    
    useEffect(() => {
        if (message && !errMessage) {
            confirmPasswordRef.current!.value = "";
            passwordRef.current!.value        = "";
        };
    }, [message, errMessage]);
    
    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);
    
    const handleUpdatePasswordForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            confirmPassword : confirmPasswordRef.current?.value ?? "",
            password        : passwordRef.current?.value ?? ""  
        };
        setFormData(payload);
        setIsOpen(true);
    };

    const handleConfirm = () => {
        if (formData && resetToken) {
            handleUpdatePasswordPayload(formData, resetToken);
        };
        setIsOpen(false);
    };

    const handleCancel = () => setIsOpen(false);

    const handleOnClick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    return (
        <div className="overflow-x-hidden overflow-y-auto mt-[6rem]">
            {
                backgroundLoading ? (
                    <BigBackgroundSpinner />
                ): (
                    <UpdatePassword 
                        confirmPassword={confirmPasswordRef}
                        errMessage={errMessage}
                        handleCancel={handleCancel}
                        handleConfirm={handleConfirm}
                        handleDivCancel={handleCancel}
                        handleDivClick={handleOnClick}
                        handleOnclick={handleOnClick}
                        handleUpdatePasswordForm={handleUpdatePasswordForm}
                        isOpen={isOpen}
                        loading={loading}
                        message={message}
                        openMessage={openMessage}
                        password={passwordRef}
                    />
                )
            }
        </div>
    );
};
export default UpdatePasswordPage;