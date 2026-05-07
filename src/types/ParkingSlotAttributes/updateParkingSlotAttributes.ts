import type React from "react";
import type { MouseEventHandler, Ref } from "react";

export type UpdateParkingSlotAttributes = {
    maximumCapacity   : number;
    availableCapacity : number;
    slotCode          : string;
};

export type UpdateParkingSlotFormAttributes = {
    availableCapacity : Ref<HTMLInputElement>;
    maximumCapacity   : Ref<HTMLInputElement>;
    slotCode          : Ref<HTMLInputElement>;
    handleSubmitForm  : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    loading           : boolean;
    handleDivCancel   : MouseEventHandler<HTMLDivElement>;
    handleConfirm     : MouseEventHandler<HTMLButtonElement>;
    handleCancel      : MouseEventHandler<HTMLButtonElement>;
    handleDivClick    : MouseEventHandler<HTMLDivElement>;
    handleOnclick     : MouseEventHandler<HTMLButtonElement>;
    open              : boolean;
    errMessage        : boolean;
    progress          : number;
    isOpen            : boolean;
    message           : string;
    openMessage       : boolean;
};