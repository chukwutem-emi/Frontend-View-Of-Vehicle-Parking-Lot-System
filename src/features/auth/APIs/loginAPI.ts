import type { LoginPayloadAttributes } from "../../../types/authAttributes/loginAttributes";
import {apiClient} from "../../../services/apiClient";

type APIResponse = {
    success : boolean;
    message : string;
    token   : string;
};
export const loginUser = async (payload: LoginPayloadAttributes) => {
    const res = await apiClient<APIResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload)
    });
    return res;
};