import { apiClient } from "../../../services/apiClient";
import type { GetUserAttributes } from "../../../types/authAttributes/getUserAttributes";

type APIResponse = {
    success : boolean;
    message : string;
    data    : GetUserAttributes;
};

export const getUserAPI = async (token: string | null, userId: number) => {
    const res =  await apiClient<APIResponse>(`/auth/user?userId=${userId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
    return res;
};