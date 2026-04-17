import type { JSX } from "react";
import type {DemoteUserAttributes} from "../../../types/authAttributes/demoteUserAttributes";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";



export const DemoteUser = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivClick, handleOnclick, isOpen, message, open, openMessage, progress}: DemoteUserAttributes): JSX.Element => {
    return (
        <div className="mx-auto">
            <Dialog 
                divOnCancel={handleDivCancel}
                isOpen={isOpen}
                message="Are you sure you want to demote this user?"
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                title="Demote"
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