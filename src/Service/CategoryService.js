
import { GET_CATEGORIES_ENDPOINT } from './Endpoints';
import { MainService } from './MainService';
export class CategoryService extends MainService{

    getAllCategories = async() => {
        const data = await this.postRequest(GET_CATEGORIES_ENDPOINT,{
            id:0,
            categoryId:0,
            code:""
        })
        return data;
    }

    getAllSubCategories = async(categoryId) => {
        const {data} = await this.postRequest(GET_CATEGORIES_ENDPOINT,{
            id:0,
            categoryId:categoryId,
            code:""
        })
        return data;
    }
    

}
