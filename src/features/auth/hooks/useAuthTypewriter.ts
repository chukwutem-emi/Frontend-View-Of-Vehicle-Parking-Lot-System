import { useEffect, useState } from "react";



export const useAuthTypewriter = (fullText: string, speed: number, pauseTime: number) => {
    
    const[index, setIndex] = useState(0);
    
    useEffect(() => {
        
        let timeOut: ReturnType<typeof setTimeout>;

        if (index < fullText.length) {
            timeOut = setTimeout(() => {
                setIndex((prev) => prev + 1);
            }, speed);
        } else {
            timeOut = setTimeout(() => {
                setIndex(0);
            }, pauseTime);
        }
        return () => clearTimeout(timeOut);
        
    }, [fullText, speed, pauseTime, index]);

    return fullText.slice(0, index);
};