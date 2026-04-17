import { useEffect, useRef, useState, type JSX, type SyntheticEvent } from "react";
import {useLogin} from "../../auth/hooks/useLogin";
import { LoginForm } from "../components/LoginForm";

 

export const LoginPage = (): JSX.Element => {
    const emailRef    = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null); 

    const[openMessage, setOpenMessage] = useState(false);

    const {
        errMessage, 
        handleLoginUser: handleLoginUserPayload, 
        message, 
        loading, 
        clearMessage,
        isOpen,
        progress
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
        handleLoginUserPayload(payload);
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
                openMessage={openMessage}
                message={message}
                onClick={handleOnClick}
                loading={loading}
                handleLoginForm={handleLoginForm}
                isOpen={isOpen}
                progress={progress} 
            />
        </div> 
    );
};