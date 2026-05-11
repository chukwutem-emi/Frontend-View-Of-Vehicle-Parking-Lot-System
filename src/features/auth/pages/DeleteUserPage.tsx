import {useDeleteUser} from "../hooks/useDeleteUser";
import {DeleteUser} from "../components/DeleteUser";
import { useEffect, useState, type ReactNode } from "react";
import { useParams } from "react-router-dom";


const DeleteUserPage = (): ReactNode => {
    const {userId} = useParams();


    const id = Number(userId);
    const validId = userId && !isNaN(id);

    const[openMessage, setOpenMessage] = useState(false);
    const[isOpen, setIsOpen]           = useState(false);

    const {
        clearMessage,
        errMessage,
        handleDeleteUser: handleDeleteUserWithId,
        message,
        open,
        progress
    } = useDeleteUser();

    useEffect(() => {
        if (validId) {
            setIsOpen(true);
        };
    }, [validId]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true)
        };
    }, [message]);

    if (!validId) return null

    const handleConfirm = () => {
        if (userId) {
            handleDeleteUserWithId(id);
        };
        setIsOpen(false);
    };
    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleOnClick = () => {
        clearMessage();
        setOpenMessage(false);
    };

    return (
        <div className="overflow-x-hidden overflow-y-auto w-full">
            <DeleteUser
                errMessage={errMessage}
                handleCancel={handleCancel}
                handleConfirm={handleConfirm} 
                handleDivCancel={handleCancel}
                handleDivClick={handleOnClick}
                handleOnclick={handleOnClick}
                isOpen={isOpen}
                message={message}
                open={open}
                openMessage={openMessage}
                progress={progress}
            />
        </div>
    );
};
export default DeleteUserPage;