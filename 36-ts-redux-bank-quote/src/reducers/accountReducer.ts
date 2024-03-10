import { DEPOSIT, WITHDRAW } from "../actions/accountActions";
import { ReduxAction, RootState } from "../utils/types";

const initialState = {
    balance: 0
}

export const accountReducer = (state: RootState = initialState, action: ReduxAction) => {

    switch (action.type) {
        case DEPOSIT:
            return { ...state, balance: state.balance + action.payload }
        case WITHDRAW:
            const res = state.balance - action.payload;
            return { ...state, balance: res < 0 ? state.balance : res }
        default:
            return state;
    }
}