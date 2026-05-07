
const BASE_URL = process.env.PARCEL_BASE_URL || "";

export const apiClient = async <T = unknown>(url: string, options: RequestInit = {}): Promise<{status: number, data: T}> => {
    if (!BASE_URL) {
        throw new Error("BASE_URL is not defined in environment variables.");
    };
    const response = await fetch(`${BASE_URL}${url}`, {
        headers: {
            "Content-Type": "application/json",
            ...(options.headers || {})
        },
        ...options
    });
    const contentType = response.headers.get("Content-Type");
    const data: unknown = contentType?.includes("application/json") ? await response.json() : await response.text();
    return {
        status: response.status,
        data: data as T
    };
};