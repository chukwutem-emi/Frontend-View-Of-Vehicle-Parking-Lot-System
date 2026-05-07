import "../../../styles/authCss/signup.css"
import type {SignUpFormAttributes} from "../../../types/authAttributes/signupAttributes";
import {SignUpInputField} from "../../../components/Input/Auth/SignUpInputField";
import { useState, type ReactNode } from "react";
import {MdToggleOn, MdToggleOff} from "react-icons/md";
import {Dialog} from "../../../components/Modal/Dialog";
import {ResponseDialog} from "../../../components/Modal/ResponseDialog";
import {Loader} from "../../../components/Loader";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";




export const SignUpForm = ({username, password, userAddress, phone, email, confirmPassword, handleSignUpForm, loading, open, handleCancel, handleConfirm, handleDivCancel, divOnClick, errMessage, message, onClick, openMessage, isOpen, progress}: SignUpFormAttributes): ReactNode => {

    const[showPassword, setShowPassword] = useState(false);
    return (
        <>
        <form onSubmit={handleSignUpForm} className="form">
            <SignUpInputField
                id="username"
                name="username"
                inputType="text"
                inputRef={username}
                autoComplete="on"
                placeholder="Enter your name"
                label="Username" 
            />
            <SignUpInputField
                id="password"
                name="password"
                inputType={showPassword ? "text" : "password"}
                inputRef={password}
                autoComplete="off"
                placeholder="Enter your password"
                label="Password" 
            />
            <SignUpInputField
                id="confirmPassword"
                name="confirmPassword"
                inputType={showPassword ? "text" : "password"}
                inputRef={confirmPassword}
                autoComplete="off"
                placeholder="Confirm your password" 
                label="Confirm password"
            />
            <div onClick={() => setShowPassword(!showPassword)} className="flex flex-row text-gray-700 font-bold">
                <div className="cursor-pointer">
                    {
                        showPassword ? <MdToggleOn color="green" size={40} /> : <MdToggleOff color="black" size={40}/>
                    }
                </div>
                <div className="mt-[0.5rem]">Show Password</div>
            </div>
            <SignUpInputField
                id="userAddress"
                name="userAddress"
                inputType="text"
                inputRef={userAddress}
                autoComplete="on"
                placeholder="Enter your address"
                label="User address" 
            />
            <SignUpInputField
                id="phone"
                name="phone"
                inputType="text"
                inputRef={phone}
                autoComplete="on"
                placeholder="Enter your phone number"
                label="Phone number" 
            />
            <SignUpInputField
                id="E-mail address"
                name="email"
                inputType="email"
                inputRef={email}
                autoComplete="on"
                placeholder="Enter your email address"
                label="E-mail address" 
            />
            <button type="submit" className="signup" disabled={loading}>
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
            isOpen={open}
            message="Proceed to submit?"
            title="Signup"
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            divOnCancel={handleDivCancel}
        />
        <ResponseDialog
            divOnClick={divOnClick}
            errMessage={errMessage}
            isOpen={openMessage} 
            message={message}
            onClick={onClick}
        />
        <Loader
            isOpen={isOpen}
            progress={progress} 
        />
        </>
    );
};