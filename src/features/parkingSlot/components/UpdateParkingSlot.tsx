import React, { useEffect, useState, type ReactNode } from "react";
import type { UpdateParkingSlotFormAttributes } from "../../../types/ParkingSlotAttributes/updateParkingSlotAttributes";
import type { GetParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/getParkingSlotAttributes";
import { UpdateParkingSlotInputField } from "../../../components/Input/ParkingSlot/UpdateParkingSlotInputField";
import "../../../styles/slotCss/updateParkingSlot.css";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import { useAppSelector } from "../../../utils/useAppSelector";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";



export const UpdateParkingSlot = ({availableCapacity, errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivClick, handleOnclick, handleSubmitForm, isOpen, loading, maximumCapacity, message, open, openMessage, progress, slotCode}: UpdateParkingSlotFormAttributes): ReactNode => {

    const[formData, setFormdata] = useState({
        maximumCapacity   : 0,
        availableCapacity : 0,
        slotCode          : ""
    });

    const slotDetails: GetParkingSlotAttributes | null = useAppSelector((state) => state.slot.Details);

    useEffect(() => {
        if (slotDetails) {
            setFormdata({
                availableCapacity : slotDetails?.availableCapacity,
                maximumCapacity   : slotDetails?.maximumCapacity,
                slotCode          : slotDetails?.slotCode
            });
        }
    }, [slotDetails]);

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;

        setFormdata((prev) => ({
            ...prev,
            [name] : value
        }));
    };

    return (
        <>
        <form onSubmit={handleSubmitForm} className="form">
            <UpdateParkingSlotInputField 
                id="availableCapacity"
                inputType="number"
                label="Available capacity"
                name="availableCapacity"
                autoComplete="on"
                inputRef={availableCapacity}
                placeholder="Enter the new available capacity"
                onChange={handleOnChange}
                value={formData?.availableCapacity}
                max={200000}
                min={0}
                step={1}
            />
            <UpdateParkingSlotInputField 
                id="maximumCapacity"
                inputType="number"
                label="Maximum capacity"
                name="maximumCapacity"
                autoComplete="on"
                inputRef={maximumCapacity}
                placeholder="Enter the new maximum capacity"
                onChange={handleOnChange}
                value={formData?.maximumCapacity}
                max={200000}
                min={0}
                step={1}
            />
            <UpdateParkingSlotInputField 
                id="slotCode"
                inputType="text"
                label="Slot code"
                name="slotCode"
                autoComplete="on"
                inputRef={slotCode}
                placeholder="Enter your new slot code"
                onChange={handleOnChange}
                value={formData?.slotCode}
            />
            <button type="submit" className="update-slot" disabled={loading}>
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
            title="Update Slot"
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