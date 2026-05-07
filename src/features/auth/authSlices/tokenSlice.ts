import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


interface Token {
    token: string | null;
};

const initialState: Token = {
    token: null
};

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.token = action.payload;
        },
        removeToken: (state) => {
            state.token = null
        }
    }
});
export const {removeToken, setToken} = tokenSlice.actions;
export default tokenSlice.reducer;