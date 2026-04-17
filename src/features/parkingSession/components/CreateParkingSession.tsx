import type { JSX } from "react";
import type {CreateParkingSessionFormAttributes} from "../../../types/parkingSessionAttributes/createParkingSessionAttributes";
import { CreateParkingSessionInputField } from "../../../components/Input/ParkingSession/CreateParkingSessionInputField";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import "../../../styles/parkingSessionCss/createParkingSession.css";



export const CreateParkingSession = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivOnClick, handleOnClick, handleParkingSessionForm, isOpen, loading, message, open, openMessage, progress, slotId, vehicleNumber, vehicleOwnerAddress, vehicleOwnerNextOfKin, vehicleOwnerNextOfKinAddress, vehicleOwnerNextOfKinPhone, vehicleOwnerPhone, vehicleTypeId}: CreateParkingSessionFormAttributes):JSX.Element => {
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
                inputRef={vehicleTypeId} 
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
            message="Are you sure all the information are correct?"
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
        <Loader 
            isOpen={open}
            progress={progress}
        />
        </>
    );
};