import axios from 'axios';

const baseURL = 'https://measure-shelter-api.herokuapp.com/';

const api = axios.create({ baseURL });

export const getData = async (endpoint) => api.get(endpoint);

export default api;
