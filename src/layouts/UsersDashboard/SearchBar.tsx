import React, { useState, type ReactNode, type SetStateAction } from "react";
import type { GetAllUsersAttributes } from "../../types/authAttributes/getAllUsersAttributes";
import type { GetUserAttributes} from "../../types/authAttributes/getUserAttributes";
import { useAppSelector } from "../../utils/useAppSelector";
import { Link } from "react-router-dom";


type SearchBarProps = {
    users            : GetAllUsersAttributes;
    setFilteredUsers : React.Dispatch<SetStateAction<GetAllUsersAttributes>>;
};



export const SearchBar = ({users, setFilteredUsers}: SearchBarProps): ReactNode => {
    const[query, setQuery]                           = useState("");
    const[show, setShow]                             = useState(false);
    const[localFilteredUsers, setLocalFilteredUsers] = useState<GetAllUsersAttributes>([]);

    const user: GetUserAttributes | null = useAppSelector((state) => state.user.details);


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setShow(true);

        const filtered = users?.filter((user) => user.username.toLowerCase().includes(query.toLowerCase().trim()));
    
        setFilteredUsers(filtered);
        setLocalFilteredUsers(filtered);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-4 mb-6">
            <h1 className="text-lg Md:text-2xl font-bold text-white">UsersDashboard</h1>
            <Link to={"/app/user-device-dashboard"} className="text-lg Md:text-2xl font-bold text-white hover:underline hidden md:block">LoggedIn Devices</Link>
            <div className="relative w-[30rem] flex space-y-4">
                <label htmlFor="user-search" className="sr-only">Search user</label>
                <input
                id="user-search"
                name="user-search"
                value={query}
                onChange={handleInputChange} 
                className={`px-4 py-2 rounded-lg outline-none w-[16rem] md:w-[30rem] text-xs md:text-sm ${user?.userRole !== "SUPER-ADMIN" ? "cursor-not-allowed" : "cursor-default"}`}
                placeholder="Search for users to get their full details.."
                disabled={user?.userRole !== "SUPER-ADMIN"}
                title="Only super admin user can search for other users."
                />
                {
                    show && query && (
                        <ul className="absolute top-full w-full bg-white text-black rounded mt-1 shadow-lg z-50 font-sans font-semibold">
                            {
                                localFilteredUsers.length > 0 ? (
                                    localFilteredUsers.map((user) => (
                                        <li 
                                        key={user.id}
                                        onClick={() => {
                                            setQuery(user.username);
                                            setShow(false);
                                        }}
                                        className="px-4 py-2 hover:bg-blue-500/20 cursor-pointer text-xs md:text-sm hover:underline"
                                        >
                                            {user.username}
                                        </li>
                                    ))
                                ) : (
                                    <p className="px-4 py-2 text-gray-500">User not found!</p>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    );
};