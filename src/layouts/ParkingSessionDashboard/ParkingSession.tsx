import type { JSX } from "react";
import { SideBar } from "./SideBar";
import { MdMenu } from "react-icons/md";
import type React from "react";
import type { GetParkingSessionAttributes } from "../../types/parkingSessionAttributes/getParkingSessionAttributes";
import type { GetAllParkingSessionsAttributes } from "../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import { ResponseDialog } from "../../components/Modal/ResponseDialog";
import { SearchBar } from "./SearchBar";
import { SessionDetails } from "./SessionDetails";
import { AllParkingSessions } from "./AllParkingSessions";


type ParkingSessionProps = {
    isSideBarOpen      : boolean;
    setIsSideBarOpen   : React.Dispatch<React.SetStateAction<boolean>>;
    selectedSession    : GetParkingSessionAttributes | null;
    setSelectedSession : React.Dispatch<React.SetStateAction<GetParkingSessionAttributes | null>>;
    errMessage         : boolean;
    message            : string;
    isDivOpen          : boolean;
    open               : boolean;
    sessions           : GetAllParkingSessionsAttributes;
    handleDivClick     : () => void;
    handleOnclick      : () => void;
    setIsDivOpen       : React.Dispatch<React.SetStateAction<boolean>>;
    divRef             : React.RefObject<HTMLDivElement | null>
};


export const ParkingSession = ({errMessage, isDivOpen, isSideBarOpen, message, open, selectedSession, sessions, setIsSideBarOpen, setSelectedSession, handleDivClick, handleOnclick, setIsDivOpen, divRef}: ParkingSessionProps):JSX.Element => {
    
    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden mt-[3rem] md:mt-[5rem]">
            {/* Bigger screen */}
            <div className="hidden md:block w-[16rem] max-h-screen">
                <SideBar />
            </div>
            {/* Mobile */}
            <button type="button" className="md:hidden p-2 text-white" onClick={() => setIsSideBarOpen(true)}>
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
            <main className="flex-1 max-h-screen p-4 md:p-8 overflow-y-auto overflow-x-hidden bg-[#3F0E3F]">
                <SearchBar onSelectSession={(session) => {setSelectedSession(session); setIsDivOpen(true)}} sessions={sessions} setSelectedSession={setSelectedSession} />
                <div ref={divRef}>
                    <SessionDetails isDivOpen={isDivOpen} selectedSession={selectedSession} />
                </div>
                <AllParkingSessions sessions={sessions} />
            </main>
            <ResponseDialog divOnClick={handleDivClick} errMessage={errMessage} isOpen={open} message={message} onClick={handleOnclick} />
        </div>
    );
};