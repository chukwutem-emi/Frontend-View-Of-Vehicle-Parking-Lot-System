import type { ReactNode } from "react";
import type { UpdateVehicleTypePropsAttributes } from "../../../types/vehicleTypeAttributes/updateVehicleTypeAttribute";
import { UpdateVehicleTypeInputFields } from "../../../components/Input/VehicleType/UpdateVehicleTypeInputFields";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import "../../../styles/vehicleTypeCss/updateVehicleType.css";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";



export const UpdateVehicleTypeForm = ({errMessage, newVehicleName, newHourlyRate, handleCancel, handleConfirm, handleDivCancel, handleDivOnclick, handleOnclick, open, progress, handleSubmitForm, isOpen, loading, message, openMessage}: UpdateVehicleTypePropsAttributes): ReactNode => {

    return (
        <>
        <form onSubmit={handleSubmitForm} className="form">
            <UpdateVehicleTypeInputFields 
                id="newVehicleName"
                label="New vehicle name"
                name="newVehicleName"
                inputType="text"
                inputRef={newVehicleName}
                placeholder="Enter new vehicle name"
                autoComplete="on"
            />
            <UpdateVehicleTypeInputFields 
                id="newHourlyRate"
                label="New Hourly Rate"
                name="newHourlyRate"
                inputType="text"
                inputRef={newHourlyRate}
                placeholder="Enter new hourly rate"
                autoComplete="on"
            />
            <button type="submit" className="vehicle-update" disabled={loading}>
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
            title="Update Vehicle Type"    
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
