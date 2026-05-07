import React, { useEffect, useRef, useState, type ReactNode } from "react";
import { useResetPassword } from "../hooks/useResetPassword";
import { BigBackgroundSpinner } from "../../../components/BigBackgroundSpinner";
import { ResetPassword } from "../components/ResetPassword";

type FormData = {
    email : string;
} | null;

const ResetPasswordPage = (): ReactNode => {
    const[openMessage, setOpenMessage]             = useState(false);
    const[isOpen, setIsOpen]                       = useState(false);
    const[formData, setFormData]                   = useState<FormData>(null);
    const[backgroundLoading, setBackgroundLoading] = useState(true);

    const emailRef = useRef<HTMLInputElement>(null);

    const {
        clearMessage,
        errMessage,
        handleResetPassword : handleResetPasswordPayload,
        loading,
        message,
        open,
        progress
    } = useResetPassword();

    const handleResetPasswordForm = (e: React.SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            email : emailRef.current?.value ?? ""
        };
        setFormData(payload);
        setIsOpen(true);
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);
        return () => clearTimeout(timeOut);
    }, []);

    useEffect(() => {
        if (message && !errMessage) {
            emailRef.current!.value = "";
        };
    }, [message, errMessage]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        }; 
    }, [message]);

    const handleConfirm = () => {
        if (formData) {
            handleResetPasswordPayload(formData);
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
                ) : (
                    <ResetPassword 
                        email={emailRef}
                        errMessage={errMessage}
                        handleCancel={handleCancel}
                        handleConfirm={handleConfirm}
                        handleDivCancel={handleCancel}
                        handleDivClick={handleOnClick}
                        handleOnclick={handleOnClick}
                        handleResetPasswordForm={handleResetPasswordForm}
                        isOpen={isOpen}
                        loading={loading}
                        message={message}
                        open={open}
                        openMessage={openMessage}
                        progress={progress}
                    />
                )
            }
        </div>
    );
};
export default ResetPasswordPage;