import type React from "react";
import type { HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, Ref} from "react";


export interface InputFieldAttributes {
    id                  : string;
    name                : string;
    inputType           : HTMLInputTypeAttribute;
    inputRef?           : Ref<HTMLInputElement>;
    placeholder?        : string;
    autoComplete?       : HTMLInputAutoCompleteAttribute;
    label               : string;
    value?              : string | number;
    onChange?           : (e:React.ChangeEvent<HTMLInputElement>) => void
};
