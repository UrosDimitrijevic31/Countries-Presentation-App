import { axiosInstance } from '../service/axiosService';
import { endpoints } from './endpoints';

export const getCountries = async () => {
    try {
        const response = await axiosInstance.get(`${endpoints.COUNTRIES}`);
        return await response.data;
    } catch (error) {
        console.error(error);
    }
};
