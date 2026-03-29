import {createHashRouter} from "react-router-dom";
import {lazy, Suspense} from "react";



const AuthPage = lazy(() => import("../features/auth/pages/CombinedAuth"));
const Dashboard = lazy(() => import("../layouts/Dashboard"));



export const appRouter = createHashRouter([
    {
        path: "/",
        element: (<Suspense fallback={<div>Loading...</div>}><AuthPage /></Suspense>)
    },
    {
        path: "/dashboard",
        element: (<Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>)
    }
]);