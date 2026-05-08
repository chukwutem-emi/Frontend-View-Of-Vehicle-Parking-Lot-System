import {createHashRouter} from "react-router-dom";
import {lazy, Suspense} from "react";
import AppLayout from "../layouts/ApplicationLayout";
import AuthLayout from "../layouts/AuthLayout";
import Error from "../components/Error";
import ParkingLayout from "../layouts/ParkingLayout";



const Dashboard               = lazy(() => import("../layouts/MainDashboard/MainDashboardPage"));
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
const CreateVehicleType       = lazy(() => import("../features/vehicleType/pages/CreateVehicleTypePage"));
const UpdateVehicleType       = lazy(() => import("../features/vehicleType/pages/UpdateVehicleTypePage"));
const VehicleTypeDashboard    = lazy(() => import("../layouts/VehicleTypesDashboard/VehicleTypesDashboard"));
const LandingPage             = lazy(() => import("../layouts/LandingPage"));
const LoginPage               = lazy(() => import("../features/auth/pages/LoginPage"));
const SignupPage              = lazy(() => import("../features/auth/pages/SignUpPage"));
const CreateParkingSlotPage   = lazy(() => import("../features/parkingSlot/pages/CreateParkingSlotPage"));
const GetAllParkingSlotPage   = lazy(() => import("../features/parkingSlot/pages/GetAllParkingSlotPage"));
const GetParkingSlotPage      = lazy(() => import("../features/parkingSlot/pages/GetParkingSlotPage"));
const UpdateParkingSlotPage   = lazy(() => import("../features/parkingSlot/pages/UpdateParkingSlotPage"));
const ParkingSlotDashboard    = lazy(() => import("../layouts/ParkingSlotsDashboard/ParkingSlotDashboard"));
const ResetPasswordPage       = lazy(() => import("../features/auth/pages/ResetPasswordPage"));
const UpdatePasswordPage      = lazy(() => import("../features/auth/pages/UpdatePasswordPage"));
const SessionDetailsPage      = lazy(() => import("../layouts/ParkingSessionDashboard/SessionDetailsPage"));
const GetCurrentUserPage      = lazy(() => import("../features/auth/pages/GetCurrentUserPage"));
const DeviceDetailsPage       = lazy(() => import("../layouts/UserDevicesDashboard/DeviceDetailsPage"));
const UserDeviceDashboard     = lazy(() => import("../layouts/UserDevicesDashboard/UserDevicesDashboard"));



export const appRouter = createHashRouter([
    {
        path: "/",
        element: <Suspense fallback={<div>Loading...</div>}><LandingPage /></Suspense>,
        errorElement: <Error />
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <Suspense fallback={<div>Loading...</div>}><LoginPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "signup",
                element: <Suspense fallback={<div>Loading...</div>}><SignupPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "reset-password",
                element: <Suspense fallback={<div>Loading...</div>}><ResetPasswordPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "update-password/:resetToken",
                element: <Suspense fallback={<div>Loading...</div>}><UpdatePasswordPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "user",
                element: <Suspense fallback={<div>Loading...</div>}><User /></Suspense>,
                errorElement: <Error />
            },  
            {
                path: "current-user",
                element: <Suspense fallback={<div>Loading...</div>}><GetCurrentUserPage /></Suspense>,
                errorElement: <Error />
            },  
            {
                path: "update/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><UpdateUserDetails /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "device-details/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><DeviceDetailsPage /></Suspense>,
                errorElement: <Error />
            },
        ]
    },
    {
        path:"/parking",
        element: <ParkingLayout />,
        children: [
            {
                path: "session-details/:sessionId",
                element: <Suspense fallback={<div>Loading...</div>}><SessionDetailsPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "get-sessions",
                element: <Suspense fallback={<div>Loading...</div>}><GetAllParkingSessions /></Suspense>,
                errorElement: <Error />
            },
        ]
    },
    {
        path: "/app",
        element: <AppLayout />,
        children: [
            {
                path: "dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><Dashboard /></Suspense>,
                errorElement: <Error />
            },
            
            {
                path: "users-dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><UserDashboard /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "users",
                element: <Suspense fallback={<div>Loading...</div>}><Users /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "promote/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><PromoteUser /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "demote/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><DemoteUser /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "delete/:userId",
                element: <Suspense fallback={<div>Loading...</div>}><DeleteUser /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "create-session",
                element: <Suspense fallback={<div>Loading...</div>}><CreateParkingSession /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "get-session/:sessionId",
                element: <Suspense fallback={<div>Loading...</div>}><GetParkingSession /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "vehicle-exit",
                element: <Suspense fallback={<div>Loading...</div>}><VehicleExitTime /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "logout",
                element: <Suspense fallback={<div>Loading...</div>}><Logout /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "parking-session-dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><ParkingSessionDashboard /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "create-vehicle-type",
                element: <Suspense fallback={<div>Loading...</div>}><CreateVehicleType /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "update-vehicle-type/:vehicleId",
                element: <Suspense fallback={<div>Loading...</div>}><UpdateVehicleType /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "vehicle-type-dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><VehicleTypeDashboard /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "create-slot",
                element: <Suspense fallback={<div>Loading...</div>}><CreateParkingSlotPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "get-slots",
                element: <Suspense fallback={<div>Loading...</div>}><GetAllParkingSlotPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "get-slot/:vehicleTypeId",
                element: <Suspense fallback={<div>Loading...</div>}><GetParkingSlotPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "update-slot/:vehicleTypeId",
                element: <Suspense fallback={<div>Loading...</div>}><UpdateParkingSlotPage /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "parking-slot-dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><ParkingSlotDashboard /></Suspense>,
                errorElement: <Error />
            },
            {
                path: "user-device-dashboard",
                element: <Suspense fallback={<div>Loading...</div>}><UserDeviceDashboard /></Suspense>,
                errorElement: <Error />
            },
        ]
    },
]);