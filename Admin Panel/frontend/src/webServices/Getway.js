import axios from 'axios';
import { getToken } from '../helpers/Helpers';

export const axiosClient = axios.create({
    baseURL : "http://localhost:8082/api",
    headers : {
        "Content-Type" : "Application/JSON",
        Authorization : `Bearer ${getToken()}`,
        Accept : "*/*"
    }
});