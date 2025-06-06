import '@/interceptors/axiosInterceptor';
import axios, { AxiosError } from 'axios';
import { FeaturedMoviesResponse } from '@/app/(dashboard)/dashboard/models/featuredMovies.models';

export const featuredMovies = {
  async getFeaturedMovies(
    userId: string,
    moviesNumber: number
  ): Promise<FeaturedMoviesResponse> {
    const url = `https://cine-conecta-ml.onrender.com/api/recommendations/${userId}/${moviesNumber}/`;

    try {
      const { data } = await axios.get<FeaturedMoviesResponse>(url, {
        // headers: { 'Content-Type': 'application/json' } // innecesario en GET
      });
      return data;
    } catch (err) {
      if (err instanceof AxiosError) {
        // Mensaje del backend o, si no existe, el mensaje de Axios
        const message =
          err.response?.data?.error ??
          err.message ??
          'Ocurrió un error inesperado.';
        throw new Error(message);
      }
      throw new Error('Ocurrió un error inesperado.');
    }
  },
};
