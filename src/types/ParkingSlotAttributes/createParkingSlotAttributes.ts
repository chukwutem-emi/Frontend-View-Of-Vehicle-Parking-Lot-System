import type React from "react";
import type { MouseEventHandler, Ref } from "react";

export type CreateParkingSlotAttributes = {
    slotCode      : string;
    vehicleTypeId : number;
};

export type CreateParkingSlotFormAttributes = {
    vehicleTypeId                 : Ref<HTMLInputElement>;
    slotCode                      : Ref<HTMLInputElement>;
    handleParkingSlotForm         : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    handleConfirm                 : MouseEventHandler<HTMLButtonElement>;
    handleCancel                  : MouseEventHandler<HTMLButtonElement>;
    handleDivCancel               : MouseEventHandler<HTMLDivElement>;
    handleOnClick                 : MouseEventHandler<HTMLButtonElement>;
    handleDivOnClick              : MouseEventHandler<HTMLDivElement>;
    loading                       : boolean;
    openMessage                   : boolean;
    message                       : string;
    errMessage                    : boolean;
    isOpen                        : boolean;  
};