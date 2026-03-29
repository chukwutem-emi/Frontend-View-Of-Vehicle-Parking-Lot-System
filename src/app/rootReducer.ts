import {combineReducers} from "@reduxjs/toolkit";
import tokenReducer from "../utils/tokenSlice";
import userDetailsReducer from "../utils/userSlice";
import allUsersDetailsReducer from "../utils/allUsersSlice";



export const rootReducer = combineReducers({
    token: tokenReducer,
    userDetails: userDetailsReducer,
    allUsersDetails: allUsersDetailsReducer
});