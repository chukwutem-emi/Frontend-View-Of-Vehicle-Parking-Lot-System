import type React from "react";
import type { PaginationAttributes } from "../paginationAttributes";
import type { MouseEventHandler } from "react";

export type GetAllParkingSessionsAttributes = {
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
}[];

export type GetAllParkingSessionsProps = {
    sessions         : GetAllParkingSessionsAttributes;
    pagination       : PaginationAttributes;
    setPagination    : React.Dispatch<React.SetStateAction<PaginationAttributes>>;
    handleOnclick    : MouseEventHandler<HTMLButtonElement>;
    handleDivOnclick : MouseEventHandler<HTMLDivElement>;
    openMessage      : boolean;
    errMessage       : boolean;
    message          : string;
    progress         : number;
    open             : boolean;
};