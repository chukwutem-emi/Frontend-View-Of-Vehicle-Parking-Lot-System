import { useEffect, useState, type ReactNode } from "react";
import {DemoteUser} from "../components/DemoteUser";
import {useDemoteUser} from "../hooks/useDemoteUser";
import { useParams } from "react-router";



const DemoteUserPage = (): ReactNode => {
    const {userId} = useParams();

    const id = Number(userId);
    const validId = userId && !isNaN(id);

    const[openMessage, setOpenMessage] = useState(false);
    const[isOpen, setIsOpen]           = useState(false);
    
    const {
        clearMessage,
        errMessage,
        handleDemoteUser : handleDemoteUserWithId,
        message,
        open,
        progress
    } = useDemoteUser();

    useEffect(() => {
        if (validId) {
            setIsOpen(true);
        };
    }, [validId]);

    if (!validId) return null;

    useEffect(() => {
        if (message) {
            setOpenMessage(true)
        };
    }, [message]);

    const handleConfirm = () => {
        if (userId) {
            handleDemoteUserWithId(id);
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
            <DemoteUser 
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
export default DemoteUserPage;