import { useState, type ReactNode } from "react";
import type React from "react";
import type { GetUserAttributes } from "../../types/authAttributes/getUserAttributes";
import { useAppSelector } from "../../utils/useAppSelector";
import type { GetAllParkingSlotAttributes } from "../../types/ParkingSlotAttributes/getAllParkingSlotAttributes";
import type { GetParkingSlotAttributes } from "../../types/ParkingSlotAttributes/getParkingSlotAttributes";



type SearchBarProps = {
    slots             : GetAllParkingSlotAttributes;
    onSelectSlot      : (slot: GetParkingSlotAttributes) => void;
    setSelectedSlot   : React.Dispatch<React.SetStateAction<GetParkingSlotAttributes | null>>;
    setFilteredSlots  : React.Dispatch<React.SetStateAction<GetAllParkingSlotAttributes>>;
};



export const SearchBar = ({onSelectSlot, slots, setSelectedSlot, setFilteredSlots}: SearchBarProps): ReactNode => {

    const[query, setQuery]                 = useState("");
    const[show, setShow]                   = useState(false);
    const[localFiltered, setLocalFiltered] = useState<GetAllParkingSlotAttributes>([]);

    const user: GetUserAttributes | null = useAppSelector((state) => state.user.details);

    const handlerSlotInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setQuery(value);
        setShow(true);
        setSelectedSlot(null);

        const filtered = slots?.filter((slot) => slot.slotCode.toLowerCase().includes(value.toLowerCase().trim()));

        setFilteredSlots(filtered);
        setLocalFiltered(filtered);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 mb-6">
            <h2 className="text-lg Md:text-2xl font-bold text-white">Parking Slot Dashboard</h2>
            <div className="relative w-[30rem] flex space-y-4">
                <label htmlFor="slot-search" className="sr-only">Search slot</label>
                <input
                    id="slot-search"
                    name="slot-search"
                    value={query} 
                        onChange={handlerSlotInput}
                    className={`px-4 py-2 rounded-lg outline-none w-[16rem] md:w-[30rem] text-xs md:text-sm ${!user?.isAdmin ? "cursor-not-allowed" : "cursor-default"}`}
                    placeholder="Search for slots to get their full details.."
                    disabled={!user?.isAdmin}
                    title="Only admin users can search for all parking slots."
                />
                {
                    show && query && (
                        <ul className="absolute top-full w-full bg-white text-black rounded mt-1 shadow-lg z-50 font-sans font-semibold">
                            {
                                localFiltered.length > 0 ? (
                                    localFiltered.map((slot) => (
                                        <li 
                                        key={slot.id}
                                        onClick={() => {
                                            setQuery(slot.slotCode);
                                            onSelectSlot(slot);
                                            setShow(false);
                                        }}
                                        className="px-4 py-2 hover:bg-blue-500/20 cursor-pointer text-xs md:text-sm"
                                        >
                                            {slot.slotCode}
                                        </li>
                                    ))
                                ) : (
                                    <p className="px-4 py-2 text-gray-500">Parking slot not found!</p>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    );
};