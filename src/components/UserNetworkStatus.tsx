import { useEffect, useState } from "react";


export const NetworkStatus = () => {
    const[isOnline, setIsOline] = useState(navigator.onLine);
    const[open, setOpen]        = useState(false);

    useEffect(() => {
        const handleOnline = () => {
            setIsOline(true);
            setOpen(true);
        };
        const handleOffline = () => {
            setIsOline(false);
            setOpen(true);
        };

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);
    
    useEffect(() => {
        if (!open) return;
        
        const timer = setTimeout(() => {
            setOpen(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, [open]);


    if(!open) return null;
    return (
        <div className="w-full fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white w-[70%] xl:w-[30%] p-10 shadow-2xl rounded text-center space-x-6">
                <span className="text-xs md:text-sm">{isOnline ? "🟢" : "🔴"}</span>
                <span className="font-semibold text-xs md:text-sm text-gray-500 font-sans md:font-bold">{isOnline ? "You're back online" : "You're offline"}</span>
            </div>
        </div>
    );
};