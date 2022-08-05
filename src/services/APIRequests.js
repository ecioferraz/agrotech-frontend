import axios from 'axios';

// const { REACT_APP_HOSTNAME: HOST } = process.env;

const api = axios.create({
  baseURL: 'http://measure-shelter-api.herokuapp.com/'
});

export const getData = async (endpoint) => api.get(endpoint);

export default api;