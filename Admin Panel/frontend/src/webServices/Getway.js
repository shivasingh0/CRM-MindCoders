import axios from 'axios';

export const axiosClient = axios.create({
    baseURL : "http://192.168.29.77:8082/api",
    headers : {
        "Content-Type" : "Application/JSON",
        Accept : "*/*"
    }
});