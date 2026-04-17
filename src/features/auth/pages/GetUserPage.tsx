import type { JSX } from "react";
import { BigBackgroundSpinner } from "../../../components/BigBackgroundSpinner";
import { GetUser } from "../components/GetUser";
import { useGetUser } from "../hooks/useGetUser";



const GetUserPage = (): JSX.Element => {
    const {
        errMessage,
        loading,
        message,
        openMessage,
        setOpenMessage,
        user,
        clearMessage
    } = useGetUser();

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
            <GetUser
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
export default GetUserPage;