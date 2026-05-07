import type { HTMLInputTypeAttribute, Ref, HTMLInputAutoCompleteAttribute } from "react";

export interface ParkingSessionInputFieldAttributes {
    id                  : string;
    name                : string;
    inputType           : HTMLInputTypeAttribute;
    inputRef?           : Ref<HTMLInputElement>;
    placeholder?        : string;
    autoComplete?       : HTMLInputAutoCompleteAttribute;
    label               : string;
    step?               : number;
    min?                : number;
    max?                : number;
};

export interface VehicleExitTimeInputFieldAttributes {
    id                  : string;
    name                : string;
    inputType           : HTMLInputTypeAttribute;
    inputRef?           : Ref<HTMLInputElement>;
    placeholder?        : string;
    autoComplete?       : HTMLInputAutoCompleteAttribute;
    label               : string;
};