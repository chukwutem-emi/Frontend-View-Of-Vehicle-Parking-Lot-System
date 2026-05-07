import type { ReactNode } from "react";
import type { FetchVehicleTypeFormProps } from "../../../types/vehicleTypeAttributes/fetchVehicleTypeAttribute";
import type { GetUserAttributes } from "../../../types/authAttributes/getUserAttributes";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import "../../../styles/vehicleTypeCss/fetchVehicleType.css";
import { VehicleDetails } from "./VehicleDetails";
import { useAppSelector } from "../../../utils/useAppSelector";
import { ButtonSpinner } from "../../../components/Button/ButtonSpinner";




export const FetchVehicleType = ({errMessage, handleDivOnClick, handleOnClick, handleVehicleTypeSearchForm, loading, message, open, openMessage, progress, setValue, value, vehicle, isDivOpen, divRef}: FetchVehicleTypeFormProps): ReactNode => {

    const user: GetUserAttributes | null = useAppSelector((state) => state.user.details);

    return (
        <>
        <form onSubmit={handleVehicleTypeSearchForm} className="form">
            <div className="flex flex-row gap-3 w-full justify-center items-center">
                <label htmlFor="vehicleType" className="sr-only">Vehicle Type:</label>
                <input 
                    type="text"
                    id="vehicleType"
                    name="vehicleType"
                    value={value}
                    onChange={(e) => {
                        setValue(e.target.value);
                    }}
                    placeholder="Search for a vehicle type..."
                    className={`px-4 py-2 border border-yellow-700 rounded-lg outline-none w-1/2 text-xs md:text-sm ${!user?.isAdmin ? "cursor-not-allowed" : "cursor-default"}`}
                    disabled={!user?.isAdmin}
                    title="Only admin users can search for vehicle type."
                />
                <button type="submit" className="fetch-vehicle-type" disabled={loading}>
                    {
                        loading ? (
                            <div className="flex flex-row items-center justify-center gap-4">
                                <ButtonSpinner />
                                <span className="loading">LOADING...</span>
                            </div>
                        ) : (
                            <div className="submit">SEARCH</div>
                        )
                    }
                </button>
            </div>
        </form>
        <div ref={divRef}>
            <VehicleDetails 
                vehicle={vehicle}
                isDivOpen={isDivOpen}
            />
        </div>
        <ResponseDialog 
            divOnClick={handleDivOnClick}
            errMessage={errMessage}
            message={message}
            isOpen={openMessage}
            onClick={handleOnClick}
        />
        <Loader 
            isOpen={open}
            progress={progress}
        />
        </>
    );
};