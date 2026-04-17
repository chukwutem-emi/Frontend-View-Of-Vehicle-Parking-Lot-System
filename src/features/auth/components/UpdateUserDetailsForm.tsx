import React, { useEffect, useState, type JSX } from "react";
import type {UpdateUserDetailsFormAttributes} from "../../../types/authAttributes/updateUserDetailsAttributes";
import { UpdateUserDetailsInputField } from "../../../components/Input/Auth/UpdateUserDetailsInputFields";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import {MdToggleOn, MdToggleOff} from "react-icons/md";
import "../../../styles/authCss/updateUserDetails.css"
import { useSelector } from "react-redux";
import type { GetUserAttributes } from "../../../types/authAttributes/getUserAttributes";



export const UpdateUserDetailsForm = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivClick, handleOnclick, handleSubmitForm, isOpen, loading, message, open, openMessage, progress, confirmPassword, email, password, phone, userAddress, username}: UpdateUserDetailsFormAttributes):JSX.Element => {

    const[showPassword, setShowPassword] = useState(false);
    const[formData, setFormData]         = useState({
        userAddress : "",
        username    : "",
        email       : "",
        phone       : ""
    });
    const userDetails: GetUserAttributes = useSelector((store: any) => store.userDetails?.getUserDetails);

    useEffect(() => {
        if (userDetails) {
            setFormData({
                userAddress : userDetails?.userAddress,
                username    : userDetails?.username,
                email       : userDetails?.email,
                phone       : userDetails?.phone
            });
        };
    }, [userDetails]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormData((prev) => ({
            ...prev,
            [name] : value
        }));
    };
    return (
        <>
        <form onSubmit={handleSubmitForm} className="form">
            <UpdateUserDetailsInputField
                label="New username" 
                autoComplete="on"
                id="username"
                inputRef={username}
                inputType="text"
                name="username"
                placeholder="Enter your new username"
                value={formData.username}
                onChange={handleChange}
            />
            <UpdateUserDetailsInputField 
                label="New password"
                autoComplete="off"
                id="password"
                inputRef={password}
                inputType={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your new password"
            />
            <UpdateUserDetailsInputField 
                label="Confirm password"
                autoComplete="off"
                id="confirmPassword"
                inputRef={confirmPassword}
                inputType={showPassword ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm your new password"
            />
            <div onClick={() => setShowPassword(!showPassword)} className="btn">
                <div className="cursor-pointer">
                    {
                        showPassword ? <MdToggleOn size={40} color="green"/> : <MdToggleOff size={40} color="black"/>
                    }
                </div>
                <p className="mt-[0.5rem]">Show Password</p>
            </div>
            <UpdateUserDetailsInputField 
                label="New email"
                autoComplete="on"
                id="email"
                inputRef={email}
                inputType="email"
                name="email"
                placeholder="Enter your new email"
                value={formData.email}
                onChange={handleChange}
            />
            <UpdateUserDetailsInputField 
                label="New address"
                autoComplete="on"
                id="userAddress"
                inputRef={userAddress}
                inputType="text"
                name="userAddress"
                placeholder="Enter your new address"
                value={formData.userAddress}
                onChange={handleChange}
            />
            <UpdateUserDetailsInputField 
                label="New phone number"
                autoComplete="on"
                id="phone"
                inputRef={phone}
                inputType="text"
                name="phone"
                placeholder="Enter your new phone number"
                value={formData.phone}
                onChange={handleChange}
            />
            <button type="submit" className="update" disabled={loading}>
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
            divOnCancel={handleDivCancel} 
            isOpen={open}
            message="Are you sure your details are correct?"
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            title="Update"
        />
        <ResponseDialog
            divOnClick={handleDivClick} 
            errMessage={errMessage}
            isOpen={openMessage}
            message={message}
            onClick={handleOnclick}
        />
        <Loader 
            isOpen={isOpen}
            progress={progress}
        />
        </>
    );
};