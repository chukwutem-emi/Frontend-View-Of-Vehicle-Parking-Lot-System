import type { ReactNode } from "react";
import { SideBar } from "./SideBar";
import { MdMenu } from "react-icons/md";
import { ResponseDialog } from "../../components/Modal/ResponseDialog";
import { SearchBar } from "./SearchBar";
import type { GetAllLoggedInDevicesProps } from "../../types/userDevices/getAllLoggedInDevicesAttributes";
import { AllLoggedInDevices } from "./AllDevices";
import { Loader } from "../../components/Loader";
import { Description } from "./Description";






export const UserDevice = ({devices, divOnclick, errMessage, filteredDevices, handleOnclick, isSideBarOpen, message, open, openMessage, progress, setFilteredDevices, setIsSideBarOpen}: GetAllLoggedInDevicesProps): ReactNode => {
    
    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden md:mt-[5rem] bg-violet-600">
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
                <SearchBar devices={devices} setFilteredDevices={setFilteredDevices} />
                <Description />
                <AllLoggedInDevices filteredDevices={filteredDevices} />
            </main>
            <ResponseDialog divOnClick={divOnclick} errMessage={errMessage} isOpen={openMessage} message={message} onClick={handleOnclick} />
            <Loader isOpen={open} progress={progress}/>
        </div>
    );
};