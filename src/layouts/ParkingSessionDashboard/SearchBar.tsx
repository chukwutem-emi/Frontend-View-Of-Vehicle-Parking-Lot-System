import { useState, type ReactNode } from "react";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import type React from "react";
import type { GetUserAttributes } from "../../types/authAttributes/getUserAttributes";
import { useAppSelector } from "../../utils/useAppSelector";
import { Link } from "react-router-dom";



type SearchBarProps = {
    sessions            : GetAllParkingSessionsAttributes;
    setFilteredSessions : React.Dispatch<React.SetStateAction<GetAllParkingSessionsAttributes>>;
};

export const SearchBar = ({sessions, setFilteredSessions}: SearchBarProps): ReactNode => {

    const[query, setQuery]                 = useState("");
    const[show, setShow]                   = useState(false);
    const[localFiltered, setLocalFiltered] = useState<GetAllParkingSessionsAttributes>([]);

    const user: GetUserAttributes | null = useAppSelector((state) => state.user.details);

    const handlerSessionInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setShow(true);

        const filtered = sessions?.filter((session) => session.vehicleNumber.toLowerCase().includes(value.toLowerCase().trim()));

        setFilteredSessions(filtered);
        setLocalFiltered(filtered);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 mb-6">
            <h2 className="text-lg Md:text-2xl font-bold text-white">Dashboard</h2>
            <Link to={"/app/create-session"} className="text-lg Md:text-2xl font-bold text-white hover:underline hidden md:block">Create session</Link>
            <Link to={"/app/vehicle-exit"} className="text-lg Md:text-2xl font-bold text-white hover:underline hidden md:block">Vehicle Exit</Link>
            <div className="relative w-[30rem] flex space-y-4">
                <label htmlFor="session-search" className="sr-only">Search session</label>
                <input
                    id="session-search"
                    name="session-search"
                    value={query} 
                    onChange={handlerSessionInput}
                    className={`px-4 py-2 rounded-lg outline-none w-[16rem] md:w-[30rem] text-xs md:text-sm ${user?.userRole !== "SUPER-ADMIN" ? "cursor-not-allowed" : "cursor-default"}`}
                    placeholder="Search for sessions to get their full details.."
                    disabled={user?.userRole !== "SUPER-ADMIN"}
                    title="Only super-admin user can search for all parking sessions."
                />
                {
                    show && query && (
                        <ul className="absolute top-full w-full bg-white text-black rounded mt-1 shadow-lg z-50 font-sans font-semibold">
                            {
                                localFiltered.length > 0 ? (
                                    localFiltered.map((session) => (
                                    <Link to={`/parking/session-details/${session.id}`} key={session.id}>
                                        <li 
                                        onClick={() => {
                                            setQuery(session.vehicleNumber);
                                            setShow(false);
                                        }}
                                        className="px-4 py-2 hover:bg-blue-500/20 cursor-pointer text-xs md:text-sm"
                                        >
                                            {session.vehicleNumber}
                                        </li>
                                    </Link>
                                    ))
                                ) : (
                                    <p className="px-4 py-2 text-gray-500">Session not found!</p>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    );
};