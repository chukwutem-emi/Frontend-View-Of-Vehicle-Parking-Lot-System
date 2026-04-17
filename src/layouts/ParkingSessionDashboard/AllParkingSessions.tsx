import type { JSX } from "react";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";


type AllParkingSessionsProps = {
    sessions: GetAllParkingSessionsAttributes;
};

export const AllParkingSessions = ({sessions}: AllParkingSessionsProps): JSX.Element => {
    return (
        <div className="my-[4rem] text-white">
            <h2 className="font-sans text-center mb-10 font-bold text-lg md:xl">🚗🚛🚔Parking Sessions</h2>
            {
                sessions.length > 0 ? (
                    <ul className="w-[2000px] flex gap-3 animate-scroll whitespace-nowrap">
                        {
                            [...sessions, ...sessions].map((session, index) => (
                                <li key={`${session.id}-${index}`} className="w-64 flex-shrink-0 font-sans text-sm bg-gradient-to-r from-[#1F0E1F] to-[#2F0E2F] z-50 break-words p-6">
                                    <p className="text-blue-600">{session?.vehicleNumber}</p>
                                    <p className={`mt-[1rem] ${session?.parkingStatus === "COMPLETED" ? "text-red-600 animate-pulse" : "text-green-600"}`}>{session?.parkingStatus}</p>
                                    <p className="text-gray-500 mt-[1rem]">{session?.vehicleOwnerPhone}</p>
                                </li>
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