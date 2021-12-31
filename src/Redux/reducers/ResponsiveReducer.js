
import {RESPONSIVE_MODE_OFF, RESPONSIVE_MODE_ON} from '../actions/actionTypes'
import {initialState} from './initalState'
export const ResponsiveReducer = (state = initialState.responsiveMode,action) => {
    switch(action.type) {
        case RESPONSIVE_MODE_ON:
            state = true;
            return state;
        case RESPONSIVE_MODE_OFF:
            state = false;
            return state;

        default:
            return state;
    }
}