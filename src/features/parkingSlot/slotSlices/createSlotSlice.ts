import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { GetParkingSlotAttributes } from "../../../types/ParkingSlotAttributes/getParkingSlotAttributes";



interface GetSlotState {
    Details : GetParkingSlotAttributes | null;
};

const initialState: GetSlotState = {
    Details : null
};

const slotSlice = createSlice({
    name : "getSlot",
    initialState,
    reducers: {
        setSlotDetails: (state, action : PayloadAction<GetParkingSlotAttributes | null>) => {
            state.Details = action.payload;
        },
        removeSlotDetails: (state) => {
            state.Details = null;
        }
    }
});
export const {removeSlotDetails, setSlotDetails} = slotSlice.actions;
export default slotSlice.reducer;