import type { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { MdMenu } from "react-icons/md";
import type React from "react";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import { ResponseDialog } from "../../components/Modal/ResponseDialog";
import { SearchBar } from "./SearchBar";
import { AllParkingSessions } from "./AllParkingSessions";
import { Description } from "./Description";


type ParkingSessionProps = {
    isSideBarOpen       : boolean;
    setIsSideBarOpen    : React.Dispatch<React.SetStateAction<boolean>>;
    errMessage          : boolean;
    message             : string;
    open                : boolean;
    sessions            : GetAllParkingSessionsAttributes;
    handleDivClick      : () => void;
    handleOnclick       : () => void;
    setFilteredSessions : React.Dispatch<React.SetStateAction<GetAllParkingSessionsAttributes>>;
    filteredSessions    : GetAllParkingSessionsAttributes;
};


export const ParkingSession = ({errMessage, isSideBarOpen, message, open, sessions, setIsSideBarOpen, handleDivClick, handleOnclick, setFilteredSessions, filteredSessions}: ParkingSessionProps): ReactNode => {
    
    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden md:mt-[5rem] bg-[#3F0E3F]">
            {/* Mobile */}
            <button type="button" className="md:hidden w-fit p-2 text-white" onClick={() => setIsSideBarOpen(true)}>
                <MdMenu size={40}/>
            </button>
            {
                isSideBarOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsSideBarOpen(false)} />
                        <div className="absolute top-0 left-0 w-[16rem] [#0E2A22] h-full" onClick={(e) => e.stopPropagation()}>
                            <SideBar />
                        </div>
                    </div>
                )
            }
            <main className="flex-1 max-h-screen p-4 md:p-8 overflow-y-auto overflow-x-hidden">
                <SearchBar sessions={sessions} setFilteredSessions={setFilteredSessions} />
                <Description />
                <AllParkingSessions filteredSessions={filteredSessions} />
            </main>
            <ResponseDialog divOnClick={handleDivClick} errMessage={errMessage} isOpen={open} message={message} onClick={handleOnclick} />
        </div>
    );
};