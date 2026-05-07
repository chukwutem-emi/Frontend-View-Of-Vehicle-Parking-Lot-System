import {apiClient} from "../../../services/apiClient";
import type { GetAllParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/getAllParkingSlotAttributes";

type APIResponse = {
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

export const getDashboardParkingSlotAPI = async (token: string | null) => {
    const res = await apiClient<APIResponse>("/slot/get-slots", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
    return res;
};