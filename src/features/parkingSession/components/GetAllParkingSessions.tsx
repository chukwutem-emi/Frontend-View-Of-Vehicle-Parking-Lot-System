import type { ReactNode } from "react";
import type {GetAllParkingSessionsProps} from "../../../types/parkingSessionAttributes/getAllParkingSessionsAttributes";
import { ResponseDialog } from "../../../components/Modal/ResponseDialog";
import { Loader } from "../../../components/Loader";
import {ParkingSessionPagination} from "./Pagination";
import { SessionsDetails } from "./SessionsDetails";




export const GetAllParkingSessions = ({errMessage, handleDivOnclick, handleOnclick, message, open, openMessage, pagination, progress, sessions, setPagination}: GetAllParkingSessionsProps): ReactNode => {
    return (
        <div className="bg-white w-[90%] md:w-[70%] mx-auto p-5">
            <select
                className="font-semibold font-sans text-sm md:text-lg outline-none border border-green-600"
                name="vehicleTypeId"
                id="vehicleTypeId"
                value={pagination?.vehicleTypeId ?? 0}
                onChange={(e) => {
                    const value = e.target.value;

                    setPagination((prev) => ({
                        ...prev,
                        currentPage: 1,
                        vehicleTypeId: value ? Number(value) : undefined
                    }))
                }}
            >
                <option value={""}>All Vehicle Types</option>
                <option value={1}>SUV</option>
                <option value={2}>TRUCK</option>
            </select>
            
            {
                sessions.length > 0 ? (
                    sessions.map((session) => (
                        <div key={session.id}>
                            <SessionsDetails sessionDetails={session} />
                        </div>
                    ))
                ) : (
                    <p className="text-center items-center font-sans text-sm md:text-lg mt-10">No parking session found!</p>
                )
            }
            <ParkingSessionPagination 
                pagination={pagination}
                setPagination={setPagination}
            />
            <ResponseDialog
                divOnClick={handleDivOnclick} 
                errMessage={errMessage}
                isOpen={openMessage}
                message={message}
                onClick={handleOnclick}
            />
            <Loader 
                isOpen={open}
                progress={progress}
            />
        </div>
    );
};