import {apiClient} from "../../../services/apiClient";



export const getParkingSlotAPI = (token: any): Promise<{status: number, data: any}> => {
    return apiClient("/slot/get-slots", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
};