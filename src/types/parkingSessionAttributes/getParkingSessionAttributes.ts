import type { MouseEventHandler } from "react";

export type GetParkingSessionAttributes = {
    id                           : number;
    vehicleOwnerNextOfKinAddress : string;
    vehicleOwnerNextOfKinPhone   : string;
    vehicleOwnerNextOfKin        : string;
    vehicleOwnerAddress          : string;
    vehicleOwnerPhone            : string;
    vehicleNumber                : string;
    parkingStatus                : string;
    isCleared                    : boolean;
    entryTime                    : Date;
    exitTime                     : Date;
    totalAmount                  : number;
    slotId                       : number;
    vehicleTypeId                : number;
    createdAt                    : Date;
    updatedAt                    : Date;   
};

export type GetParkingSessionProps = {
    session          : GetParkingSessionAttributes;
    handleOnclick    : MouseEventHandler<HTMLButtonElement>;
    handleDivOnclick : MouseEventHandler<HTMLDivElement>;
    openMessage      : boolean;
    errMessage       : boolean;
    message          : string;
    progress         : number;
    open             : boolean;
};