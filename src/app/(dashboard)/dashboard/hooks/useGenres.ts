import { useState, useEffect } from 'react';
import { genres } from '@/app/(dashboard)/dashboard/adapters/genres.adapter';
import { AxiosError } from 'axios';
import { Genre } from '@/app/(dashboard)/dashboard/models/genres.model';

interface UseGenresResult {
  genres: string[];
  loading: boolean;
  error: string | null;
}

export function useGenres(): UseGenresResult {
  const [genresList, setGenresList] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await genres.getGenres();
        // Aseguramos que los géneros sean strings
        const genresArray = response.data.genres.map(genre => {
          if (typeof genre === 'string') return genre;
          if (typeof genre === 'object' && 'name' in genre) return (genre as Genre).name;
          return '';
        }).filter(Boolean);
        
        setGenresList(genresArray);
        setError(null);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
        setGenresList([]);
      } finally {
        setLoading(false);
      }
    };

    fetchGenres();
  }, []);

  return { genres: genresList, loading, error };
}
