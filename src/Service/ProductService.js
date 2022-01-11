import { GET_PRODUCTS_ENDPOINT } from "./Endpoints";
import { MainService } from "./MainService";


export class ProductService extends MainService{


    async getAllProducts(){

        const {data} = await this.getRequest(GET_PRODUCTS_ENDPOINT,{
            token:"Bearer TOKEN"
        });

        return data;

    }

}