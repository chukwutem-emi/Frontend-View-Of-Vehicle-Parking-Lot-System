import { useEffect, useRef, useState, type ReactNode, type SyntheticEvent } from "react";
import {useLogin} from "../../auth/hooks/useLogin";
import { LoginForm } from "../components/LoginForm";
import { BigBackgroundSpinner } from "../../../components/BigBackgroundSpinner";

 

const LoginPage = (): ReactNode => {
    const emailRef    = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null); 

    const[openMessage, setOpenMessage]            = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(true);

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

    useEffect(() => {
        const timer = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    
    const handleLoginForm = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const payload = {
            email    : emailRef.current?.value ?? "",
            password : passwordRef.current?.value ?? ""
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
        <>
        {
            backgroundLoading ? (
                <BigBackgroundSpinner />
            ) : (
                <div className="overflow-x-hidden overflow-y-auto my-[6rem] md:my-[2rem]">
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
            )
        }
        </>
    );
};
export default LoginPage;