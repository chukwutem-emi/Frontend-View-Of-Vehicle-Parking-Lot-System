import { apiClient } from "../../../services/apiClient";
import type { CreateParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/createParkingSlotAttributes";


type APIResponse = {
    success : boolean;
    message : string;
};

export const createParkingSlotAPI = async (token: string | null, payload: CreateParkingSlotAttributes) => {
    const res = await apiClient<APIResponse>("/slot/create-slot", {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
    return res;
};