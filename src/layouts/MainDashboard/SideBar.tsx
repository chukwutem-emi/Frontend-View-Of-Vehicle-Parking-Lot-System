import { Activity, Car, LogOut, MapPin, Users2Icon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import type { GetUserAttributes } from "../../types/authAttributes/getUserAttributes";
import { useAppSelector } from "../../utils/useAppSelector";



type SideBarPropsAttributes = {
    setActive     : Dispatch<SetStateAction<string>>;
    active        : string;
    isDarkMode    : boolean;
};

export const SideBar = ({setActive, active, isDarkMode}: SideBarPropsAttributes) => {

  const user: GetUserAttributes | null = useAppSelector((state) => state.user.details);

    const menu = [
        {
          title          : "Dashboard",
          link           : "/app/dashboard",
          icon           : null
        },
        {
          title          : "Admin",
          link           : "/app/users-dashboard",
          icon           : Users2Icon,
          adminUsersOnly : true
        },
        {
          title          : "Sessions",
          link           : "/app/parking-session-dashboard",
          adminUsersOnly : true,
          icon           : Activity
        },
        {
          title          : "Slots",
          link           : "/app/parking-slot-dashboard",
          icon           : MapPin,
          adminUsersOnly : true
        },
        {
          title          : "Vehicles",
          link           : "/app/vehicle-type-dashboard",
          icon           : Car,
          adminUsersOnly : true
        },
        {
          title          : "Logout",
          link           : "/app/logout",
          icon           : LogOut
        }
      ];

    return (
        <aside className={`w-64 md:flex h-screen md:flex-col p-5 justify-between ${isDarkMode ? "bg-[#0E1437]" : "bg-white"}`}>
        <div>
          <h1 className="text-lg font-bold mb-6">🚗 ParkingSystem</h1>
          <ul className="space-y-6">
            {menu.filter((item) => !item.adminUsersOnly || user?.isAdmin).map((item) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.title}
                  onClick={() => setActive(item.title)}
                  className={`p-3 rounded-lg cursor-pointer transition ${
                    active === item.title
                      ? "bg-blue-600"
                      : "hover:bg-blue-500/20"
                  }`}
                >
                  <Link to={item.link} className="flex items-center gap-2 hover:underline">
                    {Icon && <Icon size={20} className="text-yellow-500" />}
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </aside>
    );
};