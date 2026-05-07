import type React from "react";
import type { MouseEventHandler, Ref } from "react";

export type ResetPasswordAttribute = {
    email : string;
};

export type ResetPasswordPropsAttributes = {
    email                       : Ref<HTMLInputElement>;
    handleDivCancel             : MouseEventHandler<HTMLDivElement>;
    handleConfirm               : MouseEventHandler<HTMLButtonElement>;
    handleCancel                : MouseEventHandler<HTMLButtonElement>;
    handleDivClick              : MouseEventHandler<HTMLDivElement>;
    handleOnclick               : MouseEventHandler<HTMLButtonElement>;
    handleResetPasswordForm     : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    open                        : boolean;
    errMessage                  : boolean;
    progress                    : number;
    isOpen                      : boolean;
    message                     : string;
    openMessage                 : boolean;
    loading                     : boolean;
};