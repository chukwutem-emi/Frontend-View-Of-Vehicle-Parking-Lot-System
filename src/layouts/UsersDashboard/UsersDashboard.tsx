import type {GetAllUsersAttributes} from "../../types/authAttributes/getAllUsersAttributes";
import {apiClient} from "../../services/apiClient";
import { useEffect, useState, type ReactNode } from "react";
import {BigBackgroundSpinner} from "../../components/BigBackgroundSpinner";
import { SearchBar } from "./SearchBar";
import { SideBar } from "./SideBar";
import {ResponseDialog} from "../../components/Modal/ResponseDialog";
import { AllUsers } from "./AllUsers";
import { MdMenu } from "react-icons/md";
import type { APIResponse } from "../../features/auth/APIs/getAllUsersAPI";
import { useAppSelector } from "../../utils/useAppSelector";
import { Description } from "./Description";



const UsersDashboard = (): ReactNode => {
    const[users, setUsers]                         = useState<GetAllUsersAttributes>([]);
    const[message, setMessage]                     = useState("");
    const[errMessage, setErrMessage]               = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(true);
    const[open, setOpen]                           = useState(false);
    const[isSideBarOpen, setIsSideBarOpen]         = useState(false);
    const[filteredUsers, setFilteredUsers]         = useState<GetAllUsersAttributes>([]);


    const userToken = useAppSelector((state) => state.auth.token);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
    };
    
    useEffect(() => {
        if (userToken) {
            getAllUsers();
        };
        const interval = setInterval(() => {
            getAllUsers();
        }, 1800000);
        const timer = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
        };
    }, [userToken]);

    useEffect(() => {
        if (message) {
            setOpen(true);
        };
    }, [message]);

    const getAllUsers = async () => {
        try {
            const response = await apiClient<APIResponse>("/auth/users", {
                headers: {
                    "Authorization": `Bearer ${userToken}`
                },
                method: "GET"
            });
            if (!response.data.success) {
                setMessage(response.data.message);
                setErrMessage(true);
                return;
            };
            setMessage(response.data.message);
            setUsers(response.data.data);
            setFilteredUsers(response.data.data);
            setErrMessage(false);
        } catch (err: unknown) {
            if (err instanceof Error) {
                setMessage(err.message);
            };
            setErrMessage(true);
        }
    };

    const handleDivClick = () => {
        setOpen(false);
        clearMessage();
    };
    const handleOnClick = () => {
        setOpen(false);
        clearMessage();
    };
    return (
        <>
         {
            backgroundLoading ? (
                <BigBackgroundSpinner />
            ) : (
                <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden md:mt-[5rem] bg-[#0B4F4F]">
                    {/* Mobile */}
                    <button type="button" className="md:hidden w-fit p-2 text-white" onClick={() => setIsSideBarOpen(true)}>
                        <MdMenu size={40}/>
                    </button>
                    {
                        isSideBarOpen && (
                            <div className="fixed inset-0 z-50 md:hidden">
                                <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsSideBarOpen(false)} />
                                <div className="absolute top-0 left-0 w-[16rem] [#0E2A22] h-full" onClick={(e) => e.stopPropagation()}>
                                    <SideBar />
                                </div>
                            </div>
                        )
                    }
                    <main className="flex-1 max-h-screen p-4 md:p-8 overflow-y-auto overflow-x-hidden">
                        <SearchBar users={users} setFilteredUsers={setFilteredUsers}/>
                        <Description />
                        <AllUsers filteredUsers={filteredUsers} />
                    </main>
                    <ResponseDialog divOnClick={handleDivClick} errMessage={errMessage} isOpen={open} message={message} onClick={handleOnClick} />
                </div>
            )
         }
        </>
    );
};
export default UsersDashboard;