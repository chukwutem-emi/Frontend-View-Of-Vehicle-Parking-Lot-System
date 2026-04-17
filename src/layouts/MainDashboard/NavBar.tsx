import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Role = {
  role            : any;
  isDarkMode      : boolean;
  firstTwoLetters : any;
};
export const NavBar = ({role, isDarkMode, firstTwoLetters}: Role) => {
    const[query, setQuery] = useState("");
    const[show, setShow]   = useState(false);

    useEffect(() => {
      const handleClick = () => setShow(false);
      window.addEventListener("click", handleClick);
      return () => window.removeEventListener("click", handleClick);
    }, []);
    const data = [
      {
        title : "Parking Session",
        link  : "/"
      },
      {
        title: "Parking Slot",
         link  : "/"
      },
      {
        title: "GetAllUsers",
         link  : "/users"
      },
      {
        title: "Vehicle types",
         link  : "/"
      },
      {
        title: "GetUser",
         link  : "/user"
      },
      {
        title: "Login",
         link  : "/"
      },
    ];
    const filtered = data.filter((item) => item.title.toLowerCase().includes(query.toLowerCase().trim()));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mb-6">
          <h1 className="text-lg Md:text-2xl font-bold">Dashboard</h1>
          <div className="flex flex-row gap-4">
            <p className="font-sans rounded-full px-2 py-1 bg-yellow-600 font-semibold md:font-bold text-sm md:text-lg">{firstTwoLetters}</p>
            <span className={`text-sm md:text-lg ${(role === "SUPER-ADMIN" || role === "ADMIN") ? "text-green-600" : "text-yellow-600" }`}>{role}</span>
          </div>
          <div className="relative w-[30rem]">
            <label htmlFor="navigation" className="sr-only">Navigation</label>
            <input
              id="navigation"
              name="navigation"
              placeholder="Search..."
              type="text"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setShow(true);
              }}
              className={`px-4 py-2 rounded-lg outline-none w-64 text-xs md:text-sm ${isDarkMode ? "bg-[#111744]": "bg-gray-200"}`}
            />
            {
              show && query && (
                <div className="absolute top-full w-full bg-white text-black rounded mt-1 shadow-lg z-50 font-sans font-semibold">
                  {
                    filtered.length > 0 ? (
                      filtered.map((item) => (
                        <div
                          key={item.title}
                          onClick={() => {
                            setShow(false);
                          }}
                         className="px-4 py-2 text-xs md:text-sm hover:bg-blue-500/20 cursor-pointer">
                          <Link to={item.link} className="hover:underline">
                            {item.title}
                          </Link>
                        </div>
                      ))
                    ) : (
                      <div className="px-4 py-2 text-gray-500">
                        No results found
                      </div>
                    )
                  }
                </div>
              )
            }
          </div>
        </div>
    );
};