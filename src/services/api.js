import axios from "axios";

axios.defaults.withCredentials = true;

const API = axios.create({
    baseURL:"http://localhost:8080/api/v1",
    withCredentials: true,
});

export default API;