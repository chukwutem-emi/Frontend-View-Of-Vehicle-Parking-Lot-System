import { apiClient } from "../../../services/apiClient";
import type { GetAllLoggedInDevicesAttributes } from "../../../types/userDevices/getAllLoggedInDevicesAttributes";


type APIResponse = {
    success : boolean;
    message : string;
    data    : GetAllLoggedInDevicesAttributes;
};

export const getAllLoggedInDevicesAPI = async (token: string | null) => {
    const res = await apiClient<APIResponse>(`/device/get-devices`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res;
}