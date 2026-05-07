import type { GetLoggedInDeviceAttributes } from "../../types/userDevices/getLoggedInDeviceAttributes";



type DeviceDetailsProps = {
    device         : GetLoggedInDeviceAttributes | null;
};

export const DeviceDetails = ({device}: DeviceDetailsProps) => {
    if (!device) return null;
    const details = [
        { label: "ID", value: device.id},
        { label: "User ID", value: device.userId },
        { label: "Device Label", value: device.deviceLabel },
        { label: "IP Address", value: device.ip },
        { label: "User Agent", value: device.userAgent },
        { label: "Location", value: device.location },
        { label: "Login Time", value: device.loginTime },
    ];
    return (
        <div className="w-full">
            <div className="p-6 bg-white shadow-lg rounded w-[90%] md:w-[70%] mx-auto overflow-y-auto h-[30rem]">
                <h2 className="font-sans text-center mb-10 font-bold text-lg md:xl">Device Details</h2>
                {
                    details.map((item, index) => (
                        <div key={index} className="grid grid-cols-2 border-b pb-2 text-sm gap-10">
                            <span className="font-sans font-semibold text-green-600">   {item.label}:</span>
                            <span className="font-sans text-gray-700">{item.value}</span>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};