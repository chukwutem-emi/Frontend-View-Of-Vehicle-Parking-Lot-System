import {apiClient} from "../../../services/apiClient";
import type {UpdateUserDetailsPayloadAttributes} from "../../../types/authAttributes/updateUserDetailsAttributes";



export const updateUserDetailsAPI = <T, U>(payload: UpdateUserDetailsPayloadAttributes, token: T, userId: U): Promise<{status: number, data: any}> => {
    return apiClient(`/auth/update/${userId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
};