import type { ReactNode } from "react";
import type { GetParkingSlotPropsAttributes } from "../../../types/ParkingSlotAttributes/getParkingSlotAttributes";
import { convertUTCToLocalDateTime } from "../../../utils/formatDate";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import { Link } from "react-router-dom";



export const GetParkingSlot = ({errMessage, handleDivOnClick, handleOnclick, message, open, openMessage, progress, slot}: GetParkingSlotPropsAttributes): ReactNode => {
    return (
        <div className="bg-white w-full mx-auto p-10">
            <div className="overflow-x-auto">
                <table className="min-w-max border mt-4 text-left">
                    <thead className="text-green-600 font-sans">
                        <tr className="border-b border-gray-700">
                            <th className="py-2 px-4 text-xs md:text-sm">ID</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Slot code</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Available</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Maximum capacity</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Available capacity</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Updated by</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Vehicle type ID</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Created on</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Last updated</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Update slot</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-sans">
                        <tr className="border-b border-gray-700">
                            <td className="p-4 text-xs md:text-sm break-words text-yellow-800">{slot?.id}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{slot?.slotCode}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{slot?.isAvailable}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{slot?.maximumCapacity}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{slot?.availableCapacity}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{slot?.updatedBy}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{slot?.vehicleTypeId}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(slot?.createdAt)}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(slot?.updatedAt)}</td>
                            <td className="p-4 text-xs md:text-sm break-words font-bold hover:underline text-green-600">
                                <Link to={`/app/update-slot/${slot?.vehicleTypeId}`}>Update</Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
            </div>
            <ResponseDialog 
                divOnClick={handleDivOnClick}
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