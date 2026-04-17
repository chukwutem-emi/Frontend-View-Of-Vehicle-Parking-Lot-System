import type { JSX } from "react";
import type { GetParkingSessionAttributes } from "../../types/parkingSessionAttributes/getParkingSessionAttributes";
import { convertUTCToLocalDateTime } from "../../utils/formatDate";
import { formattedAmount } from "../../utils/formatAmount";



type SessionDetailsProps = {
    selectedSession : GetParkingSessionAttributes | null;
    isDivOpen       : boolean;
};

export const SessionDetails = ({isDivOpen, selectedSession}: SessionDetailsProps): JSX.Element => {
    return (
        <>
        {
            selectedSession && isDivOpen && (
                <div className="absolute mt-4 p-6 bg-white shadow-lg rounded w-[70%] mx-auto z-50">
                    <div className="overflow-x-auto">
                        <table className="min-w-max border mt-4 text-left">
                            <thead className="text-green-600 font-sans">
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-4 md:text-sm text-xs">ID</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle owner next of kin address</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle owner next of kin phone</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle owner next of kin</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle owner address</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle owner phone</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle number</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Parking status</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Cleared</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Entry time</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Exit time</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Total amount</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Slot ID</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle type ID</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Created on</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Last updated</th>
                                </tr>
                            </thead>
                            <tbody className="text-green font-sans">
                                <tr className="border-b border-gray-700">
                                    <td className="py-4 px-4 md:text-sm text-xs break-words text-yellow-700">{selectedSession?.id}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.vehicleOwnerNextOfKinAddress}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.vehicleOwnerNextOfKinPhone}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.vehicleOwnerNextOfKin}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.vehicleOwnerAddress}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.vehicleOwnerPhone}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.vehicleNumber}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.parkingStatus}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.isCleared ? "YES" : "NO"}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{convertUTCToLocalDateTime(selectedSession?.entryTime)}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{convertUTCToLocalDateTime(selectedSession?.exitTime)}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{formattedAmount(selectedSession?.totalAmount)}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.slotId}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{selectedSession?.vehicleTypeId}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{convertUTCToLocalDateTime(selectedSession?.createdAt)}</td>
                                    <td className="py-4 px-4 md:text-sm text-xs break-words">{convertUTCToLocalDateTime(selectedSession?.updatedAt)}</td>
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