import type { ReactNode } from "react";
import type { GetAllParkingSlotAttributes } from "../../types/ParkingSlotAttributes/getAllParkingSlotAttributes";
import type { GetParkingSlotAttributes } from "../../types/ParkingSlotAttributes/getParkingSlotAttributes";
import { SideBar } from "./SideBar";
import type React from "react";
import { MdMenu } from "react-icons/md";
import { SearchBar } from "./SearchBar";
import { ResponseDialog } from "../../components/Modal/ResponseDialog";
import { Description } from "./Description";
import { SlotDetails } from "./SlotDetails";
import { AllParkingSlots } from "./AllParkingSlot";



type ParkingSlotProps = {
    isSideBarOpen        : boolean;
    setIsSideBarOpen     : React.Dispatch<React.SetStateAction<boolean>>;
    selectedSlot         : GetParkingSlotAttributes | null;
    setSelectedSlot      : React.Dispatch<React.SetStateAction<GetParkingSlotAttributes | null>>;
    errMessage           : boolean;
    message              : string;
    isDivOpen            : boolean;
    open                 : boolean;
    filteredSlots        : GetAllParkingSlotAttributes;
    handleDivClick       : () => void;
    handleOnclick        : () => void;
    setIsDivOpen         : React.Dispatch<React.SetStateAction<boolean>>;
    divRef               : React.RefObject<HTMLDivElement | null>;
    setFilteredSlots     : React.Dispatch<React.SetStateAction<GetAllParkingSlotAttributes>>;
    slots                : GetAllParkingSlotAttributes;
};



export const ParkingSlot = ({divRef, errMessage, handleDivClick, handleOnclick, isDivOpen, isSideBarOpen, message, open, selectedSlot, setIsDivOpen, setIsSideBarOpen, setSelectedSlot, setFilteredSlots, filteredSlots, slots}: ParkingSlotProps): ReactNode => {
    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden md:mt-[5rem] bg-[#0F172A]">
            {/* Mobile view */}
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
                <SearchBar onSelectSlot={(slot) => {setSelectedSlot(slot); setIsDivOpen(true)}} setSelectedSlot={setSelectedSlot} slots={slots} setFilteredSlots={setFilteredSlots} />
                <div ref={divRef}>
                    <SlotDetails 
                        isDivOpen={isDivOpen}
                        selectedSlot={selectedSlot}
                    />
                </div>
                <Description />
                <AllParkingSlots 
                    filteredSlots={filteredSlots}
                />
            </main>
            <ResponseDialog 
                divOnClick={handleDivClick}
                errMessage={errMessage}
                isOpen={open}
                message={message}
                onClick={handleOnclick}
            />
        </div>
    );
};