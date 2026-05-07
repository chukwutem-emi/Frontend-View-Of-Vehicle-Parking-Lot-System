import { type ReactNode } from "react";
import { useGetAllParkingSessions } from "../hooks/useGetAllParkingSessions";
import { GetAllParkingSessions } from "../components/GetAllParkingSessions";



const GetAllParkingSessionsPage = (): ReactNode => {
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
        <div className="min-h-screen w-full overflow-x-hidden my-[6rem]">
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