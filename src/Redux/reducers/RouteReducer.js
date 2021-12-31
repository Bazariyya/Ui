import { SET_ROUTE_SUCCESS } from "../actions/actionTypes";
import {initialState} from './initalState'

export const RouteReducer = (state = initialState.route,action) => {
    switch(action.type){
        case SET_ROUTE_SUCCESS:
            state = action.payload;
            return state;
        default:
            return state;
    }
}