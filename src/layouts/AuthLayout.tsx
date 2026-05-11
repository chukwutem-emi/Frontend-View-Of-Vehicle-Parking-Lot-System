import type { JSX } from "react";
import { AuthHeader } from "./AuthHeader";
import { Outlet } from "react-router-dom";


const AuthLayout = (): JSX.Element => {
    return (
        <div>
            <AuthHeader />
            <Outlet />
        </div>
    );
};
export default AuthLayout;