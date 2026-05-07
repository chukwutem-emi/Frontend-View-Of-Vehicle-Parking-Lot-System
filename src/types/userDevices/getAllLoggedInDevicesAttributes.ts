import type React from "react";


export type GetAllLoggedInDevicesAttributes = {
    id          : number,
    userId      : number,
    deviceLabel : string,
    ip          : string,
    userAgent   : string,
    location    : string,
    loginTime   : string
}[];

export type GetAllLoggedInDevicesProps = {
    devices             : GetAllLoggedInDevicesAttributes;
    message             : string;
    errMessage          : boolean;
    handleOnclick       : React.MouseEventHandler<HTMLButtonElement>;
    open                : boolean;
    divOnclick          : React.MouseEventHandler<HTMLDivElement>;
    progress            : number;
    openMessage         : boolean;
    isSideBarOpen       : boolean;
    setIsSideBarOpen    : React.Dispatch<React.SetStateAction<boolean>>;
    filteredDevices     : GetAllLoggedInDevicesAttributes;
    setFilteredDevices  : React.Dispatch<React.SetStateAction<GetAllLoggedInDevicesAttributes>>;
};
