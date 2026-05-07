import type { MouseEventHandler, Ref } from "react";
import type React from "react";

export type UpdateVehicleTypeFormDataAttributes = {
    newVehicleName : string;
    newHourlyRate  : string;
} | null;

export type UpdateVehicleTypePayloadAttributes = {
    newVehicleName : string;
    newHourlyRate  : string;
};

export type UpdateVehicleTypePropsAttributes = {
    handleSubmitForm : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    handleConfirm    : MouseEventHandler<HTMLButtonElement>;
    handleCancel     : MouseEventHandler<HTMLButtonElement>;
    handleOnclick    : MouseEventHandler<HTMLButtonElement>;
    handleDivOnclick : MouseEventHandler<HTMLDivElement>;
    handleDivCancel  : MouseEventHandler<HTMLDivElement>;
    isOpen           : boolean;
    openMessage      : boolean;
    errMessage       : boolean;
    message          : string;
    loading          : boolean;
    open             : boolean;
    progress         : number;
    newVehicleName   : Ref<HTMLInputElement>;
    newHourlyRate    : Ref<HTMLInputElement>;
};