import axios from 'axios';

export const axiosClient = axios.create({
    baseURL : "http://localhost:8082",
    headers : {
        "Content-Type" : "Application/JSON",
        Accept : "*/*"
    }
});