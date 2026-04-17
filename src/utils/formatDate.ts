

export const convertUTCToLocalDateTime = (utcDate: string | Date, timeZone?: "Africa/Lagos") => {
    return new Date(utcDate).toLocaleString("en-us", {timeZone: timeZone, hour12: true});
};