import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';

// models
import { MoviesFilterByGenresResponse } from '@/app/(dashboard)/dashboard/models/filterByGenres.models';

export const filterByGenres = {
    async getMoviesFilterByGenres(params: { genre?: string; title?: string }): Promise<AxiosResponse<MoviesFilterByGenresResponse>> {
    
    try {

      const response = await axiosInstance.get('/movies/search', {
        params,
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
