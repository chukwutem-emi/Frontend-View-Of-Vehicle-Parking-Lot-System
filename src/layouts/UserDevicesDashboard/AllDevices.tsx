import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import type { GetAllLoggedInDevicesAttributes } from "../../types/userDevices/getAllLoggedInDevicesAttributes";


type AllLoggedInDevicesProps = {
    filteredDevices : GetAllLoggedInDevicesAttributes;
};

export const AllLoggedInDevices = ({filteredDevices}: AllLoggedInDevicesProps): ReactNode => {
    return (
        <div className="my-[4rem] text-white">
            <h2 className="font-sans text-center mb-10 font-bold text-lg md:xl">LoggedIn Devices</h2>
            {
                filteredDevices.length > 0 ? (
                    <ul className="grid md:grid-cols-2 grid-col-1 gap-4 items-center justify-items-center">
                        {
                            filteredDevices.map((device) => (
                                <Link to={`/auth/device-details/${device.id}`} key={device.id} className="w-[80%] flex-shrink-0 ">
                                    <li className="font-sans text-sm bg-violet-950 border border-cyan-600 shadow-2xl z-50 break-words p-6 font-bold">
                                        <p className="text-white">{device?.ip}</p>
                                        <p className="text-gray-400 mt-[1rem]">{device?.location}</p>
                                        <p className="text-gray-400 mt-[1rem]">{device?.userAgent}</p>
                                        <p className="text-gray-400 mt-[1rem]">{device?.loginTime}</p>
                                        <p className="text-gray-400 mt-[1rem]">{device?.userId}</p>
                                    </li>
                                </Link>
                            ))
                        }
                    </ul>
                ) : (
                    <p className="text-center items-center font-sans text-sm md:text-lg">No logged-in devices found!</p>
                )
            }
        </div>
    );
};