import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/actionTypes";
import { initialState } from "./initalState";
// Redux User Reducer
export const UserReducer = (state = initialState.user, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      state.data = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      return state;

    case LOGOUT_SUCCESS:
      state.token = null;
      state.isLoggedIn = false;
      return state;

    default:
      return state;
  }
};
