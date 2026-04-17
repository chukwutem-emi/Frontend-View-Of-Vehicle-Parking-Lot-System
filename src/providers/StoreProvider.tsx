import {Provider} from "react-redux";
import {AppRouter} from "./RouterProvider";
import {appStore, persister} from "../app/store";
import {PersistGate} from "redux-persist/integration/react";


export const AppStore = () => {
    return (
        <>
        <Provider store={appStore}>
            <PersistGate loading={null} persistor={persister}>
                <AppRouter />
            </PersistGate>
        </Provider>
        </>
    );
};