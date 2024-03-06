import { legacy_createStore as createStore } from "redux"
import { accountReducer } from "../reducers/accountReducer"

const initialState = {
    balance: 0
}

export const store = createStore(accountReducer, initialState);