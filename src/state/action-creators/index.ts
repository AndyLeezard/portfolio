import { ActionType } from "../action-types"
import { Dispatch } from "redux"
import { Action } from "../actions/index"
import { langs } from '../../global';

export const updateLang = (input: langs) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.UPDATE,
            payload: input
        })
    }
}