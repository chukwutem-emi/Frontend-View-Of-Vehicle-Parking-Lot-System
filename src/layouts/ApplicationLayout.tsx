import { Outlet } from "react-router-dom";
import Header from "./Header";

const AppLayout = () => {
    return (
        <div className="app-layout">
            <Header />
            <Outlet />
        </div>
    )
};
export default AppLayout;