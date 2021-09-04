import { combineReducers } from "redux"
import accountReducer from "./accountReducer"

const reducers = combineReducers({
    // key-value system
    account: accountReducer
});

export type State = ReturnType<typeof reducers>

export default reducers;