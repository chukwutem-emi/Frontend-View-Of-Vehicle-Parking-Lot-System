import { Activity, HomeIcon, LogOut, MapPin, Users2Icon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../utils/useAppSelector";



export const SideBar = (): ReactNode => {
    const[active, setActive] = useState("Vehicle Type Dashboard");

    const userDetails = useAppSelector((state) => state.user.details);
    const isAdmin =  userDetails?.isAdmin ?? "";

    const menu = [
        {
            title          : "Vehicle Type Dashboard",
            link           : "/app/vehicle-type-dashboard",
            icon           : null
        },
        {
            title          : "Home",
            link           : "/app/dashboard",
            icon           : HomeIcon
        },
        {
            title           : "Sessions",
            link            : "/app/parking-session-dashboard",
            icon            : Activity,
            adminUsersOnly  : true
        },
        {
          title             : "Slots",
          link              : "/app/parking-slot-dashboard",
          icon              : MapPin,
          adminUsersOnly    : true
        },
        {
            title          : "Admin",
            link           : "/app/users-dashboard",
            adminUsersOnly : true,
            icon           : Users2Icon
        },
        {
            title          : "Create vehicle type",
            link           : "/app/create-vehicle-type",
            adminUsersOnly : true,
            icon           : Activity
        },
        {
            title          : "Logout",
            link           : "/app/logout",
            icon           : LogOut
        }
    ];

    return (
        <aside className="w-[16rem] flex flex-col bg-green-950 p-4 overflow-y-auto text-white shadow-2xl h-screen z-50">
            <h1 className="text-lg font-bold mb-6">🚗🚛🚔 Vehicle Types</h1>
            <ul className="space-y-6">
                {
                    menu.filter((item) => !item.adminUsersOnly || isAdmin).map((item) => {
                        const Icon = item.icon;
                        return (
                            <li 
                            key={item.title}
                            onClick={() => setActive(item.title)}
                            className={`p-3 rounded-lg cursor-pointer transition ${active === item.title ? "bg-green-600" : "hover:bg-green-600/20"}`}
                            >
                                <Link to={item.link} className="flex items-center gap-2 hover:underline">
                                    {Icon && <Icon size={20} className="text-yellow-500" />}
                                    {item.title}
                                </Link>
                            </li>

                        )
                    })
                }
            </ul>
        </aside>
    );
};