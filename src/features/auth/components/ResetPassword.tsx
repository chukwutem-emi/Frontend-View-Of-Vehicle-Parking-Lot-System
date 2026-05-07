import type { ReactNode } from "react";
import type { ResetPasswordPropsAttributes } from "../../../types/authAttributes/resetPasswordAttribute";
import { ResetPasswordInputField } from "../../../components/Input/Auth/ResetPasswordInputField";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import "../../../styles/authCss/resetPassword.css";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";




export const ResetPassword = ({email, errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivClick, handleOnclick, handleResetPasswordForm, isOpen, message, open, openMessage, progress, loading}: ResetPasswordPropsAttributes): ReactNode => {

    return (
        <>
        <form onSubmit={handleResetPasswordForm} className="form">
            <ResetPasswordInputField 
                id="email"
                inputType="email"
                label="Email"
                name="email"
                autoComplete="on"
                inputRef={email}
                placeholder="Enter your email address"
            />
            <button type="submit" className="reset-password" disabled={loading}>
                {
                    loading ? (
                        <div className="flex flex-row items-center justify-center gap-4">
                            <ButtonSpinner />
                            <span className="loading">LOADING...</span>
                        </div>
                    ) : (
                        <div className="submit">SUBMIT</div>
                    )
                }
            </button>
        </form>
        <Dialog 
            divOnCancel={handleDivCancel}
            isOpen={isOpen}
            message="Proceed to submit?"
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            title="Reset Password"
        />
        <ResponseDialog 
            divOnClick={handleDivClick}
            errMessage={errMessage}
            isOpen={openMessage}
            message={message}
            onClick={handleOnclick}
        />
        <Loader 
            isOpen={open}
            progress={progress}
        />
        </>
    );
};