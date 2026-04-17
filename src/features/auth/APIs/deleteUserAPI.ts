import {apiClient} from "../../../services/apiClient";


export const deleteUserAPI = <T, U>(token: T, userId: U): Promise<{status: number, data: any}> => {
    return apiClient(`/auth/delete/${userId}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
};