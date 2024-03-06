import { StatsType } from "../utils/types";

export const CHANGE_STATS = 'CHANGE_STATS';

export const changeStats = (statsType: StatsType, sum: number) => ({
    type:CHANGE_STATS,
    payload: {
        statsType, sum
    }
})