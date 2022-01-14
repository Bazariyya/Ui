

import { GET_USER_ENDPOINT } from './Endpoints';
import {MainService} from './MainService';
export class UserService extends MainService {

    getUser = async(email) => {
        const {data} = await this.postRequest(GET_USER_ENDPOINT,{email})

        return data;
    }
}