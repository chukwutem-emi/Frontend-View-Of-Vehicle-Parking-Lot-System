import { apiClient } from "../../../services/apiClient";
import type {VehicleExitTimeAttributes} from "../../../types/parkingSessionAttributes/vehicleExitTimeAttributes";

export const vehicleExitTimeAPI = <T>(payload: VehicleExitTimeAttributes, token: T): Promise<{status: number, data: any}> => {
    return apiClient("/session/update", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify(payload)
    });
};