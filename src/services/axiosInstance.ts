import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://backend-alpha-pearl-61.vercel.app/api',
  withCredentials: true,
});


