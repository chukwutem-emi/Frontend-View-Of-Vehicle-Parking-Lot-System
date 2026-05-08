import { Activity, Car, HomeIcon, LogOut, Users2Icon} from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../utils/useAppSelector";



export const SideBar = (): ReactNode => {
    const[active, setActive] = useState("ParkingSessionDashboard");

    const userDetails = useAppSelector((state) => state.user.details);
    const isAdmin =  userDetails?.isAdmin ?? "";

    const menu = [
        {
            title          : "ParkingSessionDashboard",
            link           : "/app/parking-session-dashboard",
            icon           : null
        },
        {
            title          : "Home",
            link           : "/app/dashboard",
            icon           : HomeIcon
        },
        {
            title          : "VehicleExitTime",
            link           : "/app/vehicle-exit",
            adminUsersOnly : true,
            icon           : Car
        },
        {
            title          : "Users",
            link           : "/app/users-dashboard",
            adminUsersOnly : true,
            icon           : Users2Icon
        },
        {
            title          : "Vehicle",
            link           : "/app/vehicle-type-dashboard",
            adminUsersOnly : true,
            icon           : Car
        },
        {
            title          : "CreateParkingSession",
            link           : "/app/create-session",
            adminUsersOnly : true,
            icon           : Activity
        },
        {
            title          : "Pagination",
            link           : "/parking/get-sessions",
            adminUsersOnly : true,
            icon           : Activity
        },
        {
            title          : "Logout",
            link           : "/app/logout",
            icon           : LogOut
        },
    ];

    return (
        <aside className="w-[16rem] flex flex-col bg-[#2F0E2F] p-4 overflow-y-auto text-white shadow-2xl h-screen">
            <h1 className="text-lg font-bold mb-6">🚗🚛🚔ParkingSessions</h1>
            <ul className="space-y-6">
                {
                    menu.filter((item) => !item.adminUsersOnly || isAdmin).map((item) => {
                        const Icon = item.icon;
                        return (
                            <li
                                key={item.title}
                                onClick={() => setActive(item.title)}
                                className={`p-3 rounded-lg cursor-pointer transition ${active === item.title ? "bg-blue-600" : "hover:bg-blue-500/20"}`}
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