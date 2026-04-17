import {apiClient} from "../../../services/apiClient";



export const getAllParkingSessionsAPI = <T, V, C, L, S>(token: T, vehicleTypeId: V, currentPage: C, limit: L, sort: S): Promise<{status: number, data: any}> => {
    return apiClient(`/session/get-sessions?vehicleTypeId=${vehicleTypeId}&currentPage=${currentPage}&limit=${limit}&sort=${sort}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
};