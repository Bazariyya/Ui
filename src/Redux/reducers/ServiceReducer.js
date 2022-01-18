import { SAVE_SERVICE_INSTANCE } from "../actions/actionTypes";
import { initialState } from "./initalState";



export const ServiceReducer = (state = initialState.services,action) => {

    switch(action.type) {
        case SAVE_SERVICE_INSTANCE:
            state = action.payload;
            return state;

        default:
            return state;
    }
}