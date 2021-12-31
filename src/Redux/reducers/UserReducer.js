
import { LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS } from '../actions/actionTypes';
import { initialState } from './initalState';
// Redux User Reducer
export const UserReducer = (state = initialState.user,action) => {
    switch(action.type) {
        case LOGIN_SUCCESS:
            state.data = action.payload;
            state.loading = false;
            state.isLoggedIn = true;
            state.errorMessage = ''
            return state;
        case LOGIN_START:
            state.loading = true;
            return state;
        case LOGIN_FAILED:
            state.loading = false;
            state.isLoggedIn = false;
            state.errorMessage = action.payload;
            return state;
        default:
            return state;
    }
}