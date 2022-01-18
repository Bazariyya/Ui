export const initialState = {
    user:{
        data:null,
        token:null,
        isLoggedIn:false
    },
    route:'/',
    responsiveMode:false,
    NewAdvert: {
        category:null,
        subCategory:null,
        advertDetails: null
    },

    categories: {
        data:[],
        loading:false,
        errorMessage:'',
        selectedCategory:null
    },
    subCategories: {
        data:[],
        loading:false,
        errorMessage:'',
        selectedSubCategory:null
    },
    productAttributeDefinitions: null,
    services: [
    ]
    
}