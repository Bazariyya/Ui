import { combineReducers } from "redux";
import { UserReducer } from './UserReducer';
import { RouteReducer } from "./RouteReducer";
import { ResponsiveReducer } from "./ResponsiveReducer";
import { NewAdveretReducer } from "./NewAdvertReducer";
import { CategoryReducer } from "./CategoryReducer";
import {SubCategoryReducer} from './SubCategoryReducer';
import {ProductAttributeDefination} from './ProductAttributeReducer'
import {ServiceReducer} from './ServiceReducer'
import { ProductReducer } from "./ProductReducer";
import { productImagesReducer } from "./ProductImagesReducer";

export const Root = combineReducers({
    user:UserReducer,
    route:RouteReducer,
    responsive:ResponsiveReducer,
    newadvert:NewAdveretReducer,
    categories:CategoryReducer,
    subCategories:SubCategoryReducer,
    definition:ProductAttributeDefination,
    service:ServiceReducer,
    products:ProductReducer,
    productImages:productImagesReducer
})