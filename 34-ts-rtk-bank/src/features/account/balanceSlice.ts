import { createSlice } from "@reduxjs/toolkit";

const balanceSlice = createSlice({
    name: 'account',
    initialState: 0,
    reducers: {
        deposit: (state, action) => {
            return state + action.payload;
        },
        withdraw: (state, action) => {
            const res = state - action.payload;
            return res < 0 ? state : res;
        }
    }
})

export const {deposit, withdraw} = balanceSlice.actions;
export default balanceSlice.reducer;