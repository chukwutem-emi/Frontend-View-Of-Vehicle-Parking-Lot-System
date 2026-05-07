import type { ReactNode } from "react";
import { convertUTCToLocalDateTime } from "../../utils/formatDate";
import type { GetParkingSlotAttributes } from "../../types/ParkingSlotAttributes/getParkingSlotAttributes";



type SlotDetailsProps = {
    selectedSlot    : GetParkingSlotAttributes | null;
    isDivOpen       : boolean;
};

export const SlotDetails = ({isDivOpen, selectedSlot}: SlotDetailsProps): ReactNode => {
    return (
        <>
        {
            selectedSlot && isDivOpen && (
                <div className="absolute mt-4 p-6 bg-white shadow-lg rounded w-[90%] md:w-[70%] mx-auto z-50">
                    <div className="overflow-x-auto">
                        <table className="min-w-max border mt-4 text-left">
                            <thead className="text-green-600 font-sans">
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-4 md:text-sm text-xs">ID</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Slot code</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Available</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Maximum capacity</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Available capacity</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Update by</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle type ID</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Created on</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Last updated</th>
                                </tr>
                            </thead>
                            <tbody className="text-green font-sans">
                                <tr className="border-b border-gray-700">
                                    <td className="py-4 px-4 md:text-sm text-xs break-words text-yellow-700">{selectedSlot?.id}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words text-blue-400">{selectedSlot?.slotCode}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSlot?.isAvailable ? "Yes" : "No"}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSlot?.maximumCapacity}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSlot?.availableCapacity}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSlot?.updatedBy}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSlot?.vehicleTypeId}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{convertUTCToLocalDateTime(selectedSlot?.createdAt)}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{convertUTCToLocalDateTime(selectedSlot?.updatedAt)}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
                </div>
            )
        }
        </>
    );
};