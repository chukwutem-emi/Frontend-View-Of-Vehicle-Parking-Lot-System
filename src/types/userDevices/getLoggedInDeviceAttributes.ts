
export type GetLoggedInDeviceAttributes = {
    id          : number,
    userId      : number,
    deviceLabel : string,
    ip          : string,
    userAgent   : string,
    location    : string,
    loginTime   : string
};

export type GetLoggedInDeviceProps = {
    device         : GetLoggedInDeviceAttributes;
    loading        : boolean;
    message        : string;
    errMessage     : boolean;
    handleOnclick  : React.MouseEventHandler<HTMLButtonElement>;
    open           : boolean;
    divOnclick     : React.MouseEventHandler<HTMLDivElement>;
    progress       : number;
    openMessage    : boolean;
};