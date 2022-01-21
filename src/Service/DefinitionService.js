import { DEFINITION_ENDPOINT } from "./Endpoints";
import { MainService } from "./MainService";


export class DefinitionService extends MainService{


    getDefById = async(id) => {
        const {data} = await this.postRequest(DEFINITION_ENDPOINT,{productAttributeDefinitionId:id})
        return data;
    } 


}