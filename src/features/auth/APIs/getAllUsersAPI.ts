import {apiClient} from "../../../services/apiClient";
import type { GetAllUsersAttributes } from "../../../types/authAttributes/getAllUsersAttributes";

export type APIResponse = {
    success     : boolean;
    message     : string;
    data        : GetAllUsersAttributes;
    pagination? : {
        currentPage : number;
        limit       : number;
        total       : number;
        totalPages  : number;
    };
};


export const getAllUsersAPI = async (currentPage: number, limit: number, role: string | undefined, sort: string, token: string | null) => {
    const res = await apiClient<APIResponse>(`/auth/users?currentPage=${currentPage}&limit=${limit}&role=${role}&sort=${sort}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "GET"
    })
    return res;
}