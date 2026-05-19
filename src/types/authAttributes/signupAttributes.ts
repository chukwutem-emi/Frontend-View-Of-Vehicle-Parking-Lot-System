import type React from "react";
import type { MouseEventHandler, Ref} from "react";



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

export interface SignupPayloadAttributes {
    username        : string;
    password        : string;
    userAddress     : string;
    email           : string;
    phone           : string;
    confirmPassword : string;
};
