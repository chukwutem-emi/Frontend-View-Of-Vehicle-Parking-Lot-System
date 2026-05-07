import { useEffect, useState } from "react";

type FunctionReturnValue = {
    elapsed : number;
};
export const useSessionTimer = (entryTime: Date, exitTime?: Date): FunctionReturnValue => {

    const[elapsed, setElapsed] = useState(0);

    useEffect(() => {
        const start = new Date(entryTime).getTime();

        const interval = setInterval(() => {
            const now = exitTime ? new Date(exitTime).getTime() : Date.now();
            setElapsed(now - start);
        }, 1000);
        return () => clearInterval(interval);

    }, [entryTime, exitTime]);
    return {elapsed};
};