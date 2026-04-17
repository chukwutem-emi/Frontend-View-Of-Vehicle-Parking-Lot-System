import  {apiClient} from "../../../services/apiClient";


export const demoteUserAPI = <T, U>(token: T, userId: U): Promise<{status: number, data: any}> => {
    return apiClient(`/auth/demote/${userId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "PUT"
    });
};