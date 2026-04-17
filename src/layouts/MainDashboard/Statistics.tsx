import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import {formattedAmount} from "../../utils/formatAmount";

type StatsAttributes = {
  isDarkMode      : boolean;
  parkingSessions : GetAllParkingSessionsAttributes;
};

export const Statistics = ({isDarkMode, parkingSessions}: StatsAttributes) => {
    const totalAmount = parkingSessions.reduce<number>((sum, session) => {
      const amount = Number(session.totalAmount);
      return sum + (isNaN(amount) ? 0 : amount);
    }, 0);


    const today = new Date();

    const vehicleToday = parkingSessions.filter((session) => {
      const entryDate = new Date(session.entryTime);
      return (
        entryDate.getFullYear() === today.getFullYear() && entryDate.getMonth() === today.getMonth() && entryDate.getDate() === today.getDate()
      );
    }).length;
    const getActive = parkingSessions.filter((active) => active.parkingStatus === "ACTIVE").length
    const getCompleted = parkingSessions.filter((completed) => completed.parkingStatus === "COMPLETED").length
    return (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6 font-sans">
          <div className={`p-4 rounded-xl shadow-lg font-bold ${isDarkMode ? "bg-gradient-to-r from-purple-500 to-indigo-500" : "bg-gray-200"}`}>
            <p>Vehicles Today</p>
            <h2 className="text-2xl font-bold">{vehicleToday}</h2>
          </div>
          <div className={`p-4 rounded-xl shadow-lg font-bold ${isDarkMode ? "bg-gradient-to-r from-cyan-800 to-blue-500": "bg-gray-200"}`}>
            <p>Revenue</p>
            <h2 className="text-2xl font-bold text-green-400">{formattedAmount(totalAmount)}</h2>
          </div>

          <div className={`p-4 rounded-xl shadow-lg font-bold ${isDarkMode ? "bg-gradient-to-r from-yellow-600 to-yellow-200" : "bg-gray-200"}`}>
            <p>Completed</p>
            <h2 className="text-2xl font-bold">{getCompleted}</h2>
          </div>

          <div className={`p-4 rounded-xl shadow-lg font-bold ${isDarkMode ? "bg-gradient-to-r from-green-600 to-green-200" : "bg-gray-200"}`}>
            <p>Active</p>
            <h2 className="text-2xl font-bold">{getActive}</h2>
          </div>
        </div>
    );
};