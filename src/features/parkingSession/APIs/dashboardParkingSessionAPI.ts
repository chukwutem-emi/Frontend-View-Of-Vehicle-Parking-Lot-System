import {apiClient} from "../../../services/apiClient";
import type { GetAllParkingSessionsAttributes } from "../../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";

type APIResponse = {
    success     : boolean;
    message     : string;
    data        : GetAllParkingSessionsAttributes;
    pagination? : {
        currentPage : number;
        limit       : number;
        total       : number;
        totalPages  : number;
    };
};

export const dashboardParkingSessionsAPI = async (token: string | null) => {
    const res = await apiClient<APIResponse>(`/session/get-sessions`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
    return res;
};