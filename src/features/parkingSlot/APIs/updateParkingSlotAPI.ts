import { apiClient } from "../../../services/apiClient";
import type { UpdateParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/updateParkingSlotAttributes";

type APIResponse = {
    success : boolean;
    message : string;
};

export const updateParkingSlotAPI = async (token: string | null,  vehicleTypeId: number, payload: UpdateParkingSlotAttributes) => {
    const res = await apiClient<APIResponse>(`/slot/update-slot/${vehicleTypeId}`, {
        method : "PUT",
        headers: {
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
    return res;
};
