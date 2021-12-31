
import { ADVERT_CLEAR_SUB_CATEGORY, ADVERT_SAVE_CATEGORY, ADVERT_SAVE_DETAIL, ADVERT_SAVE_SUB_CATEGORY } from '../actions/actionTypes'
import {initialState} from './initalState'
export const NewAdveretReducer = (state = initialState.NewAdvert,action) => {
    switch(action.type){
        case ADVERT_SAVE_CATEGORY:
            state.category = {...action.payload};
            return state;
        
        case ADVERT_SAVE_SUB_CATEGORY:
            state.subCategory = {...action.payload}
            return state;

        case ADVERT_CLEAR_SUB_CATEGORY:
            state.subCategory = {
                id:0,
                name:'',
                topCategory:0
            }
            return state;
        
        case ADVERT_SAVE_DETAIL:
            state.advertDetails = {...action.payload};
            return state;
        default:
            return state;

    }
}