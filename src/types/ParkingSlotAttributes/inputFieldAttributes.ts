import type React from "react";
import type { HTMLInputTypeAttribute, Ref, HTMLInputAutoCompleteAttribute } from "react";

export type ParkingSlotInputAttributes = {
    id                  : string;
    name                : string;
    inputType           : HTMLInputTypeAttribute;
    inputRef?           : Ref<HTMLInputElement>;
    placeholder?        : string;
    autoComplete?       : HTMLInputAutoCompleteAttribute;
    label               : string;
    value?              : string | number;
    onChange?           : (e:React.ChangeEvent<HTMLInputElement>) => void;
    step?               : number;
    min?                : number;
    max?                : number;
};
