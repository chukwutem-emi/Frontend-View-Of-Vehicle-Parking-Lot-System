import {useEffect, useRef, useState, type ReactNode, type SyntheticEvent} from "react";
import {SignUpForm} from "../components/SignUpForm";
import {useSignup} from "../hooks/useSignup";
import { BigBackgroundSpinner } from "../../../components/BigBackgroundSpinner";


export type FormData = {
    username        : string;
    password        : string;
    confirmPassword : string;
    email           : string;
    userAddress     : string;
    phone           : string;
} | null;

const SignUpPage = (): ReactNode => {
    const usernameRef        = useRef<HTMLInputElement>(null);
    const passwordRef        = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);
    const emailRef           = useRef<HTMLInputElement>(null);
    const userAddressRef     = useRef<HTMLInputElement>(null);
    const phoneRef           = useRef<HTMLInputElement>(null);

    const[open, setOpen]                           = useState(false);
    const[openMessage, setOpenMessage]             = useState(false);
    const[formData, setFormData]                   = useState<FormData>(null);
    const[backgroundLoading, setBackgroundLoading] = useState(true);

    const {
        errMessage,
        handleCreateUser: handleCreateUserPayload,
        loading,
        message,
        clearMessage,
        isOpen,
        progress
    } = useSignup();
    
    const handleSignUpForm = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();
        const payload = {
            username        : usernameRef.current?.value ?? "",
            password        : passwordRef.current?.value ?? "",
            confirmPassword : confirmPasswordRef.current?.value ?? "",
            email           : emailRef.current?.value ?? "",
            userAddress     : userAddressRef.current?.value ?? "",
            phone           : phoneRef.current?.value ?? ""
        };
        setFormData(payload);
        setOpen(true)
    };
    useEffect(() => {
        if (message && !errMessage) {
            usernameRef.current!.value        = "";
            passwordRef.current!.value        = "";
            confirmPasswordRef.current!.value = "";
            emailRef.current!.value           = "";
            userAddressRef.current!.value     = "";
            phoneRef.current!.value           = "";
        };
        if (message) {
            setOpenMessage(true)
        };
    }, [message, errMessage]);

    const handleConfirm = () => {
        if (formData) {
            handleCreateUserPayload(formData);
        };
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false)
    };

    const handleOnclick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <> 
        {
            backgroundLoading ? (
                <BigBackgroundSpinner />
            ) : (
                <div className="w-full overflow-x-hidden flex my-[6rem]">
                    <SignUpForm
                    loading={loading}
                    confirmPassword={confirmPasswordRef}
                    email={emailRef}
                    handleSignUpForm={handleSignUpForm}
                    password={passwordRef}
                    phone={phoneRef}
                    userAddress={userAddressRef}
                    username={usernameRef}
                    handleCancel={handleCancel}
                    handleConfirm={handleConfirm}
                    handleDivCancel={handleCancel}
                    open={open}
                    divOnClick={handleOnclick}
                    errMessage={errMessage}
                    message={message}
                    onClick={handleOnclick}
                    openMessage={openMessage}
                    isOpen={isOpen}
                    progress={progress}
                    />
                </div>
            )
        }
        </>
    );
};
export default SignUpPage;