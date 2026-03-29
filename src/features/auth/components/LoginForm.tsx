import type {LoginFormAttributes} from "../../../types/authAttributes";
import {LoginInputField} from "../../../components/Input/Auth/LoginInputField";
import {Dialog} from "../../../components/Modal/Dialog";
import {ResponseDialog} from "../../../components/Modal/ResponseDialog";
import "../../../styles/authCss/login.css";
import {MdToggleOff, MdToggleOn} from "react-icons/md";
import { useState } from "react";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";



export const LoginForm = ({email, password, divOnClick, errMessage, handleCancel, handleConfirm, open, openMessage, handleDivCancel, message, onClick, loading, handleLoginForm}: LoginFormAttributes) => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <>
        <form className="form" onSubmit={handleLoginForm}>
            <LoginInputField
                id="email"
                name="email"
                inputType="email"
                inputRef={email}
                placeholder="Enter your email"
                autoComplete="email"
                label="Email"
            />
            <LoginInputField
                id="password"
                name="password"
                inputType={showPassword ? "text" : "password"}
                inputRef={password}
                placeholder="Enter your password"
                autoComplete="current-password"
                label="Password"
            />
            <div className="flex flex-row text-gray-700 font-bold" onClick={() => setShowPassword(!showPassword)}>
                <div className="cursor-pointer">
                    {
                        showPassword ? <MdToggleOn color="green" size={40} /> : <MdToggleOff color="black" size={40}/>
                    }
                </div>
                <div className="mt-[0.5rem] text-sm xl:text-lg">Show Password</div>    
            </div>
            <button type="submit" className="login">
                {
                    loading ? (
                        <div className="flex flex-row items-center justify-center gap-4">
                            <ButtonSpinner />
                            <span className="loading">LOADING...</span>
                        </div>
                    ) : (
                        <div className="submit">LOGIN</div>
                    )
                }
            </button>
        </form>
        <Dialog 
            isOpen={open}
            message="Are you sure you want to login?" 
            title="Login"
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