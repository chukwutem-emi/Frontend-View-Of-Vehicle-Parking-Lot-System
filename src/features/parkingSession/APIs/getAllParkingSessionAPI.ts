import {apiClient} from "../../../services/apiClient";
import type { GetAllParkingSessionsAttributes } from "../../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";


export type APIResponse = {
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

export const getAllParkingSessionsAPI = async (token: string | null, vehicleTypeId: number | undefined, currentPage: number, limit: number, sort: string) => {
    const res = await apiClient<APIResponse>(`/session/get-sessions?vehicleTypeId=${vehicleTypeId}&currentPage=${currentPage}&limit=${limit}&sort=${sort}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
    return res;
};