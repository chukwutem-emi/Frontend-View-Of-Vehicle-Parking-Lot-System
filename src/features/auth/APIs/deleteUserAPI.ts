import {apiClient} from "../../../services/apiClient";

type APIResponse = {
    success : boolean;
    message : string;
};

export const deleteUserAPI = async (token: string | null, userId: number) => {
    const res = await apiClient<APIResponse>(`/auth/delete/${userId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
    return res;
};