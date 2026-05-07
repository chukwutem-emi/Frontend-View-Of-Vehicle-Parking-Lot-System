import type { JSX } from "react";
import { ParkingHeader } from "./ParkingHeader";
import { Outlet } from "react-router";


const ParkingLayout = (): JSX.Element => {
    return (
        <div>
            <ParkingHeader />
            <Outlet />
        </div>
    );
};
export default ParkingLayout;