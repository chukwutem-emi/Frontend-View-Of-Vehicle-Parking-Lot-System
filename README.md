![TypeScript](https://img.shields.io/badge/TypeScript-6.0.2-blue) ![React](https://img.shields.io/badge/React-19.2.4-cyan) ![ReactDom](https://img.shields.io/badge/ReactDOm-19.2.4-cyan) ![ReactRedux](https://img.shields.io/badge/ReactRedux-9.2.0-indigo) 
![ReactRouter](https://img.shields.io/badge/ReactRouter-6.30.3-cyan) ![ReactRouterDom](https://img.shields.io/badge/ReactRouterDom-6.30.3-cyan) ![Recharts](https://img.shields.io/badge/Recharts-3.8.1-violet) ![ReduxPersist](https://img.shields.io/badge/ReduxPersist-6.0.0-indigo) 
![Parcel](https://img.shields.io/badge/Parcel-2.16.4-yellow) ![BabelJest](https://img.shields.io/badge/BabeJest-30.3.0-yellow) ![Jest](https://img.shields.io/badge/Jest-30.3.0-green) ![JestEnvironmentJsdom](https://img.shields.io/badge/JestEnvironmentJsdom-30.3.0-green) ![Tailwindcss](https://img.shields.io/badge/Tailwindcss-3.4.4-cyan)


# Vehicle Parking Lot System - Frontend Documentation

## Table of Contents

1. [Project Overview](#project-overview)
2. [Technology Stack](#technology-stack)
3. [Project Structure](#project-structure)
4. [Installation & Setup](#installation--setup)
5. [Development](#development)
6. [Building & Deployment](#building--deployment)
7. [Key Features](#key-features)
8. [Dependencies](#dependencies)
9. [Scripts](#scripts)
10. [Configuration](#configuration)
11. [Contributing](#contributing)
12. [Troubleshooting](#troubleshooting)

---

## Project Overview

**Frontend-View-Of-Vehicle-Parking-Lot-System** is a comprehensive TypeScript/React-based frontend application for managing and monitoring vehicle parking lot operations. This application provides users with an intuitive interface to track parking spaces, manage reservations, view analytics, and handle system administration.

### Project Details
- **Repository**: [chukwutem-emi/Frontend-View-Of-Vehicle-Parking-Lot-System](https://github.com/chukwutem-emi/Frontend-View-Of-Vehicle-Parking-Lot-System)
- **Version**: 1.0.0
- **Author**: Chukwutem Stephen Emi
- **License**: ISC
- **Primary Language**: TypeScript (96.8%)
- **Last Updated**: May 8, 2026

---

## Technology Stack

### Frontend Framework
- **React** (v19.2.4) - UI library for building interactive components
- **TypeScript** (v6.0.2) - Static type checking and enhanced development experience
- **React Router DOM** (v6.30.3) - Client-side routing and navigation

### State Management
- **Redux Toolkit** (v2.11.2) - Predictable state management
- **React-Redux** (v9.2.0) - Official React bindings for Redux
- **Redux-Persist** (v6.0.0) - Persistent state across sessions

### Styling & UI
- **Tailwind CSS** (v3.4.4) - Utility-first CSS framework
- **PostCSS** (v8.5.8) - CSS transformation
- **Autoprefixer** (v10.4.27) - Vendor prefix support
- **Lucide React** (v1.8.0) - Icon library
- **React Icons** (v5.6.0) - Additional icon set

### Animation & Motion
- **Framer Motion** (v12.38.0) - Smooth animations and transitions

### Data Visualization
- **Recharts** (v3.8.1) - Charts and data visualization components

### Build Tools
- **Parcel** (v2.16.4) - Zero-configuration bundler
- **Babel** (v7.29.2) - JavaScript transpiler
- **TypeScript Compiler** - Type checking and compilation

### Testing
- **Jest** (v30.3.0) - Testing framework
- **Testing Library** (React v16.3.2) - Testing utilities
- **Jest DOM** (v6.9.1) - DOM matchers for Jest


---

## Project Structure

<details>
<summary>View full project structure</summary>

```bash
Frontend-View-Of-Vehicle-Parking-Lot-System
├── README.md
├── babel.config.js
├── bucket-policy.json
├── cloudfront.json
├── index.html
├── jest.config.js
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
│   ├── App.tsx
│   ├── __test__
│   │   └── deleteUserComponenet.test.tsx
│   ├── app
│   │   ├── rootReducer.ts
│   │   └── store.ts
│   ├── assets
│   ├── components
│   │   ├── BigBackgroundSpinner.tsx
│   │   ├── Button
│   │   │   └── ButtonSpinner.tsx
│   │   ├── Error.tsx
│   │   ├── Input
│   │   │   ├── Auth
│   │   │   │   ├── LoginInputField.tsx
│   │   │   │   ├── ResetPasswordInputField.tsx
│   │   │   │   ├── SignUpInputField.tsx
│   │   │   │   ├── UpdatePasswordInputField.tsx
│   │   │   │   └── UpdateUserDetailsInputFields.tsx
│   │   │   ├── ParkingSession
│   │   │   │   ├── CreateParkingSessionInputField.tsx
│   │   │   │   └── VehicleExitTimeInputField.tsx
│   │   │   ├── ParkingSlot
│   │   │   │   ├── CreateParkingSlotInputField.tsx
│   │   │   │   └── UpdateParkingSlotInputField.tsx
│   │   │   └── VehicleType
│   │   │       ├── CreateVehicleTypeInputFields.tsx
│   │   │       └── UpdateVehicleTypeInputFields.tsx
│   │   ├── Loader.tsx
│   │   ├── Modal
│   │   │   ├── Dialog.tsx
│   │   │   └── ResponseDialog.tsx
│   │   └── UserNetworkStatus.tsx
│   ├── features
│   │   ├── auth
│   │   │   ├── APIs
│   │   │   │   ├── deleteUserAPI.ts
│   │   │   │   ├── demoteUserAPI.ts
│   │   │   │   ├── getAllUsersAPI.ts
│   │   │   │   ├── getCurrentUserAPI.ts
│   │   │   │   ├── getUserAPI.ts
│   │   │   │   ├── loginAPI.ts
│   │   │   │   ├── promoteUserAPI.ts
│   │   │   │   ├── resetPasswordAPI.ts
│   │   │   │   ├── signupAPI.ts
│   │   │   │   ├── updatePasswordAPI.ts
│   │   │   │   └── updateUserDetailsAPI.ts
│   │   │   ├── authSlices
│   │   │   │   ├── allUsersSlice.ts
│   │   │   │   ├── tokenSlice.ts
│   │   │   │   └── userSlice.ts
│   │   │   ├── components
│   │   │   │   ├── DeleteUser.tsx
│   │   │   │   ├── DemoteUser.tsx
│   │   │   │   ├── GetAllUsers.tsx
│   │   │   │   ├── GetCurrentUser.tsx
│   │   │   │   ├── GetUser.tsx
│   │   │   │   ├── LoginForm.tsx
│   │   │   │   ├── Logout.tsx
│   │   │   │   ├── Pagination.tsx
│   │   │   │   ├── PromoteUser.tsx
│   │   │   │   ├── ResetPassword.tsx
│   │   │   │   ├── SignUpForm.tsx
│   │   │   │   ├── UpdatePassword.tsx
│   │   │   │   └── UpdateUserDetailsForm.tsx
│   │   │   ├── hooks
│   │   │   │   ├── useAuthTypewriter.ts
│   │   │   │   ├── useDeleteUser.ts
│   │   │   │   ├── useDemoteUser.ts
│   │   │   │   ├── useGetAllUsers.ts
│   │   │   │   ├── useGetCurrentUser.ts
│   │   │   │   ├── useGetUser.ts
│   │   │   │   ├── useLogin.ts
│   │   │   │   ├── useLogout.ts
│   │   │   │   ├── usePromoteUser.ts
│   │   │   │   ├── useResetPassword.ts
│   │   │   │   ├── useSignup.ts
│   │   │   │   ├── useUpdateUserDetails.ts
│   │   │   │   └── useUpdatedPassword.ts
│   │   │   └── pages
│   │   │       ├── DeleteUserPage.tsx
│   │   │       ├── DemoteUserPage.tsx
│   │   │       ├── GetAllUsersPage.tsx
│   │   │       ├── GetCurrentUserPage.tsx
│   │   │       ├── GetUserPage.tsx
│   │   │       ├── LoginPage.tsx
│   │   │       ├── LogoutPage.tsx
│   │   │       ├── PromoteUserPage.tsx
│   │   │       ├── ResetPasswordPage.tsx
│   │   │       ├── SignUpPage.tsx
│   │   │       ├── UpdatePasswordPage.tsx
│   │   │       └── UpdateUserDetailsPage.tsx
│   │   ├── parkingSession
│   │   │   ├── APIs
│   │   │   │   ├── createParkingSessionAPI.ts
│   │   │   │   ├── dashboardParkingSessionAPI.ts
│   │   │   │   ├── getAllParkingSessionAPI.ts
│   │   │   │   ├── getParkingSessionAPI.ts
│   │   │   │   ├── parkingStatsAPI.ts
│   │   │   │   └── vehicleExitTimeAPI.ts
│   │   │   ├── components
│   │   │   │   ├── CreateParkingSession.tsx
│   │   │   │   ├── GetAllParkingSessions.tsx
│   │   │   │   ├── GetParkingSession.tsx
│   │   │   │   ├── Pagination.tsx
│   │   │   │   ├── SessionsDetails.tsx
│   │   │   │   └── VehicleExitTime.tsx
│   │   │   ├── hooks
│   │   │   │   ├── useCreateParkingSession.ts
│   │   │   │   ├── useGetAllParkingSessions.ts
│   │   │   │   ├── useGetParkingSession.ts
│   │   │   │   └── useVehicleExitTime.ts
│   │   │   ├── pages
│   │   │   │   ├── CreateParkingSessionPage.tsx
│   │   │   │   ├── GetAllParkingSessions.tsx
│   │   │   │   ├── GetParkingSession.tsx
│   │   │   │   └── VehicleExitTime.tsx
│   │   │   └── sessionSlices
│   │   ├── parkingSlot
│   │   │   ├── APIs
│   │   │   │   ├── createParkingSlotAPI.ts
│   │   │   │   ├── dashboardParkingSlotAPI.ts
│   │   │   │   ├── getAllParkingSlotAPI.ts
│   │   │   │   ├── getParkingSlotAPI.ts
│   │   │   │   └── updateParkingSlotAPI.ts
│   │   │   ├── components
│   │   │   │   ├── CreateParkingSlotForm.tsx
│   │   │   │   ├── GetAllParkingSlots.tsx
│   │   │   │   ├── GetParkingSlot.tsx
│   │   │   │   ├── Pagination.tsx
│   │   │   │   └── UpdateParkingSlot.tsx
│   │   │   ├── hooks
│   │   │   │   ├── useCreateParkingSlot.ts
│   │   │   │   ├── useGetAllParkingSlots.ts
│   │   │   │   ├── useGetParkingSlot.ts
│   │   │   │   └── useUpdateParkingSlot.ts
│   │   │   ├── pages
│   │   │   │   ├── CreateParkingSlotPage.tsx
│   │   │   │   ├── GetAllParkingSlotPage.tsx
│   │   │   │   ├── GetParkingSlotPage.tsx
│   │   │   │   └── UpdateParkingSlotPage.tsx
│   │   │   └── slotSlices
│   │   │       └── createSlotSlice.ts
│   │   ├── userDevice
│   │   │   ├── APIs
│   │   │   │   ├── getAllLoggedInDevices.ts
│   │   │   │   └── getLoggedInDevice.ts
│   │   │   ├── components
│   │   │   ├── hooks
│   │   │   │   ├── useGetAllLoggedInDevices.ts
│   │   │   │   └── useGetLoggedInDevice.ts
│   │   │   └── pages
│   │   └── vehicleType
│   │       ├── APIs
│   │       │   ├── createVehicleTypeAPI.ts
│   │       │   ├── fetchVehicleTypeAPI.ts
│   │       │   └── updateVehicleTypeAPI.ts
│   │       ├── components
│   │       │   ├── CreateVehicleTypeForm.tsx
│   │       │   ├── FetchVehicleType.tsx
│   │       │   ├── UpdateVehicleTypeForm.tsx
│   │       │   └── VehicleDetails.tsx
│   │       ├── hooks
│   │       │   ├── useCreateVehicleType.ts
│   │       │   ├── useFetchVehicleType.ts
│   │       │   └── useUpdateVehicleType.ts
│   │       ├── pages
│   │       │   ├── CreateVehicleTypePage.tsx
│   │       │   └── UpdateVehicleTypePage.tsx
│   │       └── vehicleTypeSlice
│   ├── global.d.ts
│   ├── layouts
│   │   ├── ApplicationLayout.tsx
│   │   ├── AuthHeader.tsx
│   │   ├── AuthLayout.tsx
│   │   ├── Header.tsx
│   │   ├── LandingPage.tsx
│   │   ├── MainDashboard
│   │   │   ├── ChartAndOverview.tsx
│   │   │   ├── MainDashboardPage.tsx
│   │   │   ├── NavBar.tsx
│   │   │   ├── ParkingSessionsActivityTable.tsx
│   │   │   ├── SideBar.tsx
│   │   │   └── Statistics.tsx
│   │   ├── ParkingHeader.tsx
│   │   ├── ParkingLayout.tsx
│   │   ├── ParkingSessionDashboard
│   │   │   ├── AllParkingSessions.tsx
│   │   │   ├── DashboardPage.tsx
│   │   │   ├── Description.tsx
│   │   │   ├── ParkingSession.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── SessionDetails.tsx
│   │   │   ├── SessionDetailsPage.tsx
│   │   │   ├── SessionTimer.tsx
│   │   │   ├── SideBar.tsx
│   │   │   └── useSessionTimer.ts
│   │   ├── ParkingSlotsDashboard
│   │   │   ├── AllParkingSlot.tsx
│   │   │   ├── Description.tsx
│   │   │   ├── ParkingSlot.tsx
│   │   │   ├── ParkingSlotDashboard.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── SideBar.tsx
│   │   │   └── SlotDetails.tsx
│   │   ├── UserDevicesDashboard
│   │   │   ├── AllDevices.tsx
│   │   │   ├── Description.tsx
│   │   │   ├── DeviceDetailsPage.tsx
│   │   │   ├── DevicesDetails.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── SideBar.tsx
│   │   │   ├── UserDevice.tsx
│   │   │   └── UserDevicesDashboard.tsx
│   │   ├── UsersDashboard
│   │   │   ├── AllUsers.tsx
│   │   │   ├── Description.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   ├── SideBar.tsx
│   │   │   └── UsersDashboard.tsx
│   │   └── VehicleTypesDashboard
│   │       ├── Description.tsx
│   │       ├── SideBar.tsx
│   │       ├── VehicleType.tsx
│   │       └── VehicleTypesDashboard.tsx
│   ├── main.tsx
│   ├── providers
│   │   ├── RouterProvider.tsx
│   │   └── StoreProvider.tsx
│   ├── routes
│   │   └── index.tsx
│   ├── services
│   │   └── apiClient.ts
│   ├── styles
│   │   ├── authCss
│   │   │   ├── login.css
│   │   │   ├── resetPassword.css
│   │   │   ├── signup.css
│   │   │   ├── updatePassword.css
│   │   │   └── updateUserDetails.css
│   │   ├── index.css
│   │   ├── parkingSessionCss
│   │   │   ├── createParkingSession.css
│   │   │   └── vehicleExitTime.css
│   │   ├── slotCss
│   │   │   ├── createParkingSlot.css
│   │   │   └── updateParkingSlot.css
│   │   └── vehicleTypeCss
│   │       ├── createVehicleType.css
│   │       ├── fetchVehicleType.css
│   │       └── updateVehicleType.css
│   ├── types
│   │   ├── ParkingSlotAttributes
│   │   │   ├── createParkingSlotAttributes.ts
│   │   │   ├── getAllParkingSlotAttributes.ts
│   │   │   ├── getParkingSlotAttributes.ts
│   │   │   ├── inputFieldAttributes.ts
│   │   │   └── updateParkingSlotAttributes.ts
│   │   ├── authAttributes
│   │   │   ├── deleteUserAttributes.ts
│   │   │   ├── demoteUserAttributes.ts
│   │   │   ├── getAllUsersAttributes.ts
│   │   │   ├── getUserAttributes.ts
│   │   │   ├── inputFieldsAttributes.ts
│   │   │   ├── loginAttributes.ts
│   │   │   ├── logoutAttributes.ts
│   │   │   ├── promoteUserAttributes.ts
│   │   │   ├── resetPasswordAttribute.ts
│   │   │   ├── signupAttributes.ts
│   │   │   ├── updatePasswordAttributes.ts
│   │   │   └── updateUserDetailsAttributes.ts
│   │   ├── dialog.ts
│   │   ├── paginationAttributes.ts
│   │   ├── parkingSessionAttributes
│   │   │   ├── createParkingSessionAttributes.ts
│   │   │   ├── getAllParkingSessionsAttributes.ts
│   │   │   ├── getParkingSessionAttributes.ts
│   │   │   ├── inputFieldAttributes.ts
│   │   │   └── vehicleExitTimeAttributes.ts
│   │   ├── parkingSlot.ts
│   │   ├── redux-persist.d.ts
│   │   ├── userDevices
│   │   │   ├── getAllLoggedInDevicesAttributes.ts
│   │   │   └── getLoggedInDeviceAttributes.ts
│   │   └── vehicleTypeAttributes
│   │       ├── createVehicleTypeAttribute.ts
│   │       ├── fetchVehicleTypeAttribute.ts
│   │       ├── updateVehicleTypeAttribute.ts
│   │       └── vehicleTypeInputFieldsAttributes.ts
│   └── utils
│       ├── ShimmerUI.tsx
│       ├── formatAmount.ts
│       ├── formatDate.ts
│       ├── formatTime.ts
│       └── useAppSelector.ts
├── tailwind.config.js
├── tsconfig.jest.json
└── tsconfig.json
```
</details>


### Key Directories Explained

- **src/components/**: Reusable UI components like buttons, reusable-inputFields, modals, etc.
- **src/features/**: The app features which includes: the APIs, components, custom-hooks and pages for each feature.
- **src/app/**: Redux store setup and configuration.
- **src/services/**: API client and service functions.
- **src/types/**: TypeScript interfaces and types.
- **src/utils/**: Helper functions and utilities.
- **src/styles/**: Global CSS and styling setup.

---

## Installation & Setup

### Prerequisites
- **Node.js**: v18.x or higher
- **npm**: v9.x or higher (or yarn/pnpm)

### Steps

1. **Clone the Repository**

```bash
git clone https://github.com/chukwutem-emi/Frontend-View-Of-Vehicle-Parking-Lot-System.git
cd Frontend-View-Of-Vehicle-Parking-Lot-System
```

2. **Install dependencies**

```bash
npm install
```

3. **Create Environment Configuration (if needed)**

```bash
# Create .env file for environment variables
touch .env  (window users)
```

4. **Verify Installation**

```bash
npm run dev
# Application should start on http://localhost:1234
```
## Development

### Starting Development Server

```bash
npm run dev
#This starts the Parcel development server with hot module reloading enabled. The application will be available at http://localhost:1234.
```

### Best practice

1. Type Safety: Always use TypeScript types. Avoid using any type.
2. Component Structure: Keep components small and focused on a single responsibility.
3. State Management: Use Redux for global state, React hooks for local component state.
4. Styling: Use Tailwind CSS utility classes. Avoid writing custom CSS when possible.
5. Testing: Write tests for critical business logic and components.
6. Code Organization: Follow the established folder structure for new features.

### Adding New Features

1. You can add more features in src/features/
2. Add Redux slices in src/features/ if global state is needed
3. Create services in src/services/ for API calls
4. Add types in src/types/


## Building & Deployment

### Production Build

```bash
npm run build
```
#### This command:

- Removes previous build artifacts (dist/ and .parcel-cache/).
- Bundles the application with Parcel.
- Generates optimized output in the dist/ directory.
- Excludes source maps for production.

### AWS S3 Deployment

#### The project includes deployment configuration for AWS S3:

```bash
npm run deploy
```
#### This script:

- Syncs the dist/ directory to s3://parking-ops.
- Removes files from S3 that are not in the local dist/
- Requires AWS CLI configured with appropriate credentials.

#### Prerequisites for Deployment:

- AWS CLI installed and configured
S3 bucket parking-ops exists and is accessible.
- AWS credentials configured with necessary S3 permissions.

### Deployment Steps

1. Build the project: npm run build
2. Verify the output: ls -la dist/
3. Deploy to S3: npm run deploy


## Key Features

1. ### Network Status Monitoring

- Real-time network connectivity detection.
- User notification component for offline/online states.
- Automatic reconnection handling.

2. ### Responsive Design

- Mobile-first approach with Tailwind CSS.
- Breakpoints: xs (375px), sm (640px), md (768px), lg (1024px), xl (1280px), 2xl (1536px).
- Progressive enhancement for all screen sizes.

3. ### State Persistence

- Redux-Persist integration for saving application state.
- Automatic state restoration on page reload.

4. ### Data Visualization

- Recharts integration for parking analytics
Charts for occupancy, revenue, and trends.

5. ### Dark Theme UI
- Dark blue background (bg-blue-950).
- Watermark styling for professional appearance.
- Consistent branding throughout.


## Dependencies

### Production dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.2.4 | UI Framework |
| react-dom | ^19.2.4 | React DOM rendering |
| react-router-dom | ^6.30.3 | Client-side routing |
| @reduxjs/toolkit | ^2.11.2 | State management |
| react-redux | ^9.2.0 | React-Redux integration |
| redux-persist | ^6.0.0 | State persistence |
| tailwindcss |	^3.4.4 | Utility CSS |
| recharts | ^3.8.1 | Charts |
| lucide-react | ^1.8.0 | Icons |
| react-icons |	^5.6.0 | Additional icons |


### Development dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| typescript | ^6.0.2 | Type checking |
| parcel | ^2.16.4 | Bundler |
| @babel/* | ^7.29.2 | Transpilation |
| jest | ^30.3.0 | Testing |
| @testing-library/* | Latest |	Testing utilities |
| tsx | ^4.21.0	| TypeScript execution |
| tailwindcss |	^3.4.4 | CSS framework |


## Scripts

| Script | Command | Purpose |
|--------|---------|---------|
| dev | parcel index.html |	Start development server |
| watch | tsx watch src/main.tsx | Watch TypeScript files |
| build	| parcel build index.html --dist-dir dist |	Production build |
| deploy | aws s3 sync dist/ s3://parking-ops |	Deploy to S3 |
| test | jest |	Run tests |


## Configuration

### TypeScript Configuration (tsconfig.json)

```bash
{
  "compilerOptions": {
    "module": "esnext",                    // Modern module system
    "target": "esnext",                    // Modern JavaScript
    "outDir": "dist",                      // Output directory
    "rootDir": "src",                      // Source root
    "lib": ["ESNext", "DOM"],              // Available libraries
    "strict": true,                        // Strict type checking
    "jsx": "react-jsx",                    // React JSX handling
    "moduleResolution": "bundler",         // Module resolution strategy
    "noUnusedLocals": true,                // Error on unused variables
    "noUnusedParameters": true,            // Error on unused parameters
    "esModuleInterop": true                // CommonJS/ESM interop
  }
}
```

### Tailwind CSS Configuration (tailwind.config.js)

- Content scanning: Targets all HTML, JS, TS, JSX, and TSX files.
- Custom breakpoints: Extended screen sizes for responsive design.
- Plugins: None (use default Tailwind utilities).

### Parcel Configuration

Parcel is configured with zero-configuration approach. Custom configuration can be added in .parcelrc file if needed.

### Browser Support

```bash
"browserslist": ["last 2 versions"]
#Supports the last 2 versions of all major browsers.
```

## Project Initialization

### Entry Point Flow

1. index.html - HTML template loads React app.
2. src/main.tsx - React DOM root initialization.
3. src/App.tsx - Main application component.
4. Global Styles - Tailwind CSS with custom styling.
5. Network Status - UserNetworkStatus component for connectivity.

### Dark Theme Setup.
The application uses a dark blue background (bg-blue-950) with a watermark for professional branding:

```bash
<div className="bg-blue-950 min-h-screen overflow-x-hidden relative">
  <div className="watermark"></div>
  <App />
  <NetworkStatus />
</div>
```

## Contributing

### Code Standards

1. TypeScript: All code should be properly typed.
2. Component Naming: Use PascalCase for components (e.g., ParkingSpaceCard.tsx).
3. File Structure: Follow the established project structure.
4. Comments: Document complex logic and business rules.
5. Git Commits: Use descriptive commit messages.

### Pull Request Process

1. Create a feature branch: git checkout -b feature/your-feature.
2. Make your changes and commit.
3. Push to your fork: git push origin feature/your-feature.
4. Create a Pull Request on GitHub.


## Troubleshooting

### Common Issues

#### Development Server Won't Start

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

#### Type Errors in VSCode

```bash
# Restart TypeScript server
# In VSCode: Cmd+Shift+P → TypeScript: Restart TS Server
```

#### Build Fails

```bash
# Clean build
npm run build  # This already clears cache
# If issue persists:
rm -rf dist .parcel-cache
npm run build
```

#### Network Status Component Not Working

- Ensure UserNetworkStatus component is properly imported in main.tsx.
- Check browser console for errors.
- Verify online/offline event listeners in the component.

#### Redux State Not Persisting
- Verify redux-persist is configured in the store.
- Check localStorage is enabled in browser.
- Clear browser cache and reload.

#### Tailwind Styles Not Applied
- Ensure Tailwind CSS is imported in src/styles/index.css.
- Rebuild the project: npm run build.
- Check that class names match Tailwind utility names.
- Verify tailwind.config.js content paths are correct.

### AWS Deployment Fails

```bash
# Verify AWS credentials
aws sts get-caller-identity

# Verify S3 bucket exists and is accessible
aws s3 ls s3://parking-ops

# Deploy
aws s3 sync dist/ s3://parking-ops --delete
```

### Performance Optimization

1. Code Splitting: Configure dynamic imports for route-based splitting.
2. Lazy Loading: Implement lazy loading for heavy components.


## Additional Resources

- [React Documentation](https://react.dev/learn)
- [TypeScript Documentation](https://www.typescriptlang.org/.)
- [Redux Toolkit Guide](https://redux-toolkit.js.org/usage/usage-guide)
- [Tailwind CSS Docs](https://tailwindcss.com/docs/installation/using-vite)
- [React Router Documentation](https://reactrouter.com/home)
- [Parcel Documentation](https://parceljs.org/docs/)

## Support & Issues
For issues, bugs, or feature requests, please open an [issue](https://github.com/chukwutem-emi/Frontend-View-Of-Vehicle-Parking-Lot-System/issues) on the GitHub repository.

## Last Updated: May 8, 2026
Maintained By: [Chukwutem Stephen Emi](https://github.com/chukwutem-emi)