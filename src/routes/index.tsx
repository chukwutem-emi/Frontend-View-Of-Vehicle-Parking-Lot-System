import {createHashRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import AppLayout from "../layouts/ApplicationLayout";



const AuthPage                = lazy(() => import("../features/auth/pages/CombinedAuth"));
const Dashboard               = lazy(() => import("../layouts/MainDashboard/Dashboard"));
const Users                   = lazy(() => import("../features/auth/pages/GetAllUsersPage"));
const User                    = lazy(() => import("../features/auth/pages/GetUserPage"));
const UserDashboard           = lazy(() => import("../layouts/UsersDashboard/UsersDashboard"));
const UpdateUserDetails       = lazy(() => import("../features/auth/pages/UpdateUserDetailsPage"));
const PromoteUser             = lazy(() => import("../features/auth/pages/PromoteUserPage"));
const DemoteUser              = lazy(() => import("../features/auth/pages/DemoteUserPage"));
const DeleteUser              = lazy(() => import("../features/auth/pages/DeleteUserPage"));
const GetAllParkingSessions   = lazy(() => import("../features/parkingSession/pages/GetAllParkingSessions"));
const CreateParkingSession    = lazy(() => import("../features/parkingSession/pages/CreateParkingSessionPage"));
const GetParkingSession       = lazy(() => import("../features/parkingSession/pages/GetParkingSession"));
const VehicleExitTime         = lazy(() => import("../features/parkingSession/pages/VehicleExitTime"));
const Logout                  = lazy(() => import("../features/auth/pages/LogoutPage"));
const ParkingSessionDashboard = lazy(() => import("../layouts/ParkingSessionDashboard/DashboardPage"));


export const appRouter = createHashRouter([
    {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}><AuthPage /></Suspense>
    },
    {
        path: "/app",
        element: <AppLayout />,
        children: [
            {
                path: "dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>
            },
            
            {
                path: "users-dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><UserDashboard /></Suspense>
            },
            {
                path: "users",
                element: <Suspense fallback={<div>Loading...</div>}><Users /></Suspense>
            },
            {
                path: "user",
                element: <Suspense fallback={<div>Loading...</div>}><User /></Suspense>
            },  
            {
                path: "update/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><UpdateUserDetails /></Suspense>
            },
            {
                path: "promote/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><PromoteUser /></Suspense>
            },
            {
                path: "demote/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><DemoteUser /></Suspense>
            },
            {
                path: "delete/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><DeleteUser /></Suspense>
            },
            {
                path: "create-session",
                element: <Suspense fallback={<div>Loading...</div>}><CreateParkingSession /></Suspense>
            },
            {
                path: "get-sessions",
                element: <Suspense fallback={<div>Loading...</div>}><GetAllParkingSessions /></Suspense>
            },
            {
                path: "get-session/:sessionId",
                element: <Suspense fallback={<div>Loading...</div>}><GetParkingSession /></Suspense>
            },
            {
                path: "vehicle-exit",
                element: <Suspense fallback={<div>Loading...</div>}><VehicleExitTime /></Suspense>
            },
            {
                path: "logout",
                element: <Suspense fallback={<div>Loading...</div>}><Logout /></Suspense>
            },
            {
                path: "parking-session-dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><ParkingSessionDashboard /></Suspense>
            },
        ]
    },
]);