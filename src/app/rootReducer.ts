import {combineReducers} from "@reduxjs/toolkit";
import tokenReducer from "../features/auth/authSlices/tokenSlice";
import userDetailsReducer from "../features/auth/authSlices/userSlice";
import allUsersDetailsReducer from "../features/auth/authSlices/allUsersSlice";
import slotDetailsReducer   from "../features/parkingSlot/slotSlices/createSlotSlice";


export const rootReducer = combineReducers({
    auth: tokenReducer,
    user: userDetailsReducer,
    users: allUsersDetailsReducer,
    slot: slotDetailsReducer
});