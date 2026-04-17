import { apiClient } from "../../../services/apiClient";


export const getUserAPI = <T>(token: T): Promise<{status: number, data: any}> => {
    return apiClient("/auth/user", {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    });
};