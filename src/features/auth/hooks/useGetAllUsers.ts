import { useEffect, useState } from "react";
import type {GetAllUsersAttributes} from "../../../types/authAttributes/getAllUsersAttributes";
import type {PaginationAttributes} from "../../../types/paginationAttributes";
import {getAllUsersAPI} from "../APIs/getAllUsersAPI";
import { useAppSelector } from "../../../utils/useAppSelector";

type UseGetAllUserReturns = {
    loading        : boolean;
    users          : GetAllUsersAttributes;
    errMessage     : boolean;
    message        : string;
    setPagination  : React.Dispatch<React.SetStateAction<PaginationAttributes>>;
    clearMessage   : () => void;
    openMessage    : boolean;
    setOpenMessage : React.Dispatch<React.SetStateAction<boolean>>;
    pagination     : PaginationAttributes;
};

export const useGetAllUser = (): UseGetAllUserReturns => {
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


    const userToken = useAppSelector((state) => state.auth?.token);

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

    const clearMessage = (): void => {
        setMessage("");
        setErrMessage(false);
    };

    const handleGetAllUsers = async (page = 1) => {
        setLoading(true);
        try {
            const res = await getAllUsersAPI(page, pagination?.limit, pagination?.role, pagination?.sort, userToken);
            if (!res.data.success) {
                setMessage(res.data.message);
                setErrMessage(true);
                return;
            };
            setUsers(res.data.data);
            setMessage(res.data.message);
            setErrMessage(false);
            if (res.data.pagination) {
                setPagination((prev) => {
                    if (prev?.currentPage === res.data.pagination?.currentPage && prev?.totalPages === res.data.pagination?.totalPages && prev?.total === res.data.pagination?.total) {
                        return prev
                    };
                    return {
                        ...prev,
                        ...res.data.pagination
                    };
                })
            };
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message ?? "Something went wrong!");
            };
            setErrMessage(true);
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