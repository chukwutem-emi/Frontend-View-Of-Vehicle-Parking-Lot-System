import { apiClient } from "../../../services/apiClient";
import type { GetLoggedInDeviceAttributes } from "../../../types/userDevices/getLoggedInDeviceAttributes";

type APIResponse = {
    success : boolean;
    message : string;
    data    : GetLoggedInDeviceAttributes;
};
export const getLoggedInDeviceAPI = async (token: string | null, userId: number) => {
    const res = await apiClient<APIResponse>(`/device/get-device/${userId}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res;
};