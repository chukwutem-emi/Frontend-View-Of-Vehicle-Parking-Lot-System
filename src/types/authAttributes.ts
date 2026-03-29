import type React from "react";
import type { ChangeEventHandler, HTMLInputAutoCompleteAttribute, HTMLInputTypeAttribute, MouseEventHandler, Ref} from "react";


export interface SignUpFormAttributes {
    username?           : Ref<HTMLInputElement>;
    password?           : Ref<HTMLInputElement>;
    userAddress?        : Ref<HTMLInputElement>;
    email?              : Ref<HTMLInputElement>;
    phone?              : Ref<HTMLInputElement>;
    confirmPassword?    : Ref<HTMLInputElement>;
    handleSignUpForm    : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    loading             : boolean;
    handleConfirm       : MouseEventHandler<HTMLButtonElement>;
    handleCancel        : MouseEventHandler<HTMLButtonElement>;
    open                : boolean;
    openMessage         : boolean;
    handleDivCancel     : MouseEventHandler<HTMLDivElement>;
    message             : string;
    onClick             : MouseEventHandler<HTMLButtonElement>;
    divOnClick          : MouseEventHandler<HTMLDivElement>;
    errMessage          : boolean;
};

export interface LoginFormAttributes {
   password             : Ref<HTMLInputElement>;
   email                : Ref<HTMLInputElement>;
   handleLoginForm     : (e: React.SyntheticEvent<HTMLFormElement>) => void;
   loading              : boolean;
   handleConfirm        : MouseEventHandler<HTMLButtonElement>;
   handleCancel         : MouseEventHandler<HTMLButtonElement>;
   open                 : boolean;
   openMessage          : boolean;
   handleDivCancel      : MouseEventHandler<HTMLDivElement>;
   message              : string;
   onClick              : MouseEventHandler<HTMLButtonElement>;
   divOnClick           : MouseEventHandler<HTMLDivElement>;
   errMessage           : boolean;
};


export interface UpdateUserDetailsPayloadAttributes {
    username        : string;
    password        : string;
    userAddress     : string;
    email           : string;
    phone           : string;
    confirmPassword : string;
};

export interface InputFieldAttributes {
    id?                 : string;
    name?               : string;
    inputType?          : HTMLInputTypeAttribute;
    inputRef?           : Ref<HTMLInputElement>;
    placeholder?        : string;
    autoComplete?       : HTMLInputAutoCompleteAttribute;
    handleClearMessage? : ChangeEventHandler<HTMLInputElement, HTMLInputElement>;
    label               : string;
};

export interface SignupPayloadAttributes {
    username        : string;
    password        : string;
    userAddress     : string;
    email           : string;
    phone           : string;
    confirmPassword : string;
};

export interface LoginPayloadAttributes {
    email           : string;
    password        : string;
}

export interface UserStateAttributes {
    id                     : number;
    username               : string;
    password               : string;
    user_address           : string;
    phone                  : string;
    email                  : string;
    user_role              : string;
    is_admin               : boolean;
    updated_by             : string;
    reset_token            : string;
    reset_token_expiration : Date;
    created_at             : Date;
    updated_at             : Date;
};