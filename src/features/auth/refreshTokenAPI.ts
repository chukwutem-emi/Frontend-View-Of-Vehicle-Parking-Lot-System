import { apiClient } from "../../services/apiClient";


export const refreshTokenAPI = async (): Promise<{ status: number; data: any }> => {
    return apiClient("/auth/refresh", {
        method: "POST"
    });
};
