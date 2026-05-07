import { apiClient } from "../../../services/apiClient";
import type { UpdateVehicleTypePayloadAttributes } from "../../../types/vehicleTypeAttributes/updateVehicleTypeAttribute";

type APIResponse = {
    success : boolean;
    message : string;
};

export const updateVehicleTypeAPI = async (token: string | null, vehicleId: number, payload: UpdateVehicleTypePayloadAttributes) => {
    const res = await apiClient<APIResponse>(`/vehicle/update-vehicle/${vehicleId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
    return res;
};