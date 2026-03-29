import {apiClient}  from "../../services/apiClient";
import type {SignupPayloadAttributes} from "../../types/authAttributes";

export const createUser = (payload: SignupPayloadAttributes): Promise<{status: number, data: any}> => {
    return apiClient("/auth/signup", {
        method: "POST",
        body: JSON.stringify(payload)
    });
};