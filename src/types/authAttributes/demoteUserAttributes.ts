import type { MouseEventHandler } from "react";

export interface DemoteUserAttributes {
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