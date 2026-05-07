import type { Ref, MouseEventHandler } from "react";

export type UpdatePasswordAttributes = {
    confirmPassword : string;
    password        : string;
};

export type UpdatePasswordPropsAttributes = {
    confirmPassword             : Ref<HTMLInputElement>;
    password                    : Ref<HTMLInputElement>;
    handleDivCancel             : MouseEventHandler<HTMLDivElement>;
    handleConfirm               : MouseEventHandler<HTMLButtonElement>;
    handleCancel                : MouseEventHandler<HTMLButtonElement>;
    handleDivClick              : MouseEventHandler<HTMLDivElement>;
    handleOnclick               : MouseEventHandler<HTMLButtonElement>;
    handleUpdatePasswordForm    : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    open                        : boolean;
    errMessage                  : boolean;
    progress                    : number;
    isOpen                      : boolean;
    message                     : string;
    openMessage                 : boolean;
    loading                     : boolean;

};