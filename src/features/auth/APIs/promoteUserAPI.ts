import {apiClient} from "../../../services/apiClient";

type APIResponse = {
    success : boolean;
    message : string;
};

export const promoteUserAPI = async (token: string | null, userId: number) => {
    const res = await apiClient<APIResponse>(`/auth/promote/${userId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return res;
};