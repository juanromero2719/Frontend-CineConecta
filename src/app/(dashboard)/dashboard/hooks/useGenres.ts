import { useEffect, useState } from 'react';
import { genres } from '@/app/(dashboard)/dashboard/adapters/genres.adapter'; 
import { GenreListResponse } from '@/app/(dashboard)/dashboard/models/genres.model';

export function useGenres() {
  const [data, setData] = useState<GenreListResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await genres.getGenres();
        setData(response.data);
      } catch (err) {
        const message =
          err instanceof Error ? err.message : 'Error desconocido al obtener géneros.';
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres(); 
  }, []);

  return { data, loading, error };
}
