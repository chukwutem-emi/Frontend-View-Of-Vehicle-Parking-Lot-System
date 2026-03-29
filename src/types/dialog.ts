import type { MouseEventHandler } from "react";

export interface DialogAttributes {
    isOpen      : boolean;
    title       : string;
    message     : string;
    onConfirm   : MouseEventHandler<HTMLButtonElement>;
    onCancel    : MouseEventHandler<HTMLButtonElement>;
    divOnCancel : MouseEventHandler<HTMLDivElement>
};

export interface ResponseDialogAttributes {
    isOpen        : boolean;
    message       : string;
    onClick       : MouseEventHandler<HTMLButtonElement>;
    divOnClick    : MouseEventHandler<HTMLDivElement>;
    errMessage    : boolean;
};
