import type { MouseEventHandler } from "react";
import type { PaginationAttributes } from "../paginationAttributes";
import type React from "react";

export type GetAllParkingSlotAttributes = {
    id                : number;
    slotCode          : string;
    isAvailable       : boolean;
    maximumCapacity   : number;
    availableCapacity : number;
    updatedBy         : string;
    vehicleTypeId     : number;
    createdAt         : Date;
    updatedAt         : Date;
}[];

export type GetAllParkingSlotPropsAttributes = {
    handleOnclick    : MouseEventHandler<HTMLButtonElement>;
    handleDivOnClick : MouseEventHandler<HTMLDivElement>;
    progress         : number;
    open             : boolean;
    errMessage       : boolean;
    message          : string;
    openMessage      : boolean;
    slots            : GetAllParkingSlotAttributes
    pagination       : PaginationAttributes;
    setPagination    : React.Dispatch<React.SetStateAction<PaginationAttributes>>;
};