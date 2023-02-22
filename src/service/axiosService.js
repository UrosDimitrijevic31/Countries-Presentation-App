import axios from 'axios';
import { endpoints } from '../api/endpoints';

export const axiosInstance = axios.create({
    baseURL: endpoints.BASE_URL
});
