
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface StatsPayload {
    sum: number,
    statsType: 'followers' | 'following'
}

const statsSlice = createSlice({
    name: 'stats',
    initialState: {
        followers: 0,
        following: 0
    },
    reducers: {
        changeStats: (state, action: PayloadAction<StatsPayload>) => {
            const statsType = action.payload.statsType;
            let res = state[statsType] + action.payload.sum;
            state[statsType] = res < 0 ? 0 : res;
        }
    }
})

export const { changeStats } = statsSlice.actions; 
export default statsSlice.reducer;
