import '@/interceptors/axiosInterceptor';
import { axiosInstance } from '@/services/axiosInstance';
import { AxiosResponse, AxiosError } from 'axios';

// models
import { MoviesFilterByGenresResponse } from '@/app/(dashboard)/dashboard/models/filterByGenres.models';

export const filterByGenres = {
    async getMoviesFilterByGenres(params: { genre?: string; title?: string }, token?: string): Promise<AxiosResponse<MoviesFilterByGenresResponse>> {
    try {
      // Construir la query string manualmente
      const query = new URLSearchParams();
      if (params.genre) query.append('genre', params.genre);
      if (params.title) query.append('title', params.title);
      const url = `/movies/search${query.toString() ? '?' + query.toString() : ''}`;

      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
      };
      if (token) headers['Authorization'] = `Bearer ${token}`;

      const response = await axiosInstance.get(url, {
        withCredentials: true,
        headers,
      });

      return response;
    } catch (error: unknown) {
      console.log(error);
      if (error && typeof error === 'object' && (error as AxiosError).isAxiosError) {
        const axiosError = error as AxiosError<{ error: string }>;
        const message = axiosError.response?.data?.error || 'Ocurrió un error inesperado.';
        throw new Error(message);
      }

      throw new Error('Ocurrió un error inesperado.');
    }
  },
};
