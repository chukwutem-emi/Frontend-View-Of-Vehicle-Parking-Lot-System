import { apiClient } from "../../../services/apiClient";
import type { GetUserAttributes } from "../../../types/authAttributes/getUserAttributes";


type APIResponse = {
    success : boolean;
    message : string;
    data    : GetUserAttributes;
};

export const getCurrentUserAPI = async (token: string | null) => {
    const res = await apiClient<APIResponse>("/auth/current-user", {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    });
    return res;
}