

import { GET_CITIES, GET_DISTRICT } from './Endpoints'
import {MainService} from './MainService'

export class AdressService extends MainService {



    getCities = async(id = 0,countryId = 0) => {
        const {data} = await this.postRequest(GET_CITIES,{
            id,
            countryId
        });
        
        return data;
    
    }

    getDistrict = async(id = 0,cityId)  => {
        const {data} = await this.postRequest(GET_DISTRICT,{
            id,
            cityId
        })

        return data;
    }

}