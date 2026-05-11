import { useEffect, type ReactNode } from "react";
import { useGetParkingSession } from "../hooks/useGetParkingSession";
import { useParams } from "react-router-dom";
import { GetParkingSession } from "../components/GetParkingSession";
import { BigBackgroundSpinner } from "../../../components/BigBackgroundSpinner";




const GetParkingSessionPage = (): ReactNode => {

    const {sessionId} = useParams();
    const id = Number(sessionId);
    const validId = sessionId && !isNaN(id);

    const {
        clearMessage,
        errMessage,
        handleGetParkingSession : handleGetParkingSessionWithId,
        message,
        open,
        openMessage,
        progress,
        setOpenMessage,
        session
    } = useGetParkingSession();

    useEffect(() => {
        if (validId) {
            handleGetParkingSessionWithId(id);
        };
    }, [validId]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const handleOnclick = () => {
        setOpenMessage(false);
        clearMessage();
    };
    
    if (!session) {
        return <BigBackgroundSpinner />
    };
    return (
        <div className="min-h-screen w-full flex flex-col items-stretch justify-center px-4 overflow-x-hidden overflow-y-auto">
            <GetParkingSession 
                errMessage={errMessage}
                handleDivOnclick={handleOnclick}
                handleOnclick={handleOnclick}
                message={message}
                open={open}
                openMessage={openMessage}
                progress={progress}
                session={session}
            />
        </div>
    );
};
export default GetParkingSessionPage;