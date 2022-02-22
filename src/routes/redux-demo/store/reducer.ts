import { ObjectUtils } from "ts-commons";
import { Actions, RESET_STATE, UPDATE_STATE } from "./actions";

export interface State {
  age: number;
}

export const getInitialState: () => State = () => ({
  age: 18,
});

export function reducer(state = getInitialState(), action: Actions): State {
  switch (action.type) {
    case RESET_STATE: {
      return ObjectUtils.getOrDefault(action.payload, getInitialState());
    }
    case UPDATE_STATE: {
      return { ...state, ...action.payload };
    }
    default: {
      return state;
    }
  }
}
