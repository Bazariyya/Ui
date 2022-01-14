import { GET_PRODUCTS_ENDPOINT, GET_PRODUCT_ATTRIBUTE_DEFINITION, GET_PRODUCT_IMAGES } from "./Endpoints";
import { MainService } from "./MainService";


export class ProductService extends MainService{


    async getAllProducts(){

        const {data} = await this.getRequest(GET_PRODUCTS_ENDPOINT,{
            token:"Bearer TOKEN"
        });

        return data;

    }

    async getProductImages(id){
        const {data} = await this.postRequest(GET_PRODUCT_IMAGES,{
            productId:parseInt(id)
        },{
            token:"Bearer Token"
        })

        return data;
    }

    async getSingleProduct(id) {
        const {data} = await this.getRequest(`${GET_PRODUCTS_ENDPOINT}/${parseInt(id)}`,{
            token:"Bearer: TOKEN"
        })

        return data;
    }

    async getProductAttributeDefinition(){
        const {data} = await this.postRequest(GET_PRODUCT_ATTRIBUTE_DEFINITION,{
            categoryId: 0
        })

        return data;
    }

}