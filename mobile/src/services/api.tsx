import axios from 'axios';

const api = axios.create({
    baseURL: 'http://192.168.0.20:3002/'
});

export default api;