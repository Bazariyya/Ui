import { ADVERT_CLEAR_SUB_CATEGORY,START_SAVE_SUBCATEGORIES_ASTATE,SUCCESS_SAVE_SUBCATEGORIES_ASTATE,FAILED_SAVE_SUBCATEGORIES_ASTATE, START_SAVE_CATEGORIES_ASTATE,SUCCESS_SAVE_CATEGORIES_ASTATE,FAILED_SAVE_CATEGORIES_ASTATE,ADVERT_SAVE_CATEGORY, ADVERT_SAVE_DETAIL, ADVERT_SAVE_SUB_CATEGORY, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, REGISTER_FAILED, REGISTER_START, REGISTER_SUCCESS, RESPONSIVE_MODE_OFF, RESPONSIVE_MODE_ON, SET_ROUTE_SUCCESS, SAVE_SELECTED_CATEGORIES, SAVE_SELECTED_SUB_cATEGORIES } from "./actionTypes"

// Login Actions
export const LoginStart = () => ({
    type:LOGIN_START
})
export const LoginSuccess = (user) => ({
    type:LOGIN_SUCCESS,
    payload:user
})
export const LoginFailed = (errMessage) => ({
    type:LOGIN_FAILED,
    payload:errMessage
}) 


// Register Actions 
export const RegisterStart = () => ({
    type:REGISTER_START,
})
export const RegisterSuccess = () => ({
    type:REGISTER_SUCCESS
})
export const RegisterFailed = (errMessage) => ({
    type:REGISTER_FAILED,
    payload:errMessage
})

// Route Action
export const SetRouteSuccess = (route) => ({
    type:SET_ROUTE_SUCCESS,
    payload:route
})

// Responsive Mode 
export const ResponsiveModeOn = () => ({
    type:RESPONSIVE_MODE_ON
})
export const ResponsiveModeOff = () => ({
    type:RESPONSIVE_MODE_OFF
})


// New Advert Actions
export const SaveCategoryAdvert = (categoryData) => ({
    type:ADVERT_SAVE_CATEGORY,
    payload:categoryData
})

export const SaveSubCategoryAdvert = (subCategoryData) => ({
    type:ADVERT_SAVE_SUB_CATEGORY,
    payload:subCategoryData
})

export const ClearSubCategoryAdvert = () => ({
    type:ADVERT_CLEAR_SUB_CATEGORY
})

export const AdvertSaveDetail = (detail) => ({
    type:ADVERT_SAVE_DETAIL,
    payload:detail
})


// Save Categories
export const StartSaveCategories = () => ({
    type:START_SAVE_CATEGORIES_ASTATE
})

export const SuccessSaveCategories = (categories) => ({
    type:SUCCESS_SAVE_CATEGORIES_ASTATE,
    payload:categories
})

export const FailedSaveCategories = () => ({
    type:FAILED_SAVE_CATEGORIES_ASTATE
})

export const SaveSelectedCategory = (category) => ({
    type:SAVE_SELECTED_CATEGORIES,
    payload:category
})

// Save subcategory
export const StartSaveSubCategories = () => ({
    type:START_SAVE_SUBCATEGORIES_ASTATE
})
export const SuccessSaveSubCategories = (subcategory) => ({
    type:SUCCESS_SAVE_SUBCATEGORIES_ASTATE,
    payload:subcategory
})

export const FailedSaveSubCategories = () => ({
    type:FAILED_SAVE_SUBCATEGORIES_ASTATE
})

export const SaveSelectedSubCategory = (subcategory) => ({
    type:SAVE_SELECTED_SUB_cATEGORIES,
    payload:subcategory
})