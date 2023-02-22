import { axiosInstance } from '../service/axiosService';
import { endpoints } from './endpoints';

export const getCountry = async (name) => {
    try {
        const response = await axiosInstance.get(`${endpoints.COUNTRY + name}`);
        return await response.data;
    } catch (error) {
        console.error(error);
    }
};
