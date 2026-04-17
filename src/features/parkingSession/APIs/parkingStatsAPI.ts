import {apiClient} from "../../../services/apiClient"



export const fetchStatistics = <T>(token: T): Promise<{status: number, data: any}>  => {
    return apiClient("/session/statistics", {
    headers: {
        "Authorization": `Bearer ${token}`
    },
    method: "GET"
    })
};