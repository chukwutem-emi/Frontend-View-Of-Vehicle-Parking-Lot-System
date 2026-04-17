import type { JSX } from "react";
import type { GetParkingSessionProps } from "../../../types/parkingSessionAttributes/getParkingSessionAttributes";
import { convertUTCToLocalDateTime } from "../../../utils/formatDate";
import { formattedAmount } from "../../../utils/formatAmount";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";




export const GetParkingSession = ({errMessage, handleDivOnclick, handleOnclick, message, open, openMessage, progress, session}: GetParkingSessionProps): JSX.Element => {
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
                            <th className="py-2 px-4 text-xs md:text-sm">Cleared</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Entry time</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Exit time</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Total amount</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Slot ID</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Vehicle type ID</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Created on</th>
                            <th className="py-2 px-4 text-xs md:text-sm">Last update</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 font-sans">
                        <tr className="border-b border-gray-700">
                            <td className="p-4 text-xs md:text-sm break-words text-yellow-800">{session?.id}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerNextOfKinAddress}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerNextOfKinPhone}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerNextOfKin}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerAddress}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleOwnerPhone}</td>
                            <td className="p-4 text-xs md:text-sm break-words font-semibold text-blue-600">{session?.vehicleNumber}</td>
                            <td className={`p-4 text-xs md:text-sm break-words font-semibold ${session?.parkingStatus === "COMPLETED" ? "text-red-600" : "text-green-600"}`}>{session?.parkingStatus}</td>
                            <td className={`p-4 text-xs md:text-sm break-words font-semibold ${session?.isCleared ? "text-green-600" : "text-red-600"}`}>{session?.isCleared ? "Yes" : "No"}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(session?.entryTime)}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(session?.exitTime)}</td>
                            <td className="p-4 text-xs md:text-sm break-words text-green-600 font-semibold">{formattedAmount(session?.totalAmount)}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{session?.slotId}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{session?.vehicleTypeId}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(session?.createdAt)}</td>
                            <td className="p-4 text-xs md:text-sm break-words">{convertUTCToLocalDateTime(session?.updatedAt)}</td>
                        </tr>
                    </tbody>
                </table>
                <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
            </div>
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