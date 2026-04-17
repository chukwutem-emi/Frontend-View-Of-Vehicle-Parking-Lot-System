import { LogOut } from "lucide-react";
import { useState, type JSX } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



export const SideBar = (): JSX.Element => {
    const[active, setActive] = useState("ParkingSessionDashboard");

    const userDetails = useSelector((store: any) => store.userDetails?.getUserDetails);
    const superAmin =  userDetails?.userRole ?? "";

    const menu = [
        {
            title          : "ParkingSessionDashboard",
            link           : "/app/parking-session-dashboard"
        },
        {
            title          : "VehicleExitTime",
            link           : "/app/vehicle-exit"
        },
        {
            title          : "GetAllParkingSessions",
            link           : "/app/get-sessions",
            superAdminOnly : true
        },
        {
            title          : "Logout",
            link           : "/app/logout"
        },
    ];

    return (
        <aside className="w-[16rem] flex flex-col bg-[#2F0E2F] p-4 overflow-y-auto text-white shadow-2xl h-screen">
            <h1 className="text-lg font-bold mb-6">🚗🚛🚔ParkingSessions</h1>
            <ul className="space-y-6">
                {
                    menu.filter((item) => !item.superAdminOnly || superAmin === "SUPER-ADMIN").map((item) => (
                        <li key={item.title} className={`p-3 rounded-lg cursor-pointer transition ${active === item.title ? "bg-blue-600" : "hover:bg-blue-600/20"}`} onClick={() => setActive(item.title)}>
                            {
                                item.title === "Logout" ? (
                                    <div className="flex flex-row items-center gap-1">
                                        <LogOut size={20} color="yellow" />
                                        <Link to={item.link} className="hover:underline">
                                            {item.title}
                                        </Link>
                                    </div>
                                ) : (
                                    <Link to={item.link} className="hover:underline">
                                        {item.title}
                                    </Link>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
};