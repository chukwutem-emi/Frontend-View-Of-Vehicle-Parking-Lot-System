import {useGetAllUser} from "../hooks/useGetAllUsers";
import { GetAllUsers } from "../components/GetAllUsers";
import type { JSX } from "react";


const GetAllUserPage = (): JSX.Element => {

    const {
        errMessage,
        loading,
        message,
        setPagination,
        users,
        clearMessage,
        openMessage,
        setOpenMessage,
        pagination
    } = useGetAllUser();

    const handleDivClick = () => {
        setOpenMessage(false);
        clearMessage();
    };
    const handleOnClick = () => {
        setOpenMessage(false);
        clearMessage();
    };
    return (
        <div className="min-h-screen w-full flex flex-col items-stretch justify-center px-4 overflow-x-hidden">
            <GetAllUsers
            divOnclick={handleDivClick}
            errorMessage={errMessage} 
            isOpen={openMessage}
            loading={loading}
            message={message}
            onClick={handleOnClick}
            pagination={pagination}
            setPagination={setPagination}
            users={users}
            />
        </div>
    );
};
export default GetAllUserPage;