import {Line, LineChart, XAxis, Tooltip, ResponsiveContainer} from "recharts";
import type {ParkingSlotAttributes} from "../../types/parkingSlot";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";


type ChartAndOverviewPropsAttributes = {
    chartData      : never[];
    slots          : ParkingSlotAttributes[];
    isDarkMode     : boolean;
    parkingSessions : GetAllParkingSessionsAttributes;
};

export const ChartAndOverview = ({chartData, slots, isDarkMode, parkingSessions}: ChartAndOverviewPropsAttributes) => {
    const available = slots?.reduce((sum, slot) => sum + (slot.isAvailable ? 1 : 0), 0) ?? 0;
    const occupied  = slots?.reduce((sum, slot) => {
        const maxCapacity = slot?.maximumCapacity ?? 0;
        const availableCapacity = slot?.availableCapacity ?? 0;
        const occupiedCapacity = maxCapacity - availableCapacity;
        return sum + occupiedCapacity;
    }, 0) ?? 0

    const active  = parkingSessions?.filter((session) => session?.parkingStatus === "ACTIVE").length || 0;

    const exited = parkingSessions?.filter((session) => session?.parkingStatus === "COMPLETED").length || 0;

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
            <div className={`lg:col-span-2 p-4 rounded-xl shadow-lg ${isDarkMode ? "bg-[#111744]" : "bg-gray-300"}`}>
            <h2 className="mb-4">General View</h2>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={chartData}>
                <XAxis dataKey="date" />
                <Tooltip />
                <Line type="monotone" dataKey="entries" stroke="#4F46E5" />
                <Line type="monotone" dataKey="exits" stroke="#4F46E5" />
                </LineChart>
            </ResponsiveContainer>
            </div>
            {/* Parking Slots Grid */}
            <div className={`lg:col-span-2 p-4 rounded-xl shadow-lg ${isDarkMode ? "bg-[#111744]" : "bg-gray-300"}`}>
                <h2 className="mb-4">Parking Slots</h2>

                {slots?.length > 0 ? (
                    <div className="grid md:grid-cols-4 grid-cols-1 gap-3 font-sans">
                    {slots?.map((slot: ParkingSlotAttributes) => (
                        <div
                        key={slot.id}
                        className={`p-4 rounded-xl font-bold transition ${
                            slot.isAvailable
                            ? "bg-green-400 hover:bg-green-500"
                            : "bg-red-400 hover:bg-red-500"
                        }`}
                        >
                        <p className="font-sans text-xs md:text-sm">Slot {slot.id}</p>
                        <p className="text-xs md:text-sm mt-1 font-sans">
                            Available Capacity: {slot.availableCapacity}
                        </p>
                        </div>
                    ))}
                    </div>
                ) : (
                    <p className="text-gray-400">No slots available</p>
                )}
            </div>

            <div className={`p-4 rounded-xl shadow-lg ${isDarkMode ? "bg-[#111744]" : "bg-gray-300"}`}>
                <h2 className="mb-4">Overview</h2>

                <div className="flex justify-between mb-4">
                    <div>
                    <p className="text-2xl font-bold">{parkingSessions.length}</p>
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Vehicles</p>
                    </div>
                    <div>
                    <p className="text-2xl font-bold">{slots.length}</p>
                    <p className={`${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Slots</p>
                    </div>
                </div>
                <div className="flex justify-between mb-4">
                    <div>
                    <p className="text-2xl font-bold">{available}</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Available Slot</p>
                    </div>
                    <div>
                    <p className="text-2xl font-bold">{occupied}</p>
                    <p className={`text-sm ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>Occupied Capacity</p>
                    </div>
                </div>

                <div className="space-y-3">
                    <div>
                    <p className="text-sm">Active</p>
                    <div className="w-full bg-gray-700 h-2 rounded">
                        <div className={`bg-blue-500 h-2 rounded ${active <= 10 ? "w-[10%]": active <= 20 ? "w-[20%]" : active <= 30 ? "w-[30%]" : active <= 40 ? "w-[40%]" : active <= 50 ? "w-[50%]" : active <= 60 ? "w-[60%]" : active <= 70 ? "w-[70%]" : active <= 80 ? "w-[80%]" : active <= 90 ? "w-[90%]" : "w-[100%]"}`}></div>
                    </div>
                    </div>
                    <div>
                    <p className="text-sm">Exited</p>
                    <div className="w-full bg-gray-700 h-2 rounded">
                        <div className={`bg-purple-500 h-2 rounded ${exited <= 10 ? "w-[10%]": exited <= 20 ? "w-[20%]" : exited <= 30 ? "w-[30%]" : exited <= 40 ? "w-[40%]" : exited <= 50 ? "w-[50%]" : exited <= 60 ? "w-[60%]" : exited <= 70 ? "w-[70%]" : exited <= 80 ? "w-[80%]" : exited <= 90 ? "w-[90%]" : "w-[100%]"}`}></div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
};