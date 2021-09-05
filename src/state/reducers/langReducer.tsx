import { Action } from "../actions/index"
import { ActionType } from "../action-types";
import { langs } from "../../global";

const reducer = (state:langs = langs.REACT, action:Action) => {
    switch(action.type){
        case ActionType.UPDATE:
            return action.payload;
        default:
            return state
    }
}

export default reducer;