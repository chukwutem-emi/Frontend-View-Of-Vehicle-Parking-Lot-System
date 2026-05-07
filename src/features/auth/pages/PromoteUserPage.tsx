import {usePromoteUser} from "../hooks/usePromoteUser";
import {PromoteUser} from "../components/PromoteUser";
import { useEffect, useState, type ReactNode } from "react";
import { useParams } from "react-router";



const PromoteUserPage = (): ReactNode => {
    const {userId} = useParams();

    const id = Number(userId);
    const validId = userId && !isNaN(id);

    const[openMessage, setOpenMessage] = useState(false);
    const[isOpen, setIsOpen]           = useState(false);

    const {
        clearMessage,
        errMessage,
        handlePromoteUser : handlePromoteUserWithId,
        message,
        open,
        progress
    } = usePromoteUser();

    useEffect(() => {
        if (validId) {
            setIsOpen(true);
        };
    }, [validId]);

    useEffect(() => {
        if (message) {
            setOpenMessage(true);
        };
    }, [message]);

    const handleConfirm = () => {
        if (validId) {
            handlePromoteUserWithId(id);
        };
        setIsOpen(false);
    };
    
    const handleCancel = () => setIsOpen(false);

    const handleOnClick = () => {
        setOpenMessage(false);
        clearMessage();
    };

    return (
        <div className="overflow-x-hidden overflow-y-auto w-full">
            <PromoteUser 
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
}; export default PromoteUserPage;