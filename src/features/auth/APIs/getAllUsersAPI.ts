import {apiClient} from "../../../services/apiClient";

export const getAllUsersAPI = <C, L, R, S, T>(currentPage: C, limit: L, role: R, sort: S, token: T): Promise<{status: number, data: any}> => {
    return apiClient(`/auth/users?currentPage=${currentPage}&limit=${limit}&role=${role}&sort=${sort}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    })
}