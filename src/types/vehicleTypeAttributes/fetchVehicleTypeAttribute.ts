import type React from "react";
import type { MouseEventHandler } from "react";

export type FetchVehicleTypeAttributes = {
    vehicleName : string;
    hourlyRate  : number;
    id          : number;
    updatedAt   : Date;
    createdAt   : Date;
    updatedBy   : string;
};

export type FetchVehicleTypeFormProps = {
    handleVehicleTypeSearchForm : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    handleOnClick              : MouseEventHandler<HTMLButtonElement>;
    handleDivOnClick           : MouseEventHandler<HTMLDivElement>;
    openMessage                : boolean;
    errMessage                 : boolean;
    loading                    : boolean;
    open                       : boolean;
    message                    : string;
    progress                   : number;
    value                      : string;
    setValue                   : React.Dispatch<React.SetStateAction<string>>;
    vehicle                    : FetchVehicleTypeAttributes | null;
    isDivOpen                  : boolean;
    divRef                     : React.RefObject<HTMLDivElement | null>
};