import { useEffect, type ReactNode } from "react";
import { BigBackgroundSpinner } from "../../../components/BigBackgroundSpinner";
import { useGetCurrentUser } from "../hooks/useGetCurrentUser";
import { GetCurrentUser } from "../components/GetCurrentUser";



const GetCurrentUserPage = (): ReactNode => {
    const {
        errMessage,
        loading,
        message,
        openMessage,
        setOpenMessage,
        user,
        clearMessage,
        handleGetCurrentUser : handleGetCurrentUser
    } = useGetCurrentUser();

     useEffect(() => {
        handleGetCurrentUser();
    }, []);

    const handleDivClick = () => {
        setOpenMessage(false);
        clearMessage();
    };
    const handleOnClick = () => {
        setOpenMessage(false);
        clearMessage();
    };
    if (!user) {
        return <BigBackgroundSpinner />
    };
    return (
        <div className="min-h-screen w-full flex flex-col items-stretch justify-center px-4 overflow-x-hidden">
            <GetCurrentUser
            divOnclick={handleDivClick} 
            errorMessage={errMessage}
            isOpen={openMessage}
            loading={loading}
            message={message}
            onClick={handleOnClick}
            user={user}
            />
        </div>
    );
}; 
export default GetCurrentUserPage;