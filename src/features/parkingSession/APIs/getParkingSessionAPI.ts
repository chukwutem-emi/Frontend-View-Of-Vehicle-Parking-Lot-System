import { apiClient } from "../../../services/apiClient";


export const getParkingSessionAPI = <S, T>(sessionId: S, token: T): Promise<{status: number, data: any}> => {
    return apiClient(`/session/get-session/${sessionId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
};