import  {apiClient} from "../../../services/apiClient";

type APIResponse = {
    success : boolean;
    message : string;
};

export const demoteUserAPI = async (token: string | null, userId: number) => {
    const res = await apiClient<APIResponse>(`/auth/demote/${userId}`, {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        method: "PUT"
    });
    return res;
};