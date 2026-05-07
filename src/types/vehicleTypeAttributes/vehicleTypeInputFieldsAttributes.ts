import type { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, Ref } from "react";

export interface VehicleTypeInputFieldsAttributes {
    autoComplete? : HTMLInputAutoCompleteAttribute;
    placeholder?  : string;
    inputType     : HTMLInputTypeAttribute;
    inputRef?     : Ref<HTMLInputElement>;
    name          : string;
    id            : string;
    label         : string;
};