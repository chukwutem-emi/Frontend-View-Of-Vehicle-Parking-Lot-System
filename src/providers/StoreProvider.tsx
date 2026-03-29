import {Provider} from "react-redux";
import {AppRouter} from "./RouterProvider";
import {appStore} from "../app/store";


export const AppStore = () => {
    return (
        <>
        <Provider store={appStore}>
            <AppRouter />
        </Provider>
        </>
    );
};