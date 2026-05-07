import type { ReactNode } from "react";
import type { LogoutAttributes } from "../../../types/authAttributes/logoutAttributes";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";


export const Logout = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivClick, handleOnclick, isOpen, message, open, openMessage, progress}: LogoutAttributes): ReactNode => {
    return (
        <div>
            <Dialog 
                divOnCancel={handleDivCancel}
                isOpen={isOpen}
                message="Are you sure you want to logout?"
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                title="Logout"
            />
            <ResponseDialog 
                divOnClick={handleDivClick}
                errMessage={errMessage}
                isOpen={openMessage}
                message={message}
                onClick={handleOnclick}
            />
            <Loader 
                isOpen={open}
                progress={progress}
            />
        </div>
    );
};