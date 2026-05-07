import type { MouseEventHandler } from "react";

export type GetParkingSlotAttributes = {
    id                : number;
    slotCode          : string;
    isAvailable       : boolean;
    maximumCapacity   : number;
    availableCapacity : number;
    updatedBy         : string;
    vehicleTypeId     : number;
    createdAt         : Date;
    updatedAt         : Date;
};

export type GetParkingSlotPropsAttributes = {
    handleOnclick    : MouseEventHandler<HTMLButtonElement>;
    handleDivOnClick : MouseEventHandler<HTMLDivElement>;
    progress         : number;
    open             : boolean;
    errMessage       : boolean;
    message          : string;
    openMessage      : boolean;
    slot             : GetParkingSlotAttributes | null;
};