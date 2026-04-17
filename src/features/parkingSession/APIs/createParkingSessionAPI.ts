import {apiClient} from "../../../services/apiClient";
import type {CreateParkingSessionAttributes} from "../../../types/parkingSessionAttributes/createParkingSessionAttributes";

export const createParkingSessionAPI = <T>(payload: CreateParkingSessionAttributes, token: T): Promise<{status: number, data: any}> => {
    return apiClient("/session/create", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify(payload)
    });
};