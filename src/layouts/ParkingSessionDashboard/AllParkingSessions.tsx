import type { ReactNode } from "react";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import { SessionTimer } from "./SessionTimer";
import { Link } from "react-router-dom";


type AllParkingSessionsProps = {
    filteredSessions : GetAllParkingSessionsAttributes;
};

export const AllParkingSessions = ({filteredSessions}: AllParkingSessionsProps): ReactNode => {
    return (
        <div className="my-[4rem] text-white">
            <h2 className="font-sans text-center mb-10 font-bold text-lg md:xl">🚗🚛🚔Parking Sessions</h2>
            {
                filteredSessions.length > 0 ? (
                    <ul className="grid md:grid-cols-4 grid-col-1 gap-4 items-center justify-items-center">
                        {
                            filteredSessions.map((session) => (
                                <Link to={`/parking/session-details/${session.id}`} key={session.id} className="w-[80%] flex-shrink-0 ">
                                    <li className="font-sans text-sm bg-[#2F0E2F] border border-yellow-800 shadow-2xl z-50 break-words p-6 font-bold">
                                        <p className="text-blue-600">{session?.vehicleNumber}</p>
                                        <p className={`mt-[1rem] ${session?.parkingStatus === "COMPLETED" ? "text-yellow-600" : "text-green-600"}`}>{session?.parkingStatus}</p>
                                        <p className="text-gray-500 mt-[1rem]">{session?.vehicleOwnerPhone}</p>
                                        <SessionTimer session={session} />
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                ) : (
                    <p className="text-center items-center font-sans text-sm md:text-lg">No parking session found!</p>
                )
            }
        </div>
    );
};