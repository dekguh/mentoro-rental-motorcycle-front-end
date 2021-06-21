import axios from 'axios';

const Api = axios.create({
    baseURL: process.env.BASE_API_URL
});

export default Api