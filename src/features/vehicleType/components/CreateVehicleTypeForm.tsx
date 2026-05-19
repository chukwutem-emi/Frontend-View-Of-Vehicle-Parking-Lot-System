import type { ReactNode } from "react";
import type { CreateVehicleTypeFormProps } from "../../../types/vehicleTypeAttributes/createVehicleTypeAttribute";
import { CreateVehicleTypeInputFields } from "../../../components/Input/VehicleType/CreateVehicleTypeInputFields";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import "../../../styles/vehicleTypeCss/createVehicleType.css";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";



export const CreateVehicleTypeForm = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivOnClick, handleOnClick, handleVehicleTypeForm, hourlyRate, isOpen, loading, message, openMessage, vehicleName}: CreateVehicleTypeFormProps): ReactNode => {
    return (
        <>
        <form onSubmit={handleVehicleTypeForm} className="form">
            <CreateVehicleTypeInputFields 
                label="Vehicle name"
                autoComplete="on"
                id="vehicleName"
                inputRef={vehicleName}
                inputType="text"
                name="vehicleName"
                placeholder="Enter the vehicle name"
            />
            <CreateVehicleTypeInputFields 
                label="Hourly rate"
                autoComplete="on"
                id="hourlyRate"
                inputRef={hourlyRate}
                inputType="text"
                name="hourlyRate"
                placeholder="Enter the hourly rate"
            />
            <button type="submit" className="vehicle" disabled={loading}>
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
            title="Create Vehicle Type"
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