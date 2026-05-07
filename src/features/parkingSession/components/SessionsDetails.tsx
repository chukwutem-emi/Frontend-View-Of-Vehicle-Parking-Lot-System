import type { ReactNode } from "react";
import type { GetParkingSessionAttributes } from "../../../types/parkingSessionAttributes/getParkingSessionAttributes";
import { convertUTCToLocalDateTime } from "../../../utils/formatDate";
import { formattedAmount } from "../../../utils/formatAmount";

type SessionsDetailsProps = {
    sessionDetails : GetParkingSessionAttributes;
};

export const SessionsDetails = ({ sessionDetails }: SessionsDetailsProps): ReactNode => {

    if (!sessionDetails) return null;

    const sessionDetailsList = [
        {label: "ID", value: sessionDetails?.id},
        {label: "Slot ID", value: sessionDetails?.slotId},
        {label: "Vehicle type ID", value: sessionDetails?.vehicleTypeId},
        {label: "Vehicle owner next of kin address", value: sessionDetails?.vehicleOwnerNextOfKinAddress},
        {label: "Vehicle owner next of kin phone", value: sessionDetails?.vehicleOwnerNextOfKinPhone},
        {label: "Vehicle owner next of kin", value: sessionDetails?.vehicleOwnerNextOfKin},
        {label: "Vehicle owner address", value: sessionDetails?.vehicleOwnerAddress},
        {label: "Vehicle owner phone", value: sessionDetails?.vehicleOwnerPhone},
        {label: "Vehicle number", value: sessionDetails?.vehicleNumber},
        {label: "Parking status", value: sessionDetails?.parkingStatus},
        {label: "Entry time", value: convertUTCToLocalDateTime(sessionDetails?.entryTime)},
        {label: "Cleared", value: sessionDetails?.isCleared ? "Yes" : "No"},
        {label: "Total fee", value: formattedAmount(sessionDetails?.totalAmount ?? 0)},
        {label: "Exit time", value: convertUTCToLocalDateTime(sessionDetails?.exitTime)},
        {label: "Created on", value: convertUTCToLocalDateTime(sessionDetails?.createdAt)},
        {label: "Last updated", value: convertUTCToLocalDateTime(sessionDetails?.updatedAt)}
    ];
    return (
        <div className="w-full">
            <div className="p-6 bg-white rounded">
                {
                    sessionDetailsList.map((item, index) => (
                        <div key={index} className="grid grid-cols-2 border-b pb-2 text-sm gap-10">
                            <span className="font-sans font-semibold text-green-600">
                                {item.label}:
                            </span>
                            <span className={`font-sans break-words text-gray-800 ${item.label === "Parking status" ? (item.value === "COMPLETED" ? "text-yellow-600" : "text-green-600") : ""}${item.label === "Total fee" ? "text-green-600 font-semibold" : ""}`}>
                                {item.value ?? ""}
                            </span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};