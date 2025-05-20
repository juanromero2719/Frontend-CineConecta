import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';

// models
import { MovieTopRatedResponse } from '@/app/(dashboard)/dashboard/models/top-rated.models';

export const topRated = {

  async getTopRated(): Promise<AxiosResponse<MovieTopRatedResponse>> {
    try {

      const response = await axiosInstance.get('movies/top-rated', {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      });

      return response;
    } catch (error: unknown) {
      if (error && typeof error === 'object' && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error: string }>;
        const message = axiosError.response?.data?.error || 'Ocurrió un error inesperado.';
        throw new Error(message);
      }

      throw new Error('Ocurrió un error inesperado.');
    }
  },
};
