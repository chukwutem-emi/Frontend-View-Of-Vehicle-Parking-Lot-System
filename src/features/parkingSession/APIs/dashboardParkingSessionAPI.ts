import {apiClient} from "../../../services/apiClient";



export const dashboardParkingSessionsAPI = <T>(token: T): Promise<{status: number, data: any}> => {
    return apiClient(`/session/get-sessions`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
};