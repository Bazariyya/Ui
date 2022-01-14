
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from './Endpoints';
import {MainService} from './MainService'


export class AuthService extends MainService{
    registerEvent = async(user) => {
        const {firstName,lastName,email,password} = user;

        const {data} = await this.postRequest(REGISTER_ENDPOINT,{
            name:firstName,
            surname:lastName,
            email,
            password,
        })

        return data;

    }
    loginEvent = (email,password) => {
        return this.postRequest(LOGIN_ENDPOINT,{
            email,
            password
        })

    }
}