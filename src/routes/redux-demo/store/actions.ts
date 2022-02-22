import { State } from "./reducer";

export const RESET_STATE = "REDUX_DEMO_RESET_STATE";
export interface ResetStateAction {
  type: typeof RESET_STATE;
  payload?: State;
}

export const UPDATE_STATE = "REDUX_DEMO_UPDATE_STATE";
export interface UpdateStateAction {
  type: typeof UPDATE_STATE;
  payload: Partial<State>;
}

export type Actions = ResetStateAction | UpdateStateAction;

/**
 * reset state
 * @param param State
 */
export function resetStateAction(param?: State): ResetStateAction {
  return {
    type: RESET_STATE,
    payload: param,
  };
}

/**
 * update state
 * @param param Partial<State>
 */
export function updateStateAction(param: Partial<State>): UpdateStateAction {
  return {
    type: UPDATE_STATE,
    payload: param,
  };
}
