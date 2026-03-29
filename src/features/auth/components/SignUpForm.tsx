import type {SignUpFormAttributes} from "../../../types/authAttributes";
import {SignUpInputField} from "../../../components/Input/Auth/SignUpInputField";
import { useState } from "react";
import {MdToggleOn, MdToggleOff} from "react-icons/md";
import {Dialog} from "../../../components/Modal/Dialog";
import {ResponseDialog} from "../../../components/Modal/ResponseDialog";
import "../../../styles/authCss/signup.css"




export const SignUpForm = ({username, password, userAddress, phone, email, confirmPassword, handleSignUpForm, loading, open, handleCancel, handleConfirm, handleDivCancel, divOnClick, errMessage, message, onClick, openMessage}: SignUpFormAttributes) => {
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
            <button type="submit" className="signup">
                {
                    loading ? (
                        <span className="loading">LOADING...</span>
                    ) : (
                        <div className="submit">SUBMIT</div>
                    )
                }
            </button>
        </form>
        <Dialog 
            isOpen={open}
            message="Are you sure your details are correct?"
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
        </>
    );
};