import { CHANGE_STATS } from "../actions/statsAction";
import { CHANGE_AVATAR, CHANGE_NAME } from "../actions/userActions";
import { ReduxAction, RootState, StatsType } from "../utils/types"

const initialState: RootState = {
    user: {
    name: 'Monster',
    avatar: 'https://gravatar.com/avatar/000?d=monsterid'
    },
    stats: {
        followers: 0,
        following: 0
      }
}

export const twitterReducer = (state: RootState = initialState, action: ReduxAction) => {
    switch (action.type) {
        case CHANGE_NAME:
            return { ...state, user: { ...state.user, name: action.payload || state.user.name } };
        case CHANGE_AVATAR:
            return { ...state, user: { ...state.user, avatar: action.payload || state.user.avatar } };
        case CHANGE_STATS:
            const statsType = action.payload.statsType as StatsType;
            let res = state.stats[statsType] + action.payload.sum;
            res = res < 0 ? 0 : res;
            return {...state, stats: {...state.stats, [statsType]: res}}
        default:
            return state;
    }
}