import type { LoginPayloadAttributes } from "../../../types/authAttributes/loginAttributes";
import {apiClient} from "../../../services/apiClient";


export const loginUser = (payload: LoginPayloadAttributes): Promise<{status: number, data: any}> => {
    return apiClient("/auth/login", {
        method: "POST",
        body: JSON.stringify(payload)
    });
};