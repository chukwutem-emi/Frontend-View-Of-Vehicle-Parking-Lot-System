

export const convertUTCToLocalDateTime = (utcDate: string | Date | null | undefined, timeZone?: "Africa/Lagos") => {
    if (!utcDate) return "-";

    const date = new Date(utcDate);
    if (isNaN(date.getTime())) return "Invalid date"
    return date.toLocaleString("en-us", {timeZone: timeZone, hour12: true});
};