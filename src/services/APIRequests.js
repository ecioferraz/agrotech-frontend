import axios from 'axios';

const api = axios.create({
  baseURL: 'https://measure-shelter-api.herokuapp.com/'
});

export const getData = async (endpoint) => api.get(endpoint);

export default api;