import axios from 'axios';

const axiosInstance = axios.create({
  // baseURL: 'https://moneyflow-9050b2a786b8.herokuapp.com/api/v1',
  baseURL: 'http://localhost:3333/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

export default axiosInstance;
