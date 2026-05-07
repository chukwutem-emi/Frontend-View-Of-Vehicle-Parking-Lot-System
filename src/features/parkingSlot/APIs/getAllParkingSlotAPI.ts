import { apiClient } from "../../../services/apiClient";
import type { GetAllParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/getAllParkingSlotAttributes";


export type APIResponse = {
    success     : boolean;
    message     : string;
    data        : GetAllParkingSlotAttributes;
    pagination? : {
        currentPage : number;
        limit       : number;
        total       : number;
        totalPages  : number;
    };
};

export const getAllParkingSlotAPI = async (token: string | null, vehicleTypeId: number | undefined, limit: number, sort: string, currentPage: number) => {
    const res = await apiClient<APIResponse>(`/slot/get-slots?vehicleTypeId=${vehicleTypeId}&limit=${limit}&sort=${sort}&currentPage=${currentPage}`, {
        method: "GET",
        headers: {
            "Authorization" : `Bearer ${token}`
        }
    });
    return res;
};