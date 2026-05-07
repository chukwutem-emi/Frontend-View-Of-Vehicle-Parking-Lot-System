import type { MouseEventHandler, Ref } from "react";
import type React from "react";

export type CreateVehicleTypeFormDataAttributes = {
    vehicleName : string;
    hourlyRate  : string;
} | null;

export type CreateVehicleTypePayloadAttributes = {
    vehicleName : string;
    hourlyRate  : string;
};

export type CreateVehicleTypeFormProps = {
    handleVehicleTypeForm : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    handleConfirm         : MouseEventHandler<HTMLButtonElement>;
    handleCancel          : MouseEventHandler<HTMLButtonElement>;
    handleOnClick         : MouseEventHandler<HTMLButtonElement>;
    handleDivCancel       : MouseEventHandler<HTMLDivElement>;
    handleDivOnClick      : MouseEventHandler<HTMLDivElement>;
    vehicleName           : Ref<HTMLInputElement>;
    hourlyRate            : Ref<HTMLInputElement>;
    openMessage           : boolean;
    errMessage            : boolean;
    loading               : boolean;
    isOpen                : boolean;
    open                  : boolean;
    message               : string;
    progress              : number;
};