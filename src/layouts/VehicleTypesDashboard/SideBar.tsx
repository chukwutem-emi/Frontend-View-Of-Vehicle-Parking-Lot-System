import { LogOut } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";



export const SideBar = (): ReactNode => {
    const[active, setActive] = useState("Vehicle Type Dashboard");

    const menu = [
        {
            title          : "Vehicle Type Dashboard",
            link           : "/app/vehicle-type-dashboard"
        },
        {
            title          : "Create vehicle type",
            link           : "/app/create-vehicle-type"
        },
        {
            title          : "Logout",
            link           : "/app/logout",
        }
    ];

    return (
        <aside className="w-[16rem] flex flex-col bg-green-950 p-4 overflow-y-auto text-white shadow-2xl h-screen z-50">
            <h1 className="text-lg font-bold mb-6">🚗🚛🚔 Vehicle Types</h1>
            <ul className="space-y-6">
                {
                    menu.map((item) => (
                        <li 
                        key={item.title}
                        onClick={() => setActive(item.title)}
                        className={`p-3 rounded-lg cursor-pointer transition ${active === item.title ? "bg-green-600" : "hover:bg-green-600/20"}`}
                        >
                            {
                                item.title === "Logout" ? (
                                    <div className="flex flex-row items-center gap-1">
                                        <LogOut size={20} color="yellow" />
                                        <Link to={item.link} className="hover:underline">{item.title}</Link>
                                    </div>
                                ) : (
                                    <Link to={item.link} className="hover:underline">{item.title}</Link>
                                )
                            }
                        </li>
                    ))
                }
            </ul>
        </aside>
    );
};