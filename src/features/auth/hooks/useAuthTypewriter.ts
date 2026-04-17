import { useEffect, useState } from "react";



export const useAuthTypewriter = (fullText: string, speed: number) => {
    
    const[text, setText] = useState("");

    
    useEffect(() => {
        let i = 0;
        let deleting = false;

        const interval = setInterval(() => {
            if (!deleting) {
                setText(fullText.slice(0, i));
                i++;
                if (i > fullText.length) {
                    deleting = true;
                    setTimeout(() => {
                        deleting = false;
                        i = 0;
                    }, 1000);
                }
            } else {
                setText(fullText.slice(0, i));
                i--;
                if (i === 0) {
                    deleting = false;
                }
            }
        }, speed);
        return () => clearInterval(interval);
    }, [fullText, speed]);

    return text;
};