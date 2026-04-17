import {useDeleteUser} from "../hooks/useDeleteUser";
import {DeleteUser} from "../components/DeleteUser";
import { useEffect, useState, type JSX } from "react";
import { useParams } from "react-router";


const DeleteUserPage = (): JSX.Element => {
    const {userId} = useParams();

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
        if (userId) {
            setIsOpen(true);
        };
    }, [userId]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true)
        };
    }, [message]);

    const handleConfirm = () => {
        if (userId) {
            handleDeleteUserWithId(userId);
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