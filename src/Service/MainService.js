import axios from "axios";

export class MainService {

    getRequest(url,...parameter) {
        return axios.get(url,...parameter);
    }

    postRequest(url,...parameter) {
        return axios.post(url,...parameter);
    }


}