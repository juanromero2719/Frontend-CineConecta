import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';

// models
import { MovieReview } from '@/app/(dashboard)/movie/[title]/models/commentsPerMovie.models';

export const commentsPerMovie = {
    async getCommentsPerMovie(id: string): Promise<AxiosResponse<MovieReview>> {
    
    try {

      const response = await axiosInstance.get(`/movies/public-comments/${id}`, {
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
