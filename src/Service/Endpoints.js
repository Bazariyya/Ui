

const BASE_URL = "/api"
export const BASE_IMAGE_URL = "https://bazariyya.com/ClientApp/ProductImages"


export const REGISTER_ENDPOINT = `${BASE_URL}/Account/add-user`;
export const LOGIN_ENDPOINT = `${BASE_URL}/Account/token`;
export const GET_CATEGORIES_ENDPOINT = `${BASE_URL}/Category/get-categories`
export const GET_PRODUCTS_ENDPOINT = `${BASE_URL}/Product`
export const GET_PRODUCT_IMAGES = GET_PRODUCTS_ENDPOINT + "/get-product-images";
export const GET_USER_ENDPOINT = `${BASE_URL}/Account/get-user`;
export const GET_PRODUCT_ATTRIBUTE_DEFINITION = `${GET_PRODUCTS_ENDPOINT}/get-product-attribute-definitions`;