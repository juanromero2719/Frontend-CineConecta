import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';


export interface LikeMovieResponse {
    message?: string;
    error?: string;
}

export const likeMovieAdapter = {
  async likeMovie(id: string): Promise<AxiosResponse<LikeMovieResponse>> {
    try {
      const response = await axiosInstance.post(`/movies/${id}/like`, {}, {
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
