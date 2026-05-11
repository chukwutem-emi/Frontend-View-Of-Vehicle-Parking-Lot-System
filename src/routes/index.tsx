import {createHashRouter} from "react-router-dom";
import AppLayout from "../layouts/ApplicationLayout";
import AuthLayout from "../layouts/AuthLayout";
import Error from "../components/Error";
import ParkingLayout from "../layouts/ParkingLayout";
// import { lazy, Suspense } from "react";
import LandingPage from "../layouts/LandingPage";
import LoginPage from "../features/auth/pages/LoginPage";
import SignUpPage from "../features/auth/pages/SignUpPage";
import ResetPasswordPage from "../features/auth/pages/ResetPasswordPage";
import UpdatePasswordPage from "../features/auth/pages/UpdatePasswordPage";
import GetUserPage from "../features/auth/pages/GetUserPage";
import GetCurrentUserPage from "../features/auth/pages/GetCurrentUserPage";
import UpdateUserDetailsPage from "../features/auth/pages/UpdateUserDetailsPage";
import DeviceDetailsPage from "../layouts/UserDevicesDashboard/DeviceDetailsPage";
import SessionDetailsPage from "../layouts/ParkingSessionDashboard/SessionDetailsPage";
import GetAllParkingSessionsPage from "../features/parkingSession/pages/GetAllParkingSessions";
import ParkingSessionDashboard from "../layouts/ParkingSessionDashboard/DashboardPage";
import UsersDashboard from "../layouts/UsersDashboard/UsersDashboard";
import GetAllUserPage from "../features/auth/pages/GetAllUsersPage";
import PromoteUserPage from "../features/auth/pages/PromoteUserPage";
import DemoteUserPage from "../features/auth/pages/DemoteUserPage";
import DeleteUserPage from "../features/auth/pages/DeleteUserPage";
import CreateParkingSessionPage from "../features/parkingSession/pages/CreateParkingSessionPage";
import GetParkingSessionPage from "../features/parkingSession/pages/GetParkingSession";
import VehicleExitTimePage from "../features/parkingSession/pages/VehicleExitTime";
import LogoutPage from "../features/auth/pages/LogoutPage";
import CreateVehicleTypePage from "../features/vehicleType/pages/CreateVehicleTypePage";
import UpdateVehicleTypePage from "../features/vehicleType/pages/UpdateVehicleTypePage";
import VehicleTypesDashboard from "../layouts/VehicleTypesDashboard/VehicleTypesDashboard";
import CreateParkingSlotPage from "../features/parkingSlot/pages/CreateParkingSlotPage";
import GetAllParkingSlotPage from "../features/parkingSlot/pages/GetAllParkingSlotPage";
import GetParkingSlotPage from "../features/parkingSlot/pages/GetParkingSlotPage";
import UpdateParkingSlotPage from "../features/parkingSlot/pages/UpdateParkingSlotPage";
import ParkingSlotDashboard from "../layouts/ParkingSlotsDashboard/ParkingSlotDashboard";
import UserDevicesDashboard from "../layouts/UserDevicesDashboard/UserDevicesDashboard";
import ParkingDashboard from "../layouts/MainDashboard/MainDashboardPage";



// const Dashboard               = lazy(() => import("../layouts/MainDashboard/MainDashboardPage"));
// const Users                   = lazy(() => import("../features/auth/pages/GetAllUsersPage"));
// const User                    = lazy(() => import("../features/auth/pages/GetUserPage"));
// const UserDashboard           = lazy(() => import("../layouts/UsersDashboard/UsersDashboard"));
// const UpdateUserDetails       = lazy(() => import("../features/auth/pages/UpdateUserDetailsPage"));
// const PromoteUser             = lazy(() => import("../features/auth/pages/PromoteUserPage"));
// const DemoteUser              = lazy(() => import("../features/auth/pages/DemoteUserPage"));
// const DeleteUser              = lazy(() => import("../features/auth/pages/DeleteUserPage"));
// const GetAllParkingSession    = lazy(() => import("../features/parkingSession/pages/GetAllParkingSessions"));
// const CreateParkingSession    = lazy(() => import("../features/parkingSession/pages/CreateParkingSessionPage"));
// const GetParkingSession       = lazy(() => import("../features/parkingSession/pages/GetParkingSession"));
// const VehicleExitTime         = lazy(() => import("../features/parkingSession/pages/VehicleExitTime"));
// const Logout                  = lazy(() => import("../features/auth/pages/LogoutPage"));
// const ParkingSessionDashboard = lazy(() => import("../layouts/ParkingSessionDashboard/DashboardPage"));
// const CreateVehicleType       = lazy(() => import("../features/vehicleType/pages/CreateVehicleTypePage"));
// const UpdateVehicleType       = lazy(() => import("../features/vehicleType/pages/UpdateVehicleTypePage"));
// const VehicleTypeDashboard    = lazy(() => import("../layouts/VehicleTypesDashboard/VehicleTypesDashboard"));
// const LandingPage             = lazy(() => import("../layouts/LandingPage"));
// const LoginPage               = lazy(() => import("../features/auth/pages/LoginPage"));
// const SignupPage              = lazy(() => import("../features/auth/pages/SignUpPage"));
// const CreateParkingSlotPage   = lazy(() => import("../features/parkingSlot/pages/CreateParkingSlotPage"));
// const GetAllParkingSlotPage   = lazy(() => import("../features/parkingSlot/pages/GetAllParkingSlotPage"));
// const GetParkingSlotPage      = lazy(() => import("../features/parkingSlot/pages/GetParkingSlotPage"));
// const UpdateParkingSlotPage   = lazy(() => import("../features/parkingSlot/pages/UpdateParkingSlotPage"));
// const ParkingSlotDashboard    = lazy(() => import("../layouts/ParkingSlotsDashboard/ParkingSlotDashboard"));
// const ResetPasswordPage       = lazy(() => import("../features/auth/pages/ResetPasswordPage"));
// const UpdatePasswordPage      = lazy(() => import("../features/auth/pages/UpdatePasswordPage"));
// const SessionDetailsPage      = lazy(() => import("../layouts/ParkingSessionDashboard/SessionDetailsPage"));
// const GetCurrentUserPage      = lazy(() => import("../features/auth/pages/GetCurrentUserPage"));
// const DeviceDetailsPage       = lazy(() => import("../layouts/UserDevicesDashboard/DeviceDetailsPage"));
// const UserDeviceDashboard     = lazy(() => import("../layouts/UserDevicesDashboard/UserDevicesDashboard"));

