import type { JSX } from "react";
import type {DeleteUserAttributes} from "../../../types/authAttributes/deleteUserAttributes";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";



export const DeleteUser = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivClick, handleOnclick, isOpen, message, open, openMessage, progress}: DeleteUserAttributes): JSX.Element => {
    return (
        <div className="mx-auto">
            <Dialog 
                divOnCancel={handleDivCancel}
                isOpen={isOpen}
                message="Are you sure you want to delete this user?"
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                title="Delete"
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