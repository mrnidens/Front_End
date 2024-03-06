import { DEPOSIT, WITHDRAW } from "../actions/accountActions";

export interface Balance {
    sum : number;
}

export interface RootState {
    balance: Balance,
}

