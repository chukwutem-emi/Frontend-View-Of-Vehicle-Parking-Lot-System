import type { ReactNode } from "react";
import { useSessionTimer } from "./useSessionTimer";
import type { GetParkingSessionAttributes } from "../../types/parkingSessionAttributes/getParkingSessionAttributes";
import { formatTime } from "../../utils/formatTime";


type SessionTimerPropsAttribute = {
    session : GetParkingSessionAttributes;
};

export const SessionTimer = ({session}: SessionTimerPropsAttribute): ReactNode => {
    const {elapsed} = useSessionTimer(session.entryTime, session.exitTime)
    return (
        <span className="font-bold font-sans">{formatTime(elapsed)}</span>
    );
};