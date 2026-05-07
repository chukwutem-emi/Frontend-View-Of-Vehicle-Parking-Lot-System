import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserStateAttributes} from "../../../types/authAttributes/getAllUsersAttributes";

interface GetAllUsersState {
    details: UserStateAttributes;
};
const initialState: GetAllUsersState = {
    details: []
};
const allUsersSlice = createSlice({
    name: "getAllUsers",
    initialState,
    reducers: {
        setAllUsersDetails: (state, action: PayloadAction<UserStateAttributes>) => {
            state.details = action.payload;
        },
        removeAllUserDetails: (state) => {
            state.details = [];
        }
    }
}); 
export const {removeAllUserDetails, setAllUsersDetails} = allUsersSlice.actions;
export default allUsersSlice.reducer;