import axios from 'axios';

const api = axios.create({
  baseURL: 'https://pi-t2-g3.herokuapp.com/',
});

export default api;