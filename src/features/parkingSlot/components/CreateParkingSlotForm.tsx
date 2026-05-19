import type { ReactNode } from "react";
import type { CreateParkingSlotFormAttributes } from "../../../types/ParkingSlotAttributes/createParkingSlotAttributes";
import { CreateParkingSlotInputField } from "../../../components/Input/ParkingSlot/CreateParkingSlotInputField";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import "../../../styles/slotCss/createParkingSlot.css";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";



export const CreateParkingSlotForm = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivOnClick, handleOnClick, handleParkingSlotForm, isOpen, loading, message, openMessage, slotCode, vehicleTypeId}: CreateParkingSlotFormAttributes): ReactNode => {
    return (
        <>
        <form onSubmit={handleParkingSlotForm} className="form">
            <CreateParkingSlotInputField 
                id="vehicleTypeId"
                inputType="number"
                label="Vehicle type ID"
                name="vehicleTypeId"
                autoComplete="on"
                inputRef={vehicleTypeId}
                max={2000000}
                min={0}
                step={1}
            />
            <CreateParkingSlotInputField 
                id="slotCode"
                inputType="text"
                label="Slot code"
                name="slotCode"
                autoComplete="on"
                inputRef={slotCode}
            />
            <button type="submit" className="slot" disabled={loading}>
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
            title="Create Parking Slot"
        />
        <ResponseDialog 
            divOnClick={handleDivOnClick}
            errMessage={errMessage}
            isOpen={openMessage}
            message={message}
            onClick={handleOnClick}
        />
        </>
    );
};