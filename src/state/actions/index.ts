import { ActionType } from "../action-types";
import { langs } from "../../global";

interface UpdateAction {
    type: ActionType.UPDATE,
    payload: langs
}

export type Action = UpdateAction // | | |