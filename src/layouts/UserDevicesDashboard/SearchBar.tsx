import { useState, type ReactNode } from "react";
import type React from "react";
import type { GetUserAttributes } from "../../types/authAttributes/getUserAttributes";
import { useAppSelector } from "../../utils/useAppSelector";
import { Link } from "react-router-dom";
import type { GetAllLoggedInDevicesAttributes } from "../../types/userDevices/getAllLoggedInDevicesAttributes";



type SearchBarProps = {
    devices            : GetAllLoggedInDevicesAttributes;
    setFilteredDevices : React.Dispatch<React.SetStateAction<GetAllLoggedInDevicesAttributes>>;
};

export const SearchBar = ({devices, setFilteredDevices}: SearchBarProps): ReactNode => {

    const[query, setQuery]                 = useState("");
    const[show, setShow]                   = useState(false);
    const[localFiltered, setLocalFiltered] = useState<GetAllLoggedInDevicesAttributes>([]);

    const user: GetUserAttributes | null = useAppSelector((state) => state.user.details);

    const handlerDeviceDataInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.trim().toLowerCase();
        setQuery(value);
        setShow(true);

        const filtered = devices?.filter((device) => 
            device.userId.toString().includes(value) ||
            device.deviceLabel.toLowerCase().includes(value) ||
            device.location.toLowerCase().includes(value) 
        );

        setFilteredDevices(filtered);
        setLocalFiltered(filtered);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-5 mb-6">
            <h2 className="text-lg Md:text-2xl font-bold text-white">Dashboard</h2>
            <div className="relative w-[30rem] flex space-y-4">
                <label htmlFor="device-search" className="sr-only">Search device</label>
                <input
                    id="device-search"
                    name="device-search"
                    value={query} 
                    onChange={handlerDeviceDataInput}
                    className={`px-4 py-2 rounded-lg outline-none w-[16rem] md:w-[30rem] text-xs md:text-sm ${!user?.isAdmin ? "cursor-not-allowed" : "cursor-default"}`}
                    placeholder="Search for devices to get their full details.."
                    disabled={!user?.isAdmin}
                    title="Only super-admin user can search for all logged-in devices."
                />
                {
                    show && query && (
                        <ul className="absolute top-full w-full bg-white text-black rounded mt-1 shadow-lg z-50 font-sans font-semibold">
                            {
                                localFiltered.length > 0 ? (
                                    localFiltered.map((device) => (
                                    <Link to={`/parking/session-details/${device.id}`} key={device.id}>
                                        <li 
                                        onClick={() => {
                                            setQuery(device.id.toString() || device.deviceLabel || device.ip || device.location);
                                            setShow(false);
                                        }}
                                        className="px-4 py-2 hover:bg-blue-500/20 cursor-pointer text-xs md:text-sm"
                                        >
                                            {device.userId || device.deviceLabel || device.location}
                                        </li>
                                    </Link>
                                    ))
                                ) : (
                                    <p className="px-4 py-2 text-gray-500">Device not found!</p>
                                )
                            }
                        </ul>
                    )
                }
            </div>
        </div>
    );
};