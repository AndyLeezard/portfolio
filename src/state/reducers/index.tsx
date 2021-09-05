import { combineReducers } from "redux"
import langReducer from '../reducers/langReducer';

const reducers = combineReducers({
    // key-value system
    lang: langReducer
});

export type State = ReturnType<typeof reducers>

export default reducers;