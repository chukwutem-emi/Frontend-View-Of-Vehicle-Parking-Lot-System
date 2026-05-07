import type { ReactNode } from "react";
import { FetchVehicleType } from "../../features/vehicleType/components/FetchVehicleType";
import type React from "react";
import type { FetchVehicleTypeAttributes } from "../../types/vehicleTypeAttributes/fetchVehicleTypeAttribute";
import { SideBar } from "./SideBar";
import { MdMenu } from "react-icons/md";
import { Description } from "./Description";


type VehicleTypePropsAttributes = {
    handleVehicleTypeSearchForm : (e: React.SyntheticEvent<HTMLFormElement>) => void;
    handleDivOnClick            : React.MouseEventHandler<HTMLDivElement>;
    handleOnClick               : React.MouseEventHandler<HTMLButtonElement>;
    errMessage                  : boolean;
    isDivOpen                   : boolean;
    loading                     : boolean;
    message                     : string;
    open                        : boolean;
    openMessage                 : boolean;
    progress                    : number;
    setValue                    : React.Dispatch<React.SetStateAction<string>>;
    value                       : string;
    vehicle                     : FetchVehicleTypeAttributes | null;
    isSideBarOpen               : boolean;
    setIsSideBarOpen            : React.Dispatch<React.SetStateAction<boolean>>;
    divRef                      : React.RefObject<HTMLDivElement | null>
};

export const VehicleType = ({errMessage, handleDivOnClick, handleOnClick, handleVehicleTypeSearchForm, isDivOpen, loading, message, open, openMessage, progress, setValue, value, vehicle, isSideBarOpen, setIsSideBarOpen, divRef
}: VehicleTypePropsAttributes): ReactNode => {

    return (
        <div className="flex flex-col md:flex-row h-screen w-full overflow-x-hidden mt-[3rem] md:mt-[5rem] bg-green-700">
            {/* Bigger screen */}
            <div className="hidden md:block w-[16rem] max-h-screen">
                <SideBar />
            </div>
            {/* Mobile View */}
            <button type="button" className="md:hidden w-fit p-2 text-white" onClick={() => setIsSideBarOpen(true)}>
                <MdMenu size={40} />
            </button>
            {
                isSideBarOpen && (
                    <div className="fixed inset-0 z-50 md:hidden">
                        <div className="absolute inset-0 bg-black opacity-80" onClick={() => setIsSideBarOpen(false)}>
                            <div className="absolute top-0 left-0 w-[16rem] [#0E2A22] h-full" onClick={(e) => e.stopPropagation()}>
                                <SideBar />
                            </div>
                        </div>
                    </div>
                )
            }
            <main className="flex-1 max-h-screen p-4 md:p-8 overflow-y-auto overflow-x-hidden">
                <FetchVehicleType 
                    errMessage={errMessage}
                    handleDivOnClick={handleDivOnClick}
                    handleOnClick={handleOnClick}
                    handleVehicleTypeSearchForm={handleVehicleTypeSearchForm}
                    isDivOpen={isDivOpen}
                    loading={loading}
                    message={message}
                    open={open}
                    openMessage={openMessage}
                    progress={progress}
                    setValue={setValue}
                    value={value}
                    vehicle={vehicle}
                    divRef={divRef}
                />
                <Description />
            </main>
        </div>
    );
};