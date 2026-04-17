import type React from "react";
import type { MouseEventHandler, Ref } from "react";

export interface VehicleExitTimeAttributes {
    vehicleName   : string;
    vehicleNumber : string;
};

export type VehicleExitTimeProps = {
    vehicleName?     : Ref<HTMLInputElement>;
    vehicleNumber?   : Ref<HTMLInputElement>;
    handleSubmitForm : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    loading          : boolean;
    handleDivCancel  : MouseEventHandler<HTMLDivElement>;
    handleConfirm    : MouseEventHandler<HTMLButtonElement>;
    handleCancel     : MouseEventHandler<HTMLButtonElement>;
    handleOnclick    : MouseEventHandler<HTMLButtonElement>;
    handleDivOnclick : MouseEventHandler<HTMLDivElement>;
    openMessage      : boolean;
    errMessage       : boolean;
    message          : string;
    progress         : number;
    open             : boolean;
    isOpen           : boolean;
};