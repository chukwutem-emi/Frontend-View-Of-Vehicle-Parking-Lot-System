import { useState, type JSX } from "react";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import { useSelector } from "react-redux";
import type React from "react";
import type { GetParkingSessionAttributes } from "../../types/parkingSessionAttributes/getParkingSessionAttributes";
import type { GetUserAttributes } from "../../types/authAttributes/getUserAttributes";



type SearchBarProps = {
    sessions           : GetAllParkingSessionsAttributes;
    onSelectSession    : (session: any) => void;
    setSelectedSession : React.Dispatch<React.SetStateAction<GetParkingSessionAttributes | null>>;
};

export const SearchBar = ({onSelectSession, sessions, setSelectedSession}: SearchBarProps): JSX.Element => {

    const[query, setQuery] = useState("");
    const[show, setShow]  = useState(false);

    const user: GetUserAttributes = useSelector((store: any) => store.userDetails?.getUserDetails);
    
    const filtered = sessions?.filter((session) => session.vehicleNumber.toLowerCase().includes(query.toLowerCase().trim()));

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mb-6">
            <h2 className="text-lg Md:text-2xl font-bold text-white">Parking Session Dashboard</h2>
            <div className="relative w-[30rem] flex space-y-4">
                <label htmlFor="session-search" className="sr-only">Search session</label>
                <input
                    id="session-search"
                    name="sessionSearch"
                    value={query} 
                    onChange={(e) => {
                        setShow(true);
                        setQuery(e.target.value);
                        setSelectedSession(null);
                    }}
                    className={`px-4 py-2 rounded-lg outline-none w-64 text-xs md:text-sm ${user?.userRole !== "SUPER-ADMIN" ? "cursor-not-allowed" : "cursor-default"}`}
                    placeholder="Search for sessions to get their full details.."
                    disabled={user?.userRole !== "SUPER-ADMIN"}
                    title="Only super-admin user can search for all parking sessions."
                />
                {
                    show && query && (
                        <ul className="absolute top-full w-full bg-white text-black rounded mt-1 shadow-lg z-50 font-sans font-semibold">
                            {
                                filtered.length > 0 ? (
                                    filtered.map((session) => (
                                        <li 
                                        key={session.id}
                                        onClick={() => {
                                            setQuery(session.vehicleNumber);
                                            onSelectSession(session);
                                            setShow(false);
                                        }}
                                        className="px-4 py-2 hover:bg-blue-500/20 cursor-pointer text-xs md:text-sm"
                                        >
                                            {session.vehicleNumber}
                                        </li>
                                    ))
                                ) : (
                                    <p className="px-4 py-2 text-gray-500">There is no parking session with the provided vehicle number!</p>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    );
};