import { SAVE_PRODUCT_IMAGES } from '../actions/actionTypes';
import {initialState} from './initalState'
export const productImagesReducer = (state = initialState.productImages,action) => {
    switch(action.type) {
        case SAVE_PRODUCT_IMAGES:
            state = action.payload;
            return state;
        
        default:
            return state;
    }
}