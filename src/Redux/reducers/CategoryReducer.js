
import { FAILED_SAVE_CATEGORIES_ASTATE, SAVE_SELECTED_CATEGORIES, START_SAVE_CATEGORIES_ASTATE, SUCCESS_SAVE_CATEGORIES_ASTATE } from '../actions/actionTypes'
import {initialState} from './initalState'
export const CategoryReducer = (state = initialState.categories,action) => {

    switch(action.type){

        case START_SAVE_CATEGORIES_ASTATE:
            state.loading = true;
            return state;

        case SUCCESS_SAVE_CATEGORIES_ASTATE:
            state.loading = false;
            state.data = action.payload;
            return state;
        case FAILED_SAVE_CATEGORIES_ASTATE:
            state.errorMessage = "Kategori verisi alınırken bir hata oluştu.";
            state.loading = false;
            return state;

        default:
            return state;

    }
} 