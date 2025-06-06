import { useEffect, useState } from 'react';
import { featuredMovies } from '@/app/(dashboard)/dashboard/adapters/featuredMovies';
import { FeaturedMoviesResponse } from '@/app/(dashboard)/dashboard/models/featuredMovies.models';

export function useFeaturedMovies(
  userId: string | null,
  moviesNumber: number
) {
  const [data, setData] = useState<FeaturedMoviesResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) {
      // si el usuario cambia a null limpiamos estado
      setData(null);
      return;
    }

    let cancelled = false;
    setLoading(true);
    setError(null);

    featuredMovies
      .getFeaturedMovies(userId, moviesNumber)
      .then((featured) => {
        if (!cancelled) setData(featured); // ← ya viene el JSON tipado
      })
      .catch((err) => {
        if (!cancelled) setError((err as Error).message);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true; // evita setState tras el unmount
    };
  }, [userId, moviesNumber]);

  return { data, loading, error };
}
