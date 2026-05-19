import type React from "react";
import type { MouseEventHandler, Ref} from "react";


export interface LoginFormAttributes {
   password             : Ref<HTMLInputElement>;
   email                : Ref<HTMLInputElement>;
   handleLoginForm     : (e: React.SyntheticEvent<HTMLFormElement>) => void;
   loading              : boolean;
   openMessage          : boolean;
   message              : string;
   onClick              : MouseEventHandler<HTMLButtonElement>;
   divOnClick           : MouseEventHandler<HTMLDivElement>;
   errMessage           : boolean;
};

export interface LoginPayloadAttributes {
    email           : string;
    password        : string;
};