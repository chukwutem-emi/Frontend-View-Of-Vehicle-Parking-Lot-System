import type {LoginFormAttributes} from "../../../types/authAttributes/loginAttributes";
import {LoginInputField} from "../../../components/Input/Auth/LoginInputField";
import {ResponseDialog} from "../../../components/Modal/ResponseDialog";
import "../../../styles/authCss/login.css";
import {MdToggleOff, MdToggleOn} from "react-icons/md";
import { useState, type JSX } from "react";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";
import {Loader} from "../../../components/Loader";



export const LoginForm = ({email, password, divOnClick, errMessage, openMessage, message, onClick, loading, handleLoginForm, isOpen, progress}: LoginFormAttributes): JSX.Element => {
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
            <button type="submit" className={`login ${loading ? "cursor-not-allowed" : "cursor-pointer"}`} disabled={loading}>
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