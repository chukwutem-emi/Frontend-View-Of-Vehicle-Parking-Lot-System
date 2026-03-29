import { useEffect, useRef, useState, type SyntheticEvent } from "react";
import {useLogin} from "../../auth/hooks/useLogin";
import { LoginForm } from "../components/LoginForm";


type FormData = {
    email    : string;
    password : string;
};  

export const LoginPage = () => {
    const emailRef    = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null); 

    const[open, setOpen]               = useState(false);
    const[openMessage, setOpenMessage] = useState(false);
    const[formData, setFormData]       = useState<FormData | null>(null);

    const {
        errMessage, 
        handleLoginUser: handleLoginUserPayload, 
        message, 
        loading, 
        clearMessage
    } = useLogin();

    useEffect(() => {
        if (message && !errMessage) {
            emailRef.current!.value    = "";
            passwordRef.current!.value = "";
        };
        if (message) {
            setOpenMessage(true);
        };
    }, [message, errMessage]);

    const handleLoginForm = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            email    : emailRef.current!.value,
            password : passwordRef.current!.value
        };
        setFormData(payload);
        setOpen(true);
    };

    const handleCancel = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        if (formData) {
            handleLoginUserPayload(formData);
        }
        setOpen(false);
    };
    const handleDivCancel = () => {
        setOpen(false);
    };
    const handleDivClick = () => {
        clearMessage();
        setOpenMessage(false);
    };
    const handleOnClick = () => {
        clearMessage();
        setOpenMessage(false);
    };
    return (
        <div className="login-page">
            <LoginForm
                email={emailRef}
                password={passwordRef}
                divOnClick={handleDivClick}
                errMessage={errMessage}
                handleCancel={handleCancel}
                handleConfirm={handleConfirm}
                open={open}
                openMessage={openMessage}
                handleDivCancel={handleDivCancel}
                message={message}
                onClick={handleOnClick}
                loading={loading}
                handleLoginForm={handleLoginForm} 
            />
        </div> 
    );

};