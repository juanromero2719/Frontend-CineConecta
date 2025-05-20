import { useEffect, useState } from 'react';
import { filterByGenres } from '../adapters/filterByGenres.adapter';
import { MoviesFilterByGenresResponse } from '../models/filterByGenres.models';

interface Filters {
  genre?: string;
  title?: string;
}

export function useFilterByGenres(filters: Filters) {
  const [data, setData] = useState<MoviesFilterByGenresResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    setLoading(true);
    setError(null);

    const fetchFilteredMovies = async () => {
      try {
        const response = await filterByGenres.getMoviesFilterByGenres(filters);
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

    fetchFilteredMovies();

    return () => {
      isMounted = false;
    };
  }, [filters]);

  return { data, loading, error };
} 