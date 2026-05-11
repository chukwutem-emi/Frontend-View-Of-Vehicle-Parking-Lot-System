import { useEffect, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useGetParkingSession } from "../../features/parkingSession/hooks/useGetParkingSession";
import { SessionDetails } from "./SessionDetails";
import { ResponseDialog } from "../../components/Modal/ResponseDialog";
import { Loader } from "../../components/Loader";



const SessionDetailsPage = (): ReactNode => {
    const {sessionId} = useParams();
    const id = Number(sessionId);
    const validId = sessionId && !isNaN(id);

    const {
        clearMessage,
        errMessage,
        handleGetParkingSession : handleGetParkingSessionWithId,
        message,
        open,
        progress,
        session,
        openMessage,
        setOpenMessage
    } = useGetParkingSession();

    useEffect(() => {
        if (validId) {
            handleGetParkingSessionWithId(id);
        }
    }, [validId]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const handleOnclick = (): void => {
        clearMessage();
        setOpenMessage(false);
    };

    if (open) {
        return <Loader isOpen={open} progress={progress} />;
    }

    if (!session) {
        return <p>No session found</p>
    };

    return(
        <div className="min-h-screen w-full flex flex-col items-stretch justify-center px-4 overflow-x-hidden">
            <SessionDetails session={session} />
            <ResponseDialog
                divOnClick={handleOnclick}
                errMessage={errMessage}
                isOpen={openMessage}
                message={message}
                onClick={handleOnclick} 
            />
        </div>
    );
}; 
export default SessionDetailsPage;