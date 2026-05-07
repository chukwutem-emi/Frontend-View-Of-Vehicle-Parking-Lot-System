import type { ReactNode } from "react";
import type {PromoteUserAttributes} from "../../../types/authAttributes/promoteUserAttributes";
import { Dialog } from "../../../components/Modal/Dialog";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";



export const PromoteUser = ({errMessage, handleCancel, handleConfirm, handleDivCancel, handleDivClick, handleOnclick, isOpen, message, open, openMessage, progress}: PromoteUserAttributes): ReactNode => {
    return (
        <div className="mx-auto">
            <Dialog 
                divOnCancel={handleDivCancel}
                isOpen={isOpen}
                message="Are you sure you want to promote this user?"
                onCancel={handleCancel}
                onConfirm={handleConfirm}
                title="Promote user"
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