
import { GET_CATEGORIES_ENDPOINT } from './Endpoints';
import { MainService } from './MainService';
const mainService = new MainService()

export const getAllCategories = async() => {
    const data = await mainService.postRequest(GET_CATEGORIES_ENDPOINT,{
        id:0,
        categoryId:0,
        code:""
    })
    return data;
}

export const getAllSubCategories = async(categoryId) => {
    const {data} = await mainService.postRequest(GET_CATEGORIES_ENDPOINT,{
        id:0,
        categoryId:categoryId,
        code:""
    })
    return data;
}

