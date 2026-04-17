import {createSlice, type PayloadAction} from "@reduxjs/toolkit";


interface Token {
    getToken: string | null;
};

const initialState: Token = {
    getToken: null
};

const tokenSlice = createSlice({
    name: "token",
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string | null>) => {
            state.getToken = action.payload;
        },
        removeToken: (state) => {
            state.getToken = null
        }
    }
});
export const {removeToken, setToken} = tokenSlice.actions;
export default tokenSlice.reducer;