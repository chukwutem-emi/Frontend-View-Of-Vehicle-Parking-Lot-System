import { useLogout } from "../hooks/useLogout";
import { Logout } from "../components/Logout";
import type { ReactNode } from "react";


const LogoutPage = (): ReactNode => {
    const {
        clearMessage,
        errMessage,
        handleLogout : handleLogoutDetails,
        isOpen,
        message,
        open,
        openMessage,
        progress,
        setIsOpen,
        setOpen,
        setOpenMessage,
    } = useLogout();

    const handleConfirm = () => {
        if (isOpen) {
            handleLogoutDetails();
        };
        setIsOpen(false);
    };

    const handleCancel = () => setIsOpen(false);

    const handleOnclick = () => {
        clearMessage();
        setOpenMessage(false);
        setOpen(false);
    };
    return (
        <div className="overflow-x-hidden overflow-y-auto">
            <Logout 
                errMessage={errMessage}
                handleCancel={handleCancel}
                handleConfirm={handleConfirm}
                handleDivCancel={handleConfirm}
                handleDivClick={handleOnclick}
                handleOnclick={handleOnclick}
                isOpen={isOpen}
                message={message}
                open={open}
                openMessage={openMessage}
                progress={progress}
            />
        </div>
    );
};
export default LogoutPage;