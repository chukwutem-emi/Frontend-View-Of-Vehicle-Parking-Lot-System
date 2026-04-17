import type { JSX } from "react";
import type {GetAllParkingSessionsProps} from "../../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import { convertUTCToLocalDateTime } from "../../../utils/formatDate";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import {ParkingSessionPagination} from "./Pagination";
import { Link } from "react-router-dom";




export const GetAllParkingSessions = ({errMessage, handleDivOnclick, handleOnclick, message, open, openMessage, pagination, progress, sessions, setPagination}: GetAllParkingSessionsProps): JSX.Element => {

    return (
        <div className="bg-white w-full mx-auto p-10">
            <div className="overflow-x-auto">
                <table className="min-w-max border mt-4 text-left">
                    <thead className="text-green-600 font-sans">
                        <tr className="border-b border-gray-700">
                            <th className="py-2 px-4 text-xs md:text-sm">ID</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Vehicle owner next of kin address</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Vehicle owner next of kin phone</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Vehicle owner next of kin</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Vehicle owner address</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Vehicle owner phone</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Vehicle number</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Parking status</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Created on</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Last updated</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Check details</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-sans">
                        {
                            sessions?.map((session) => (
                                <tr key={session?.id} className="border-b border-gray-700">
                                    <td className="p-4 text-xs md:text-sm break-words text-yellow-800">{session?.id}</td>
                                    <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerNextOfKinAddress}</td>
                                    <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerNextOfKinPhone}</td>
                                    <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerNextOfKin}</td>
                                    <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerAddress}</td>
                                    <td className="p-4 text-xs md:text-sm break-words">{session.vehicleOwnerPhone}</td>
                                    <td className="p-4 text-xs md:text-sm break-words text-blue-700 font-semibold">{session?.vehicleNumber}</td>
                                    <td className={`p-4 text-xs md:text-sm break-words font-semibold ${session?.parkingStatus === "ACTIVE" ? "text-green-600" : "text-red-600"}`}>{session?.parkingStatus}</td>
                                    <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(session?.createdAt)}</td>
                                    <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(session?.updatedAt)}</td>
                                    <td className="p-4 text-xs md:text-sm break-words font-bold text-green-600 hover:underline cursor-pointer">
                                        <Link to={`/app/get-session/${session?.id}`}>Details</Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
            </div>
            <ParkingSessionPagination 
                pagination={pagination}
                setPagination={setPagination}
            />
            <ResponseDialog
                divOnClick={handleDivOnclick} 
                errMessage={errMessage}
                isOpen={openMessage}
                message={message}
                onClick={handleOnclick}
            />
            <Loader 
                isOpen={open}
                progress={progress}
            />
        </div>
    );
};