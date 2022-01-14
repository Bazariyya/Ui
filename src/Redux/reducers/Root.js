import { combineReducers } from "redux";
import { UserReducer } from './UserReducer';
import { RouteReducer } from "./RouteReducer";
import { ResponsiveReducer } from "./ResponsiveReducer";
import { NewAdveretReducer } from "./NewAdvertReducer";
import { CategoryReducer } from "./CategoryReducer";
import {SubCategoryReducer} from './SubCategoryReducer';
import {ProductAttributeDefination} from './ProductAttributeReducer'
export const Root = combineReducers({
    user:UserReducer,
    route:RouteReducer,
    responsive:ResponsiveReducer,
    newadvert:NewAdveretReducer,
    categories:CategoryReducer,
    subCategories:SubCategoryReducer,
    definition:ProductAttributeDefination
})