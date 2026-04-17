import { type JSX } from "react";
import { useGetAllParkingSessions } from "../hooks/useGetAllParkingSessions";
import { GetAllParkingSessions } from "../components/GetAllParkingSessions";



const GetAllParkingSessionsPage = (): JSX.Element => {
    const {
        clearMessage,
        errMessage,
        message,
        open,
        openMessage,
        progress,
        sessions,
        setOpenMessage,
        pagination,
        setPagination
    } = useGetAllParkingSessions();

    const handleOnclick = () => {
        setOpenMessage(false);
        clearMessage();
    };
    return (
        <div className="min-h-screen w-full flex flex-col items-stretch justify-center px-4 overflow-x-hidden">
            <GetAllParkingSessions 
            errMessage={errMessage}
            handleDivOnclick={handleOnclick}
            handleOnclick={handleOnclick}
            message={message}
            open={open}
            openMessage={openMessage}
            pagination={pagination}
            progress={progress}
            sessions={sessions}
            setPagination={setPagination}
            />
        </div>
    );
}; 
export default GetAllParkingSessionsPage;