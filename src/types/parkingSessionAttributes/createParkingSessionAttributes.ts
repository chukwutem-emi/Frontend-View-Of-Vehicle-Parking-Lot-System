import type React from "react";
import type { MouseEventHandler, Ref } from "react";

export interface CreateParkingSessionAttributes {
    vehicleOwnerNextOfKinAddress : string;
    vehicleOwnerNextOfKinPhone   : string;
    vehicleOwnerNextOfKin        : string;
    vehicleOwnerAddress          : string;
    vehicleOwnerPhone            : string;
    vehicleNumber                : string;
    slotId                       : number;
    vehicleId                    : number;          
};

export interface CreateParkingSessionFormAttributes {
    vehicleOwnerNextOfKinAddress? : Ref<HTMLInputElement>;
    vehicleOwnerNextOfKinPhone?   : Ref<HTMLInputElement>;
    vehicleOwnerNextOfKin?        : Ref<HTMLInputElement>;
    vehicleOwnerAddress?          : Ref<HTMLInputElement>;
    vehicleOwnerPhone?            : Ref<HTMLInputElement>;
    vehicleNumber?                : Ref<HTMLInputElement>;
    slotId?                       : Ref<HTMLInputElement>;
    vehicleId?                    : Ref<HTMLInputElement>; 
    handleParkingSessionForm      : (e: React.SyntheticEvent<HTMLFormElement>) => void;
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