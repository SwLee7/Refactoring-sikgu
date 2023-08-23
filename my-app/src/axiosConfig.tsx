import axios, { AxiosRequestConfig } from 'axios';

const axiosConfig : AxiosRequestConfig = {
    baseURL: process.env.REACT_APP_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
}
const axiosInstance = axios.create(axiosConfig);

axiosInstance.interceptors.request.use((config) => {
    const token: string | null = sessionStorage.getItem('jwt');
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
});
  export default axiosInstance;