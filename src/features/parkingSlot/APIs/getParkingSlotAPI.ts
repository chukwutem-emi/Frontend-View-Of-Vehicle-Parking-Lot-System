import { apiClient } from "../../../services/apiClient";
import type { GetParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/getParkingSlotAttributes";

type APIResponse = {
    success : boolean;
    message : string;
    data    : GetParkingSlotAttributes;
};

export const getParkingSlotAPI = async (token: string | null, vehicleTypeId: number) => {
    const res = await apiClient<APIResponse>(`/slot/get-slot/${vehicleTypeId}`, {
        method: "GET",
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    });
    return res;
};