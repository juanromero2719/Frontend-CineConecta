// hooks/useTopRatedMovies.ts
import { useEffect, useState } from 'react';
import { topRated } from '@/app/(dashboard)/dashboard/adapters/top-rated.adapter';
import { MovieTopRatedResponse } from '@/app/(dashboard)/dashboard/models/top-rated.models';

export function useTopRated() {
  const [data, setData] = useState<MovieTopRatedResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const fetchTopRated = async () => {
      try {
        const response = await topRated.getTopRated();
        if (isMounted) {
          setData(response.data);
        }
      } catch (err) {
        if (isMounted) {
          setError((err as Error).message);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTopRated();

    return () => {
      isMounted = false;
    };
  }, []);

  return { data, loading, error };
}
