
import {MainService} from './MainService'


export class AuthService extends MainService{
    registerEvent = (user) => {
        const {firstName,lastName,email,password} = user;

        return this.postRequest('ENDPOINT',{
            firstName,
            lastName,
            email,
            password
        })

    }
    loginEvent = (user) => {
        const {email,password} = user;
        return this.postRequest('ENDPOINT',{
            email,
            password
        })

    }
}