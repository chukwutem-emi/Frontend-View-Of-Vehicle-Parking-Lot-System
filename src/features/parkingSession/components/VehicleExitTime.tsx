import type { JSX } from "react";
import type { VehicleExitTimeProps } from "../../../types/parkingSessionAttributes/vehicleExitTimeAttributes";
import { VehicleExitTimeInputField } from "../../../components/Input/ParkingSession/VehicleExitTimeInputField";
import "../../../styles/parkingSessionCss/vehicleExitTime.css";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";




export const VehicleExitTime = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivOnclick, handleOnclick, handleSubmitForm, loading, message, open, openMessage, progress, vehicleName, vehicleNumber, isOpen}: VehicleExitTimeProps): JSX.Element => {
    return (
        <>
        <form onSubmit={handleSubmitForm} className="form">
            <VehicleExitTimeInputField
                label="Vehicle name" 
                autoComplete="on"
                id="vehicleName"
                inputRef={vehicleName}
                inputType="text"
                name="vehicleName"
                placeholder="Enter the vehicle name"
            />
            <VehicleExitTimeInputField
                label="Vehicle number" 
                autoComplete="on"
                id="vehicleNumber"
                inputRef={vehicleNumber}
                inputType="text"
                name="vehicleNumber"
                placeholder="Enter the vehicle number"
            />
            <button type="submit" className="exit" disabled={loading}>
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
            isOpen={isOpen}
            message="Are you sure you want to submit?"
            onCancel={handleCancel}
            onConfirm={handleConfirm}
            title="Vehicle Exit Time"
        />
        <ResponseDialog 
            divOnClick={handleDivOnclick}
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