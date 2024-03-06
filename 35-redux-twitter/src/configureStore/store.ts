import { legacy_createStore as createStore } from "redux";
import { twitterReducer } from "../reducers/twitterReducer";

export const store = createStore(twitterReducer);