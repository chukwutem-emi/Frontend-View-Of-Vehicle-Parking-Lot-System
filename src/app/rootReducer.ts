import {combineReducers} from "@reduxjs/toolkit";
import tokenReducer from "../features/auth/authSlices/tokenSlice";
import userDetailsReducer from "../features/auth/authSlices/userSlice";
import allUsersDetailsReducer from "../features/auth/authSlices/allUsersSlice";



export const rootReducer = combineReducers({
    token: tokenReducer,
    userDetails: userDetailsReducer,
    allUsersDetails: allUsersDetailsReducer
});