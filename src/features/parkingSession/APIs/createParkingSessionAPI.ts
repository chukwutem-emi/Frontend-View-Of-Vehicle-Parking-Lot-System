import {apiClient} from "../../../services/apiClient";
import type {CreateParkingSessionAttributes} from "../../../types/parkingSessionAttributes/createParkingSessionAttributes";

type APIResponse = {
    success : boolean;
    Message : string;
};

export const createParkingSessionAPI = async (payload: CreateParkingSessionAttributes, token: string | null) => {
    const res = await apiClient<APIResponse>("/session/create", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "POST",
        body: JSON.stringify(payload)
    });
    return res;
};