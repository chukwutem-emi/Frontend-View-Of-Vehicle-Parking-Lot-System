import { useState, type ReactNode } from "react";
import type { UpdatePasswordPropsAttributes } from "../../../types/authAttributes/updatePasswordAttributes";
import { UpdatePasswordInputField } from "../../../components/Input/Auth/UpdatePasswordInputField";
import { MdToggleOn, MdToggleOff } from "react-icons/md";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import "../../../styles/authCss/updatePassword.css";




export const UpdatePassword = ({confirmPassword, errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivClick, handleOnclick, handleUpdatePasswordForm, isOpen, message, openMessage, password, loading}: UpdatePasswordPropsAttributes): ReactNode => {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
        <form onSubmit={handleUpdatePasswordForm} className="form">
            <UpdatePasswordInputField
                id="password"
                inputType={showPassword ? "text" : "password"}
                label="Password" 
                name="password"
                autoComplete="off"
                inputRef={password}
                placeholder="Enter your password"
            />
            <UpdatePasswordInputField
                id="confirmPassword"
                inputType={showPassword ? "text" : "password"}
                label="Confirm Password" 
                name="confirmPassword"
                autoComplete="off"
                inputRef={confirmPassword}
                placeholder="Confirm your password"
            />
            <div className="flex flex-row text-gray-700 font-bold" onClick={() => setShowPassword(!showPassword)}>
                <div className="cursor-pointer">
                    {
                        showPassword ? <MdToggleOn color="green" size={40} /> : <MdToggleOff color="black" size={40}/>
                    }
                </div>
                <div className="mt-[0.5rem] text-sm xl:text-lg">Show Password</div>    
            </div>
            <button type="submit" className="update-password" disabled={loading}>
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
            title="Update Password"
        />
        <ResponseDialog
            divOnClick={handleDivClick} 
            errMessage={errMessage}
            isOpen={openMessage}
            message={message}
            onClick={handleOnclick}
        />
        </>
    );
};