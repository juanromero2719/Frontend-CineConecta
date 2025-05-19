import { useEffect, useState } from 'react';
import { recentMovies } from '@/app/(dashboard)/dashboard/adapters/recentMovies.adapter';
import { MovieListResponse } from '@/app/(dashboard)/dashboard/models/recentMovies.models';

export function useRecentMovies() {
  const [data, setData] = useState<MovieListResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRecentMovies = async () => {
      try {
        const response = await recentMovies.getRecentMovies();
        setData(response.data);
      } catch (err) {
        const message = err instanceof Error ? err.message : 'Error desconocido al obtener películas recientes.';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchRecentMovies();
  }, []);

  return { data, loading, error };
}
