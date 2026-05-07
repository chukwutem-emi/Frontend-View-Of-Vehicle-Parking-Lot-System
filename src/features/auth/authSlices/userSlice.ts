import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {UserStateAttributes} from "../../../types/authAttributes/getUserAttributes";

interface GetUserState {
    details: UserStateAttributes;
};
const initialState: GetUserState = {
    details: null
}
const userSlice = createSlice({
    name: "getUser",
    initialState,
    reducers: {
        setUserDetails: (state, action: PayloadAction<UserStateAttributes>) => {
            state.details = action.payload;
        },
        removeUserDetails: (state) => {
            state.details = null;
        }
    }
});
export const {setUserDetails, removeUserDetails} = userSlice.actions;
export default userSlice.reducer;
