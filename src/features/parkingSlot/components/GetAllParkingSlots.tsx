import type { ReactNode } from "react";
import type { GetAllParkingSlotPropsAttributes } from "../../../types/ParkingSlotAttributes/getAllParkingSlotAttributes";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import { convertUTCToLocalDateTime } from "../../../utils/formatDate";
import { ParkingSlotPagination } from "./Pagination";
import { Link } from "react-router-dom";


export const GetAllParkingSlot = ({errMessage, handleDivOnClick, handleOnclick, message, open, openMessage, progress, slots, pagination, setPagination}: GetAllParkingSlotPropsAttributes): ReactNode => {
    return (
        <div className="bg-white w-full mx-auto p-10">
            <select
                className="font-semibold font-sans w-[30%] text-sm md:text-lg outline-none border border-green-600"
                name="vehicleTypeId"
                id="vehicleTypeId"
                value={pagination?.vehicleTypeId ?? 0}
                onChange={(e) => {
                    const value = e.target.value;

                    setPagination((prev) => ({
                        ...prev,
                        currentPage: 1,
                        vehicleTypeId: value ? Number(value) : undefined
                    }))
                }}
            >
                <option value={""} disabled>All Vehicle Types</option>
                <option value={1}>SUV</option>
                <option value={2}>TRUCK</option>
            </select>
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
                            <th className="py-2 px-4 text-xs md:text-sm">Check slot</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-sans">
                        {
                            slots?.length > 0 ? (
                                slots?.map((slot) => (
                                    <tr key={slot?.id}  className="border-b border-gray-700">
                                        <td className="p-4 text-xs md:text-sm break-words text-yellow-800">{slot?.id}</td>
                                        <td className="p-4 text-xs md:text-sm break-words">{slot?.slotCode}</td>
                                        <td className={`p-4 text-xs md:text-sm break-words ${slot?.isAvailable ? "text-green-600" : "text-red-600"}`}>{slot?.isAvailable ? "Yes" : "No"}</td>
                                        <td className="p-4 text-xs md:text-sm break-words">{slot?.maximumCapacity}</td>
                                        <td className="p-4 text-xs md:text-sm break-words">{slot?.availableCapacity}</td>
                                        <td className="p-4 text-xs md:text-sm break-words">{slot?.updatedBy}</td>
                                        <td className="p-4 text-xs md:text-sm break-words">{slot?.vehicleTypeId}</td>
                                        <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(slot?.createdAt)}</td>
                                        <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(slot?.updatedAt)}</td>
                                        <td className="p-4 text-xs md:text-sm break-words text-green-600 font-bold hover:underline">
                                            <Link to={`/app/get-slot/${slot?.vehicleTypeId}`}>Check</Link>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <td className="p-4 text-xs md:text-sm break-words">No Parking slot found!</td>
                            )
                        }
                    </tbody>
                </table>
                <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
            </div>
            <ParkingSlotPagination pagination={pagination} setPagination={setPagination}/>
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