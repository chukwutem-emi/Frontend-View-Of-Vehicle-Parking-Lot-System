import type { ReactNode } from "react";
import type { FetchVehicleTypeAttributes } from "../../../types/vehicleTypeAttributes/fetchVehicleTypeAttribute";
import { convertUTCToLocalDateTime } from "../../../utils/formatDate";
import { Link } from "react-router-dom";

type VehicleDetailsProps = {
    vehicle   : FetchVehicleTypeAttributes | null;
    isDivOpen : boolean;
};
export const VehicleDetails = ({ vehicle, isDivOpen }: VehicleDetailsProps): ReactNode => {

    return (
        <div className={`mt-4 p-6 shadow-lg bg-white rounded w-[90%] mx-auto z-50 ${isDivOpen ? "block" : "hidden"}`}>
            {
                isDivOpen && (
                    <div className="overflow-x-auto">
                        <table className="min-w-max border mt-4 text-left">
                            <thead className="text-green-600 font-sans">
                                <tr className="border-b border-gray-700">
                                    <th className="py-2 px-4 md:text-sm text-xs">ID</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Vehicle name</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Hourly rate</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Updated by</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Created on</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Last updated</th>
                                    <th className="py-2 px-4 md:text-sm text-xs">Updated</th>
                                </tr>
                            </thead>
                            <tbody className="text-green font-sans">
                                {vehicle && (
                                    <tr className="border-b border-gray-700">
                                        <td className="py-4 px-4 md:text-sm text-xs break-words text-yellow-700">{vehicle?.id}</td>
                                        <td className="py-2 px-4 md:text-sm text-xs">{vehicle?.vehicleName}</td>
                                        <td className="py-2 px-4 md:text-sm text-xs">{vehicle?.hourlyRate}</td>
                                        <td className="py-2 px-4 md:text-sm text-xs">{vehicle?.updatedBy}</td>
                                        <td className="py-2 px-4 md:text-sm text-xs">{convertUTCToLocalDateTime(vehicle?.createdAt)}</td>
                                        <td className="py-2 px-4 md:text-sm text-xs">{convertUTCToLocalDateTime(vehicle?.updatedAt)}</td>
                                        <td className="py-2 px-4 md:text-lg text-sm text-green-600 font-bold">
                                            <Link className="hover:underline" to={`/app/update-vehicle-type/${vehicle?.id}`}>Update</Link>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                        <p className="font-sans font-semibold text-center text-gray-500">Scroll horizontally to view all information</p>
                    </div>
                )
            }
        </div>
    );
};