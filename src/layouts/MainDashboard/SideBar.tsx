import { LogOut } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";
import { Link } from "react-router-dom";
import type { GetUserAttributes } from "../../types/authAttributes/getUserAttributes";
import { useSelector } from "react-redux";



type SideBarPropsAttributes = {
    setActive     : Dispatch<SetStateAction<string>>;
    active        : string;
    setIsDarkMode : Dispatch<SetStateAction<boolean>>;
    isDarkMode    : boolean;
};

export const SideBar = ({setActive, active, setIsDarkMode, isDarkMode}: SideBarPropsAttributes) => {

  const user: GetUserAttributes = useSelector((store: any) => store.userDetails?.getUserDetails);

    const menu = [
        {
          title          : "Dashboard",
          link           : "/app/dashboard"
        },
        {
          title          : "Users",
          link           : "/app/users-dashboard"
        },
        {
          title          : "Parking Sessions",
          link           : "/app/parking-session-dashboard",
          superAdminOnly : true
        },
        {
          title          : "Parking Slot",
          link           : ""
        },
        {
          title          : "Vehicle Types",
          link           : ""
        },
        {
          title          : "Logout",
          link           : "/app/logout"
        }
      ];

    return (
        <aside className={`w-64 md:flex md:flex-col p-5 justify-between ${isDarkMode ? "bg-[#0E1437]" : "bg-white"}`}>
        <div>
          <h1 className="text-lg font-bold mb-6">🚗 ParkingSystem</h1>
          <ul className="space-y-6">
            {menu.filter((item) => !item.superAdminOnly || user.userRole === "SUPER-ADMIN").map((item) => (
              <li
                key={item.title}
                onClick={() => setActive(item.title)}
                className={`p-3 rounded-lg cursor-pointer transition ${
                  active === item.title
                    ? "bg-blue-600"
                    : "hover:bg-blue-500/20"
                }`}
              >
                {
                  item.title === "Logout" ?  (
                    <div className="flex flex-row items-center gap-1">
                      <LogOut size={20} color="yellow"/>
                      <Link to={item.link} className="hover:underline">{item.title}</Link>
                    </div>
                  ) : (
                    <Link to={item.link} className="hover:underline">{item.title}</Link>
                  ) 
                }
              </li>
            ))}
          </ul>
        </div>
        <button className="bg-gray-700 p-2 rounded-lg my-6 text-white" onClick={() => setIsDarkMode(!isDarkMode)}>
          {
            isDarkMode ?  "Dark Mode" : "Light Mode"
          }
        </button>
      </aside>
    );
};