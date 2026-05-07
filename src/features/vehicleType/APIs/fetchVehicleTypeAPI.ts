import { apiClient } from "../../../services/apiClient";
import type { FetchVehicleTypeAttributes } from "../../../types/vehicleTypeAttributes/fetchVehicleTypeAttribute";

type APIResponse = {
    success : boolean;
    message : string;
    data    : FetchVehicleTypeAttributes;
};

export const fetchVehicleTypeAPI = async (token : string | null, vehicleName: string) => {
    const res = await apiClient<APIResponse>(`/vehicle/get-vehicle?vehicleName=${vehicleName}`, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return res;
};