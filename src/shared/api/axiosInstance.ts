import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://moneyflow-9050b2a786b8.herokuapp.com/api/v1',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
