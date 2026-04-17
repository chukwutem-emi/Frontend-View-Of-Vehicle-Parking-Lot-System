import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import {convertUTCToLocalDateTime} from "../../utils/formatDate";

type ParkingSessionAttributes = {
    parkingSessions : GetAllParkingSessionsAttributes;
    isDarkMode      : boolean;
};

export const ParkingSessionsActivityTable = ({parkingSessions, isDarkMode}: ParkingSessionAttributes) => {
    return (
        <div className={`p-4 rounded-xl shadow-lg overflow-x-auto ${isDarkMode ? "bg-[#111744]" : "bg-gray-200"}`}>
          <h2 className="mb-4 text-xs md:text-lg">Parking Sessions Activity Table</h2>
          {
            parkingSessions?.length > 0 ? (
              <table className="min-w-full text-left">
                <thead>
                  <tr className={`border-b border-gray-700 ${isDarkMode ? "text-gray-400" : "text-gray-500"}`}>
                    <th className="py-2 text-xs md:text-lg">Plate Number</th>
                    <th className="text-xs md:text-lg">Session ID</th>
                    <th className="text-xs md:text-lg">Status</th>
                    <th className="text-xs md:text-lg">Entry-Time</th>
                    <th className="text-xs md:text-lg">Exit-Time</th>
                  </tr>
                </thead>
                <tbody>
                  {parkingSessions?.map((session) => (
                    <tr key={session.id} className="border-b border-gray-800">
                      <td className="py-2 text-xs md:text-lg">{session.vehicleNumber}</td>
                      <td className="text-xs md:text-lg">{session.id}</td>
                      <td className={`text-xs md:text-lg ${session.parkingStatus === "COMPLETED" ? "text-red-600": "text-green-600 animate-pulse"}`}>{session.parkingStatus}</td>
                      <td className="text-xs md:text-lg">{convertUTCToLocalDateTime(session.entryTime)}</td>
                      <td className="text-xs md:text-lg">{convertUTCToLocalDateTime(session.exitTime)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
            ): (
              <p className="text-gray-400 text-sm md:text-lg">No Parking Session Available</p>
            )
          }
        </div>
    );
};
