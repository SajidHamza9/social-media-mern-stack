import {
  REQUEST_LOGGED_IN_SUCCESS,
  REQUEST_LOGGED_IN_FAILED,
} from "../actions/types";

export const loginReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case REQUEST_LOGGED_IN_SUCCESS:
      return { users: action.payload };
    case REQUEST_LOGGED_IN_FAILED:
      return { error: action.payload };
    default:
      return state;
  }
};