export const appRouter = createHashRouter([
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <Error />
    },
    {
        path: "/auth",
        element: <AuthLayout />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
                errorElement: <Error />
            },
            {
                path: "signup",
                element: <SignUpPage />,
                errorElement: <Error />
            },
            {
                path: "reset-password",
                element: <ResetPasswordPage />,
                errorElement: <Error />
            },
            {
                path: "update-password/:resetToken",
                element: <UpdatePasswordPage />,
                errorElement: <Error />
            },
            {
                path: "user",
                element: <GetUserPage />,
                errorElement: <Error />
            },  
            {
                path: "current-user",
                element: <GetCurrentUserPage />,
                errorElement: <Error />
            },  
            {
                path: "update/:userId",
                element: <UpdateUserDetailsPage />,
                errorElement: <Error />
            },
            {
                path: "device-details/:userId",
                element: <DeviceDetailsPage />,
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
                element: <SessionDetailsPage />,
                errorElement: <Error />
            },
            {
                path: "get-sessions",
                element: <GetAllParkingSessionsPage />,
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
                element: <ParkingDashboard />,
                errorElement: <Error />
            },
            
            {
                path: "users-dashboard",
                element: <UsersDashboard />,
                errorElement: <Error />
            },
            {
                path: "users",
                element: <GetAllUserPage />,
                errorElement: <Error />
            },
            {
                path: "promote/:userId",
                element: <PromoteUserPage />,
                errorElement: <Error />
            },
            {
                path: "demote/:userId",
                element: <DemoteUserPage />,
                errorElement: <Error />
            },
            {
                path: "delete/:userId",
                element: <DeleteUserPage />,
                errorElement: <Error />
            },
            {
                path: "create-session",
                element: <CreateParkingSessionPage />,
                errorElement: <Error />
            },
            {
                path: "get-session/:sessionId",
                element: <GetParkingSessionPage />,
                errorElement: <Error />
            },
            {
                path: "vehicle-exit",
                element: <VehicleExitTimePage />,
                errorElement: <Error />
            },
            {
                path: "logout",
                element: <LogoutPage />,
                errorElement: <Error />
            },
            {
                path: "parking-session-dashboard",
                element: <ParkingSessionDashboard />,
                errorElement: <Error />
            },
            {
                path: "create-vehicle-type",
                element: <CreateVehicleTypePage />,
                errorElement: <Error />
            },
            {
                path: "update-vehicle-type/:vehicleId",
                element: <UpdateVehicleTypePage />,
                errorElement: <Error />
            },
            {
                path: "vehicle-type-dashboard",
                element: <VehicleTypesDashboard />,
                errorElement: <Error />
            },
            {
                path: "create-slot",
                element: <CreateParkingSlotPage />,
                errorElement: <Error />
            },
            {
                path: "get-slots",
                element: <GetAllParkingSlotPage />,
                errorElement: <Error />
            },
            {
                path: "get-slot/:vehicleTypeId",
                element: <GetParkingSlotPage />,
                errorElement: <Error />
            },
            {
                path: "update-slot/:vehicleTypeId",
                element: <UpdateParkingSlotPage />,
                errorElement: <Error />
            },
            {
                path: "parking-slot-dashboard",
                element: <ParkingSlotDashboard />,
                errorElement: <Error />
            },
            {
                path: "user-device-dashboard",
                element: <UserDevicesDashboard />,
                errorElement: <Error />
            },
        ]
    },
]);