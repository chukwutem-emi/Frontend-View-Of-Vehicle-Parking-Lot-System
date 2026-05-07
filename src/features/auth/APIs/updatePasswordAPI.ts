import { apiClient } from "../../../services/apiClient";
import type { UpdatePasswordAttributes } from "../../../types/authAttributes/updatePasswordAttributes";


type APIResponse = {
    message : string;
    success : boolean;
};

export const updatePasswordAPI = async (token: string | null, payload: UpdatePasswordAttributes, resetToken: string) => {
    const res = await apiClient<APIResponse>(`/auth/update-password/${resetToken}`, {
        method: "PUT",
        headers: {
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
    return res;
};