import { NavLink, useLocation } from "react-router-dom";
import { type JSX } from "react";
import {HomeIcon, Users2Icon, Activity, Car, MapPin, LogOut} from "lucide-react"

type CheckActive = {
    isActive : boolean;
};

const Header = (): JSX.Element => {

    const location = useLocation();

    const linkClass = ({isActive}: CheckActive) => isActive ? "text-yellow-500 font-bold border-b-4 border-yellow-500" : "text-gray-300 hover:text-yellow-300"

    const navigationRouteColor: Record<string, string> = {
        "/app/dashboard"                 : "bg-[#0E1437]",
        "/app/users-dashboard"           : "bg-[#0E2A22]",
        "/app/parking-session-dashboard" : "bg-[#2F0E2F]",
        "/app/vehicle-type-dashboard"    : "bg-green-950",
        // "/app/logout"                    : "bg-[#406080]",
        "/app/parking-slot-dashboard"    : "bg-[#020617]",
        "/app/user-device-dashboard"     : "bg-violet-950"
    };

    const currentBackgroundColor = navigationRouteColor[location.pathname] ?? "bg-[#406080]"

    return (
        <div className="hidden md:block">
            <header className={`top-0 right-0 left-0 fixed justify-between shadow-lg z-50 flex  flex-row flex-nowrap px-2 py-6 md:flex-row mx-0 w-full text-gray-300 font-semibold font-sans text-lg  ${currentBackgroundColor}`}>
                <NavLink className={linkClass} to={"/app/dashboard"}>
                    <div className="flex flex-row items-center gap-1 md:gap-1">
                        <HomeIcon size={20} className="inline mr-1 text-yellow-500" />
                        Home
                    </div>
                </NavLink>
                <NavLink className={linkClass} to={"/app/users-dashboard"}>
                    <div className="flex flex-row items-center gap-1 md:gap-1">
                        <Users2Icon size={20} className="inline mr-1 text-yellow-500" />
                        Admin
                    </div>
                </NavLink>
                <NavLink className={linkClass} to={"/app/parking-session-dashboard"}>
                    <div className="flex flex-row items-center gap-1 md:gap-1">
                        <Activity size={20} className="inline mr-1 text-yellow-500" />
                        Sessions
                    </div>
                </NavLink>
                <NavLink className={linkClass} to={"/app/vehicle-type-dashboard"}>
                    <div className="flex flex-row items-center gap-1 md:gap-1">
                        <Car size={20} className="inline mr-1 text-yellow-500" />
                        Vehicles
                    </div>
                </NavLink>
                <NavLink className={linkClass} to={"/app/parking-slot-dashboard"}>
                    <div className="flex flex-row items-center gap-1 md:gap-1">
                        <MapPin size={20} className="inline mr-1 text-yellow-500" />
                        Slots
                    </div>
                </NavLink>
                <NavLink className={linkClass} to={"/app/logout"}>
                    <div className="flex flex-row items-center gap-1 md:gap-1">
                        <LogOut size={20} className="inline mr-1 text-yellow-500" />
                        Logout
                    </div>
                </NavLink>
            </header>
        </div>
    );
};
export default Header;