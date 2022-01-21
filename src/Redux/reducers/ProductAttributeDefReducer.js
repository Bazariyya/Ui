import { PRODUCT_ATTIRBUTE_DEFINITIONS } from "../actions/actionTypes";
import { initialState } from "./initalState";


export const ProductAttributeDefination = (state = initialState.productAttributeDefinitions,action) => {

    switch(action.type){
        case PRODUCT_ATTIRBUTE_DEFINITIONS:
            state = action.payload;
            return state;
        default:
            return state;
    }

}