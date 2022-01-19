import {SAVE_PRODUCT} from '../actions/actionTypes';
import { initialState } from "./initalState";
export const ProductReducer = (state = initialState.products,action) => {
    switch(action.type) {

        case SAVE_PRODUCT:
            state = action.payload
            return state;

        default:
            return state;
    }
}