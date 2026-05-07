import {apiClient} from "../../../services/apiClient";
import type {UpdateUserDetailsPayloadAttributes} from "../../../types/authAttributes/updateUserDetailsAttributes";

type APIResponse = {
    success : boolean;
    message : string;
};

export const updateUserDetailsAPI = async (payload: UpdateUserDetailsPayloadAttributes, token: string | null, userId: number) => {
    const res = await apiClient<APIResponse>(`/auth/update/${userId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
    return res;
};