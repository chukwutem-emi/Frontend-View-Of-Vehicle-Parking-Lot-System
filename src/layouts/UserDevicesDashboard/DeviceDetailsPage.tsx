import { useEffect, type ReactNode } from "react";
import { useParams } from "react-router-dom";
import { DeviceDetails } from "./DevicesDetails";
import { ResponseDialog } from "../../components/Modal/ResponseDialog";
import { Loader } from "../../components/Loader";
import { useGetLoggedInDevice } from "../../features/userDevice/hooks/useGetLoggedInDevice";




const DeviceDetailsPage = (): ReactNode => {
    const {userId} = useParams();
    const id = Number(userId);
    const validId = userId && !isNaN(id);

    const {
        clearMessage,
        errMessage,
        handleGetLoggedInDevice : handleGetLoggedInDeviceWithId,
        message,
        open,
        progress,
        device,
        openMessage,
        setOpenMessage
    } = useGetLoggedInDevice();

    useEffect(() => {
        if (validId) {
            handleGetLoggedInDeviceWithId(id);
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

    if (!device) {
        return <p>No device found</p>
    };

    return(
        <div className="min-h-screen w-full flex flex-col items-stretch justify-center px-4 overflow-x-hidden">
            <DeviceDetails device={device} />
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
export default DeviceDetailsPage;