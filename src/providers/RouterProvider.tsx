import {RouterProvider} from "react-router-dom";
import {appRouter} from "../routes/index";


export const AppRouter = () => {
    return (
        <div>
            <RouterProvider router={appRouter}/>
        </div>
    );
};