import {apiClient} from "../../../services/apiClient"

type APIResponse = {
    success : boolean;
    message : string;
    data    : never[];
};

export const fetchStatistics = async (token: string | null)  => {
    const res = await apiClient<APIResponse>("/session/statistics", {
    headers: {
        "Authorization": `Bearer ${token}`
    },
    method: "GET"
    });
    return res;
};