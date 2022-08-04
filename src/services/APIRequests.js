import axios from 'axios';

const { REACT_APP_HOSTNAME: HOST, REACT_APP_BACKEND_PORT: PORT } = process.env;

const baseURL = HOST;

const api = axios.create({ baseURL });

export const getData = async (endpoint) => api.get(endpoint);

export default api;
