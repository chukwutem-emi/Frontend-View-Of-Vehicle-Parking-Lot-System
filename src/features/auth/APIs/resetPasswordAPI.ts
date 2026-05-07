import { apiClient } from "../../../services/apiClient";
import type { ResetPasswordAttribute } from "../../../types/authAttributes/resetPasswordAttribute";

type APIResponse = {
    success : boolean;
    message : string;
    token   : string;
};

export const resetPasswordAPI = async (payload: ResetPasswordAttribute, token: string | null) => {
    const res = await apiClient<APIResponse>("/auth/reset", {
        method: "POST",
        headers: {
            "Authorization" : `Bearer ${token}`
        },
        body: JSON.stringify(payload)
    });
    return res;
};