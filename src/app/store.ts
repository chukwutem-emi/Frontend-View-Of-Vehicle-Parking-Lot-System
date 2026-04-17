import {configureStore} from '@reduxjs/toolkit';
import {rootReducer} from './rootReducer';
import storage from "redux-persist/lib/storage";
import {FLUSH, PERSIST, PURGE, PAUSE, REGISTER, REHYDRATE, persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: "root",
    version: 1,
    storage,
    whitelist: ["token", "userDetails", "allUsersDetails"]
};

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const appStore = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== "production",
    middleware: (getDefaultMiddleware) =>  getDefaultMiddleware({serializableCheck: {ignoredActions: [FLUSH, PERSIST, PURGE, PAUSE, REGISTER, REHYDRATE]}})
});
export const persister = persistStore(appStore);