import { apiClient } from "../../../services/apiClient";
import type { GetParkingSessionAttributes } from "../../../types/parkingSessionAttributes/getParkingSessionAttributes";

type APIResponse = {
    success : boolean;
    message : string;
    data    : GetParkingSessionAttributes;
};

export const getParkingSessionAPI = async (sessionId: number, token: string | null) => {
    const res = await apiClient<APIResponse>(`/session/get-session/${sessionId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
    return res;
};