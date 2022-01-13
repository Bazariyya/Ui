import { FAILED_SAVE_SUBCATEGORIES_ASTATE, FINISH_SAVE_SUBCATEGORIES_ASTATE,SUCCESS_SAVE_SUBCATEGORIES_ASTATE,START_SAVE_SUBCATEGORIES_ASTATE, SAVE_SELECTED_SUB_cATEGORIES } from "../actions/actionTypes";
import { initialState } from "./initalState";



export const SubCategoryReducer = (state = initialState.subCategories,action) => {

    switch(action.type) {
        case START_SAVE_SUBCATEGORIES_ASTATE:
            state.loading = true;
            return state;
        case SUCCESS_SAVE_SUBCATEGORIES_ASTATE:
            state.loading = false;
            state.data = action.payload
            return state;
        case FAILED_SAVE_SUBCATEGORIES_ASTATE:
            state.loading = false;
            state.errorMessage = "Alt kategoriler alınırken bir hata oluştu"
            return state;

        case FINISH_SAVE_SUBCATEGORIES_ASTATE:
            state.loading = false;
            return state;

        case SAVE_SELECTED_SUB_cATEGORIES:
            state.selectedSubCategory = action.payload;
            return state;

        default:
            return state;
    }

}
