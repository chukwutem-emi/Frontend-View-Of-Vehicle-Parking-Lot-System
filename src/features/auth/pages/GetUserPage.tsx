import { useEffect, type ReactNode } from "react";
import { GetUser } from "../components/GetUser";
import { useGetUser } from "../hooks/useGetUser";
import { useSearchParams } from "react-router-dom";



const GetUserPage = (): ReactNode => {
    const [searchParams] = useSearchParams();
    const userId = searchParams.get("userId");
    const id = userId ? Number(userId) : null;

    const {
        errMessage,
        loading,
        message,
        openMessage,
        setOpenMessage,
        user,
        clearMessage,
        handleGetUser : handleGetUserWithId
    } = useGetUser();

     useEffect(() => {
        if (id) {
            handleGetUserWithId(id);
        }
    }, [id]);

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