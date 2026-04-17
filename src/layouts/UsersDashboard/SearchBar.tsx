import React, { useState, type JSX, type SetStateAction } from "react";
import type { GetAllUsersAttributes } from "../../types/authAttributes/getAllUsersAttributes";
import type { GetUserAttributes, GetUserAttributesWithUnderScore } from "../../types/authAttributes/getUserAttributes";
import { useSelector } from "react-redux";


type SearchBarProps = {
    users        : GetAllUsersAttributes;
    onSelectUser : (user: any) => void;
    setSelectedUser : React.Dispatch<SetStateAction<GetUserAttributesWithUnderScore | null>>;
};



export const SearchBar = ({users, onSelectUser, setSelectedUser}: SearchBarProps): JSX.Element => {
    const[query, setQuery] = useState("");
    const[show, setShow]   = useState(false);

    const user: GetUserAttributes = useSelector((store: any) => store.userDetails?.getUserDetails);



    const filtered = users?.filter((user) => user.username.toLowerCase().includes(query.toLowerCase().trim()));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mb-6">
            <h1 className="text-lg Md:text-2xl font-bold text-white">UsersDashboard</h1>
            <div className="relative w-[30rem] flex space-y-4">
                <label htmlFor="user-search" className="sr-only">Search user</label>
                <input
                id="user-search"
                name="searchUser"
                value={query}
                onChange={(e) => {
                    setShow(true);
                    setQuery(e.target.value);
                    setSelectedUser(null);
                }} 
                className={`px-4 py-2 rounded-lg outline-none w-64 text-xs md:text-sm ${user?.userRole !== "SUPER-ADMIN" ? "cursor-not-allowed" : "cursor-default"}`}
                placeholder="Search for users to get their full details.."
                disabled={user?.userRole !== "SUPER-ADMIN"}
                title="Only super admin user can search for other users."
                />
                {
                    show && query && (
                        <ul className="absolute top-full w-full bg-white text-black rounded mt-1 shadow-lg z-50 font-sans font-semibold">
                            {
                                filtered.length > 0 ? (
                                    filtered.map((user) => (
                                        <li 
                                        key={user.id}
                                        onClick={() => {
                                            setQuery(user.username);
                                            onSelectUser(user);
                                            setShow(false);
                                        }}
                                        className="px-4 py-2 hover:bg-blue-500/20 cursor-pointer text-xs md:text-sm"
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