import { useEffect, useState, type ReactNode } from "react";
import { useGetAllLoggedInDevices } from "../../features/userDevice/hooks/useGetAllLoggedInDevices";
import { BigBackgroundSpinner } from "../../components/BigBackgroundSpinner";
import { UserDevice } from "./UserDevice";





const UserDevicesDashboard = (): ReactNode => {

    const [backgroundLoading, setBackgroundLoading] = useState(true);
    const [isSideBarOpen, setIsSideBarOpen]         = useState(false);

    const {
        clearMessage,
        devices,
        errMessage,
        filteredDevices,
        message,
        open,
        openMessage,
        progress,
        setFilteredDevices,
        handleGetAllLoggedInDevices : handleGetAllDevices,
        setOpenMessage
    } = useGetAllLoggedInDevices();

    useEffect(() => {
        handleGetAllDevices();

        const interval = setInterval(() => {
            handleGetAllDevices();
        }, 1800000);

        const timeOut = setTimeout(() => {
            setBackgroundLoading(false);
        }, 1000);

        return () => {
            clearInterval(interval);
            clearTimeout(timeOut);
        };

    }, []);

    const handleOnClick = () => {
        clearMessage();
        setOpenMessage(false);
    };
    
    return (
        <>
        {
            backgroundLoading ? (
                <BigBackgroundSpinner />
            ) : (
                <UserDevice 
                    devices={devices}
                    divOnclick={handleOnClick}
                    errMessage={errMessage}
                    filteredDevices={filteredDevices}
                    handleOnclick={handleOnClick}
                    isSideBarOpen={isSideBarOpen}
                    message={message}
                    open={open}
                    openMessage={openMessage}
                    progress={progress}
                    setFilteredDevices={setFilteredDevices}
                    setIsSideBarOpen={setIsSideBarOpen}
                />
            )
        }
        </>
    );
};
export default UserDevicesDashboard;