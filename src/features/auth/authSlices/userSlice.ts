import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserStateAttributes} from "../../../types/authAttributes/getUserAttributes";

interface GetUserState {
    getUserDetails: UserStateAttributes;
};
const initialState: GetUserState = {
    getUserDetails: null
}
const userSlice = createSlice({
    name: "getUser",
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<UserStateAttributes>) => {
            state.getUserDetails = action.payload;
        },
        removeUserDetails: (state) => {
            state.getUserDetails = null;
        }
    }
});
export const {setUserDetails, removeUserDetails} = userSlice.actions;
export default userSlice.reducer;
