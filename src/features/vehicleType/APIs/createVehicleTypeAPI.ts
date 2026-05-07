import { apiClient } from "../../../services/apiClient";
import type { CreateVehicleTypePayloadAttributes } from "../../../types/vehicleTypeAttributes/createVehicleTypeAttribute";

type APIResponse = {
    success : boolean;
    message : string;
};

export const createVehicleTypeAPI = async (token: string | null, payload: CreateVehicleTypePayloadAttributes) => {
    const res = await apiClient<APIResponse>("/vehicle/create", {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
    return res;
};