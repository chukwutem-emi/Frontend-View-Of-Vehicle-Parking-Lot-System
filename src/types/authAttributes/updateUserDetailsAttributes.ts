import type { MouseEventHandler, Ref } from "react";
import type React from "react";

export interface UpdateUserDetailsPayloadAttributes {
    username        : string;
    password        : string;
    userAddress     : string;
    email           : string;
    phone           : string;
    confirmPassword : string;
};
export interface UpdateUserDetailsFormAttributes {
    username?        : Ref<HTMLInputElement>;
    password?        : Ref<HTMLInputElement>;
    userAddress?     : Ref<HTMLInputElement>;
    email?           : Ref<HTMLInputElement>;
    phone?           : Ref<HTMLInputElement>;
    confirmPassword? : Ref<HTMLInputElement>;
    handleSubmitForm : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    loading          : boolean;
    handleDivCancel  : MouseEventHandler<HTMLDivElement>;
    handleConfirm    : MouseEventHandler<HTMLButtonElement>;
    handleCancel     : MouseEventHandler<HTMLButtonElement>;
    handleDivClick   : MouseEventHandler<HTMLDivElement>;
    handleOnclick    : MouseEventHandler<HTMLButtonElement>;
    open             : boolean;
    errMessage       : boolean;
    progress         : number;
    isOpen           : boolean;
    message          : string;
    openMessage      : boolean;
};