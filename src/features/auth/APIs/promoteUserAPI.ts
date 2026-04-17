import {apiClient} from "../../../services/apiClient";


export const promoteUserAPI = <T, U>(token: T, userId: U): Promise<{status: number, data: any}> => {
    return apiClient(`/auth/promote/${userId}`, {
        method: "PUT",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
};