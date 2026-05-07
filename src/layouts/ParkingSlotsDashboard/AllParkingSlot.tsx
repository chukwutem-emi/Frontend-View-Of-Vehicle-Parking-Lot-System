import type { ReactNode } from "react";
import type { GetAllParkingSlotAttributes } from "../../types/ParkingSlotAttributes/getAllParkingSlotAttributes";


type AllParkingSlotsProps = {
    filteredSlots  : GetAllParkingSlotAttributes;
};

export const AllParkingSlots = ({filteredSlots}: AllParkingSlotsProps): ReactNode => {
    return (
        <div className="my-[4rem] text-white">
            <h2 className="font-sans text-center mb-10 font-bold text-lg md:xl">🚗🚛🚔Parking Slots</h2>
            {
                filteredSlots.length > 0 ? (
                    <ul className="grid md:grid-cols-4 grid-col-1 gap-4 items-center justify-items-center">
                        {
                            filteredSlots.map((slot) => (
                                <li key={slot.id} className="w-64 flex-shrink-0 font-sans text-sm bg-[#1E293B] border border-[#334155] hover:bg-[#273449] z-50 break-words p-6 shadow-lg shadow-black/30">
                                    <div className="text-blue-600 flex flex-row gap-4">
                                        <p className="text-gray-500 font-bold">Slot Code:</p>
                                        {slot?.slotCode}
                                    </div>
                                    <div className={`mt-[1rem] flex flex-row gap-4 ${!slot?.isAvailable ? "text-red-600 animate-pulse" : "text-green-600"}`}>
                                        <p className="text-gray-500 font-bold">Available:</p>
                                        {slot?.isAvailable ? "Yes" : "No"}
                                    </div>
                                    <div className="mt-[1rem] flex flex-row gap-4">
                                        <p className="text-gray-500 font-bold">Available Capacity:</p>
                                        {slot?.availableCapacity}
                                    </div>
                                    <div className="mt-[1rem] flex flex-row gap-4">
                                        <p className="text-gray-500 font-bold">Maximum Capacity:</p>
                                        {slot?.maximumCapacity}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                ) : (
                    <p className="text-center items-center font-sans text-sm md:text-lg">No parking slot found!</p>
                )
            }
        </div>
    );
};