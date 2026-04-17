import { NavLink } from "react-router-dom";
import {LogOut} from "lucide-react";
import type { JSX } from "react";

type CheckActive = {
    isActive : boolean;
};

const Header = (): JSX.Element => {

    const linkClass = ({isActive}: CheckActive) => isActive ? "text-yellow-500 font-bold border-b-4 border-yellow-500" : "text-gray-300 hover:text-yellow-300"

    return (
        <header className="top-0 right-0 left-0 fixed justify-between shadow-lg z-50 flex  flex-row flex-nowrap py-4 px-2 md:py-6 bg-[#406080]  md:flex-row md:mx-0 w-full text-gray-300 font-semibold font-sans text-xs md:text-lg">
            <NavLink className={linkClass} to={"/app/dashboard"}>Main-Dashboard</NavLink> 
            <NavLink className={linkClass} to={"/app/users-dashboard"}>Users-Dashboard</NavLink>
            <NavLink className={linkClass} to={"/app/parking-session-dashboard"}>Sessions-Dashboard</NavLink>
            <div className="flex flex-row items-center gap-1 md:gap-1">
                <LogOut size={20} color="yellow" />
                <NavLink className={linkClass} to={"/app/logout"}>Logout</NavLink>  
            </div>
        </header>
    );
};
export default Header;