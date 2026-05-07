import { apiClient } from "../../../services/apiClient";
import type {VehicleExitTimeAttributes} from "../../../types/parkingSessionAttributes/vehicleExitTimeAttributes";

type APIResponse = {
    success : boolean;
    message : string;
};

export const vehicleExitTimeAPI = async (payload: VehicleExitTimeAttributes, token: string | null) => {
    const res = await apiClient<APIResponse>("/session/update", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "PUT",
        body: JSON.stringify(payload)
    });
    return res;
};