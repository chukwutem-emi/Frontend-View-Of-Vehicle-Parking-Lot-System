import type { ReactNode } from "react";
import type { GetParkingSessionAttributes } from "../../types/parkingSessionAttributes/getParkingSessionAttributes";
import { convertUTCToLocalDateTime } from "../../utils/formatDate";
import { formattedAmount } from "../../utils/formatAmount";



type SessionDetailsProps = {
    session          : GetParkingSessionAttributes | null;
};

export const SessionDetails = ({session}: SessionDetailsProps): ReactNode => {
    if (!session) return null;

    const details = [
        { label: "ID", value: session?.id },
        { label: "Vehicle owner next of kin address", value: session?.vehicleOwnerNextOfKinAddress },
        { label: "Vehicle owner next of kin phone", value: session?.vehicleOwnerNextOfKinPhone },
        { label: "Vehicle owner next of kin", value: session?.vehicleOwnerNextOfKin },
        { label: "Vehicle owner address", value: session?.vehicleOwnerAddress },
        { label: "Vehicle owner phone", value: session?.vehicleOwnerPhone },
        { label: "Vehicle number", value: session?.vehicleNumber },
        { label: "Parking status", value: session?.parkingStatus },
        { label: "Cleared", value: session?.isCleared ? "YES" : "NO" },
        { label: "Entry time", value: convertUTCToLocalDateTime(session?.entryTime) },
        { label: "Exit time", value: convertUTCToLocalDateTime(session?.exitTime) },
        { label: "Total amount", value: formattedAmount(session?.totalAmount ?? 0) },
        { label: "Slot ID", value: session?.slotId },
        { label: "Vehicle type ID", value: session?.vehicleTypeId },
        { label: "Created on", value: convertUTCToLocalDateTime(session?.createdAt) },
        { label: "Last updated", value: convertUTCToLocalDateTime(session?.updatedAt) }
    ];

    return (
        <div className="w-full">
            <div className="p-6 bg-white shadow-lg rounded w-[90%] md:w-[70%] mx-auto overflow-y-auto h-[30rem]">
                {
                    details.map((item, index) => (
                        <div key={index} className="grid grid-cols-2 border-b pb-2 text-sm gap-10">
                            <span className="font-sans font-semibold text-green-600">
                                {item.label}:
                            </span>
                            <span className={`font-sans break-words text-gray-600 ${item.label === "Parking status" ? (item.value === "COMPLETED" ? "text-yellow-600 font-semibold" : "text-green-600 font-semibold") : ""}${item.label === "Total amount" ? "text-green-600 font-semibold" : ""}${item.label === "Cleared" ? (item.value === "YES" ? "text-green-600 font-semibold" : "text-red-600 font-semibold") : ""}`}>
                                {item.value ?? ""}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};