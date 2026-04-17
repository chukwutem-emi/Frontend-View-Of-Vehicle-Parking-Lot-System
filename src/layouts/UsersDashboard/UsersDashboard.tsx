import type {GetAllUsersAttributes} from "../../types/authAttributes/getAllUsersAttributes";
import {apiClient} from "../../services/apiClient";
import { useEffect, useRef, useState, type JSX } from "react";
import {BigBackgroundSpinner} from "../../components/BigBackgroundSpinner";
import { useSelector } from "react-redux";
import { SearchBar } from "./SearchBar";
import { UserDetails } from "./UserDetails";
import type { GetUserAttributesWithUnderScore } from "../../types/authAttributes/getUserAttributes";
import { SideBar } from "./SideBar";
import {ResponseDialog} from "../../components/Modal/ResponseDialog";
import { AllUsers } from "./AllUsers";
import { MdMenu } from "react-icons/md";




const UsersDashboard = (): JSX.Element => {
    const[users, setUsers]                         = useState<GetAllUsersAttributes>([]);
    const[message, setMessage]                     = useState("");
    const[errMessage, setErrMessage]               = useState(false);
    const[backgroundLoading, setBackgroundLoading] = useState(true);
    const[selectedUser, setSelectedUser]           = useState<GetUserAttributesWithUnderScore | null>(null);
    const[isDivOpen, setIsDivOpen]                 = useState(false);
    const[open, setOpen]                           = useState(false);
    const[isSideBarOpen, setIsSideBarOpen]         = useState(false);

    const divRef = useRef<HTMLDivElement>(null);

    const userToken = useSelector((store: any) => store.token?.getToken);



    const getAllUsers = async () => {
        try {
            const response = await apiClient("/auth/users", {
                headers: {
                    "Authorization": `Bearer ${userToken}`
                },
                method: "GET"
            });
            if (response.status === 200) {
                setMessage("Users retrieved successfully.");
                setUsers(response.data?.data || response.data?.usersDetails || []);
                setErrMessage(false);
            } else {
                const [key] = Object.keys(response.data);
                setMessage(response.data[key ?? "An error has occurred!"]);
                setErrMessage(true);
            };
        } catch (err: any) {
            setErrMessage(true);
            setMessage(err.message);
        }
    };
    const handleClickOutside = (e: MouseEvent) => {
        if (divRef.current && !divRef.current.contains(e.target as Node)) {
            setIsDivOpen(false);
        };
    };
    useEffect(() => {
        if (userToken) {
            getAllUsers();
        };
        window.addEventListener("mousedown", handleClickOutside);
        const interval = setInterval(() => {
            getAllUsers();
        }, 1800000);
        const timer = setTimeout(() => {
            setBackgroundLoading(false);
        }, 3000);
        return () => {
            clearInterval(interval);
            clearTimeout(timer);
            window.removeEventListener("mousedown", handleClickOutside);
        };
    }, [userToken]);

    useEffect(() => {
        if (message) {
            setOpen(true);
        };
    }, [message]);

    const clearMessage = () => {
        setMessage("");
        setErrMessage(false);
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
                <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden mt-[3rem] md:mt-[5rem]">
                    {/* Bigger screen */}
                    <div className="hidden md:block w-[16rem] max-h-screen">
                           <SideBar />
                    </div>
                    {/* Mobile */}
                    <button type="button" className="md:hidden p-2 text-white" onClick={() => setIsSideBarOpen(true)}>
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
                    <main className="flex-1 max-h-screen p-4 md:p-8 overflow-y-auto overflow-x-hidden bg-[#0B4F4F]">
                        <SearchBar users={users} setSelectedUser={setSelectedUser} onSelectUser={(user) => {setSelectedUser(user); setIsDivOpen(true)}}/>
                        <div ref={divRef}>
                            <UserDetails selectedUser={selectedUser} isDivOpen={isDivOpen} />
                        </div>
                        <AllUsers users={users} />
                    </main>
                    <ResponseDialog divOnClick={handleDivClick} errMessage={errMessage} isOpen={open} message={message} onClick={handleOnClick} />
                </div>
            )
         }
        </>
    );
};
export default UsersDashboard;