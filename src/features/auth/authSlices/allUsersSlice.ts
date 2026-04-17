import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserStateAttributes} from "../../../types/authAttributes/getAllUsersAttributes";

interface GetAllUsersState {
    getUsersDetails: UserStateAttributes;
};
const initialState: GetAllUsersState = {
    getUsersDetails: []
};
const allUsersSlice = createSlice({
    name: "getAllUsers",
    initialState,
    reducers: {
        setAllUsersDetails: (state, action: PayloadAction<UserStateAttributes>) => {
            state.getUsersDetails = action.payload;
        },
        removeAllUserDetails: (state) => {
            state.getUsersDetails = [];
        }
    }
}); 
export const {removeAllUserDetails, setAllUsersDetails} = allUsersSlice.actions;
export default allUsersSlice.reducer;