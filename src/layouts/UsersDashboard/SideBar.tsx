import { Activity, Car, HomeIcon, LogOut, MapPin, UserIcon, LaptopIcon, Users2Icon } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../utils/useAppSelector";



export const SideBar = ():ReactNode => {
    const[active, setActive] = useState("UsersDashboard");

    const userDetails = useAppSelector((state) => state.user.details);
    const isAdmin =  userDetails?.isAdmin ?? "";

    const menu = [
        {
            title          : "UsersDashboard",
            link           : "/app/users-dashboard"
        },
        {
            title          : "Home",
            link           : "/app/dashboard",
            icon           : HomeIcon
        },
        {
            title          : "Sessions",
            link           : "/app/parking-session-dashboard",
            icon           : Activity,
            adminUsersOnly : true,
        },
        {
            title          : "Vehicles",
            link           : "/app/vehicle-type-dashboard",
            icon           : Car,
            adminUsersOnly : true,
        },
        {
            title          : "Slots",
            link           : "/app/parking-slot-dashboard",
            icon           : MapPin,
            adminUsersOnly : true,
        },
        {
            title          : "GetAllUsers",
            link           : "/app/users",
            adminUsersOnly : true,
            icon           : Users2Icon
        },
        {
            title          : "UserProfile",
            link           : "/auth/current-user",
            icon           : UserIcon
        },
        {
            title          : "UsersDevices",
            link           : "/app/user-device-dashboard",
            icon           : LaptopIcon,
            adminUsersOnly : true,
        },
        {
            title          : "Logout",
            link           : "/app/logout",
            icon           : LogOut
        }
    ];
    return (
        <aside className="w-[16rem] flex flex-col bg-[#0E2A22] p-4 overflow-y-auto text-white shadow-2xl h-screen z-50">
            <h1 className="text-lg font-bold mb-6">👥 Users</h1>
            <ul className="space-y-6">
                {
                    menu.filter((item) => !item.adminUsersOnly || isAdmin).map((item) => {
                        const Icon = item.icon;
                        return (
                            <li key={item.title} className={`p-3 rounded-lg cursor-pointer transition ${active === item.title ? "bg-blue-600" : "hover:bg-blue-500/20"}`} onClick={() => setActive(item.title)}>
                                <Link to={item.link} className="flex items-center gap-2 hover:underline">
                                    {Icon && <Icon size={20} className="text-yellow-500"/>}
                                    {item.title}
                                </Link>
                            </li>
                        );
                    })
                }
            </ul>
        </aside>
    );
};