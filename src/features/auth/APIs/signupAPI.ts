import {apiClient}  from "../../../services/apiClient";
import type {SignupPayloadAttributes} from "../../../types/authAttributes/signupAttributes";

type APIResponse = {
    success : boolean;
    message : string;
};

export const createUser = async (payload: SignupPayloadAttributes) => {
    const res = await apiClient<APIResponse>("/auth/signup", {
        method: "POST",
        body: JSON.stringify(payload)
    });
    return res;
};