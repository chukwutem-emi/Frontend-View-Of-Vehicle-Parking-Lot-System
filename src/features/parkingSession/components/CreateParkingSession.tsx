import type { ReactNode } from "react";
import type {CreateParkingSessionFormAttributes} from "../../../types/parkingSessionAttributes/createParkingSessionAttributes";
import { CreateParkingSessionInputField } from "../../../components/Input/ParkingSession/CreateParkingSessionInputField";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import "../../../styles/parkingSessionCss/createParkingSession.css";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";



export const CreateParkingSession = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivOnClick, handleOnClick, handleParkingSessionForm, isOpen, loading, message, openMessage, slotId, vehicleNumber, vehicleOwnerAddress, vehicleOwnerNextOfKin, vehicleOwnerNextOfKinAddress, vehicleOwnerNextOfKinPhone, vehicleOwnerPhone, vehicleId}: CreateParkingSessionFormAttributes): ReactNode => {
    return (
        <>
        <form onSubmit={handleParkingSessionForm} className="form">
            <CreateParkingSessionInputField
                label="Slot Id"
                autoComplete="on"
                id="slotId"
                inputRef={slotId} 
                inputType="number"
                step={1}
                min={0}
                max={2000000000}
                name="slotId"
                placeholder="Enter the slot Id"
            />
            <CreateParkingSessionInputField
                label="Vehicle number"
                autoComplete="on"
                id="vehicleNumber"
                inputRef={vehicleNumber} 
                inputType="text"
                name="vehicleNumber"
                placeholder="Enter the vehicle number"
            />
            <CreateParkingSessionInputField
                label="Vehicle owner address"
                autoComplete="on"
                id="vehicleOwnerAddress"
                inputRef={vehicleOwnerAddress} 
                inputType="text"
                name="vehicleOwnerAddress"
                placeholder="Enter the vehicle owner address"
            />
            <CreateParkingSessionInputField
                label="Vehicle owner next of kin"
                autoComplete="on"
                id="vehicleOwnerNextOfKin"
                inputRef={vehicleOwnerNextOfKin} 
                inputType="text"
                name="vehicleOwnerNextOfKin"
                placeholder="Enter the vehicle owner next of kin"
            />
            <CreateParkingSessionInputField
                label="Vehicle owner next of kin address"
                autoComplete="on"
                id="vehicleOwnerNextOfKinAddress"
                inputRef={vehicleOwnerNextOfKinAddress} 
                inputType="text"
                name="vehicleOwnerNextOfKinAddress"
                placeholder="Enter the vehicle owner next of kin address"
            />
            <CreateParkingSessionInputField
                label="Vehicle owner next of kin phone number"
                autoComplete="on"
                id="vehicleOwnerNextOfKinPhone"
                inputRef={vehicleOwnerNextOfKinPhone} 
                inputType="text"
                name="vehicleOwnerNextOfKinPhone"
                placeholder="Enter the vehicle owner next of kin phone number"
            />
            <CreateParkingSessionInputField
                label="Vehicle owner phone number"
                autoComplete="on"
                id="vehicleOwnerPhone"
                inputRef={vehicleOwnerPhone} 
                inputType="text"
                name="vehicleOwnerPhone"
                placeholder="Enter the vehicle owner phone number"
            />
            <CreateParkingSessionInputField
                label="Vehicle type Id"
                autoComplete="on"
                id="vehicleTypeId"
                inputRef={vehicleId} 
                inputType="number"
                step={1}
                min={0}
                max={2000000000}
                name="vehicleTypeId"
                placeholder="Enter the vehicle type Id"
            />
            <button type="submit" className="session" disabled={loading}>
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
            title="Create Parking Session"
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