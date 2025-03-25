import '@/../interceptors/axiosInterceptor';
import { axiosInstance } from '@/../services/axiosInstance';
import { User } from '@/../models/user';
import { AxiosResponse, AxiosError } from 'axios';


export const userAdapter = {
  async getUsers(): Promise<AxiosResponse<User[]>> {
    try {
      return await axiosInstance.get('/users', {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
        },
      });
    } catch (error: unknown) {
      if (error && typeof error === 'object' && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error: string }>;
        const message = axiosError.response?.data?.error || 'Ocurrió un error al obtener los usuarios.';
        throw new Error(message);
      }

      throw new Error('Ocurrió un error inesperado.');
    }
  },
};
