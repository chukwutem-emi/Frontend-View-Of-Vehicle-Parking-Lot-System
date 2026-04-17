import { useEffect, useState } from "react";
import type {GetAllUsersAttributes} from "../../../types/authAttributes/getAllUsersAttributes";
import type {PaginationAttributes} from "../../../types/paginationAttributes";
import {getAllUsersAPI} from "../APIs/getAllUsersAPI";
import { useSelector } from "react-redux";


export const useGetAllUser = () => {
    const[openMessage, setOpenMessage] = useState(false);
    const[message, setMessage]         = useState("");
    const[errMessage, setErrMessage]   = useState(false);
    const[loading, setLoading]         = useState(false);
    const[users, setUsers]             = useState<GetAllUsersAttributes>([]);
    const[pagination, setPagination]   = useState<PaginationAttributes>({
        currentPage: 1,
        limit: 2,
        role: "SUPER-ADMIN",
        sort: "-createdAt",
        total: 0,
        totalPages: 1
    });


    const userToken = useSelector((store: any) => store.token?.getToken);

    useEffect(() => {
        if (userToken) {
            handleGetAllUsers(pagination?.currentPage);
        };
    }, [userToken, pagination?.currentPage]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        }
    }, [message]);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };

    const handleGetAllUsers = async (page = 1) => {
        setLoading(true);
        try {
            const {data, status} = await getAllUsersAPI(page, pagination?.limit, pagination?.role, pagination?.sort, userToken);
            if (status === 200) {

                setUsers(data?.data || data?.usersDetails || []);
                setMessage("Users retrieved successfully.");
                if (data?.pagination) {
                    setPagination((prev) => {
                        if (prev?.currentPage === data?.pagination?.currentPage && prev?.totalPages === data?.pagination?.totalPages && prev?.total === data?.pagination?.total) {
                            return prev
                        };
                        return {
                            ...prev,
                            ...data?.pagination
                        };
                    })
                };
                setErrMessage(false);
            } else {
                const [key] = Object.keys(data);
                setMessage(data[key ?? "An error occurred."]);
                setErrMessage(true);
            };
        } catch (err: any) {
            console.log("ERROR:", err.message);
            setErrMessage(true);
            setMessage(err.message);
        } finally {
            setLoading(false);
        }
    };
    return {
        loading,
        users,
        errMessage,
        message,
        setPagination,
        clearMessage,
        openMessage,
        setOpenMessage,
        pagination
    };
};