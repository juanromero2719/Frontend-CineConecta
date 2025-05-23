import { useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { commentsPerMovie } from '@/app/(dashboard)/movie/[title]/adapters/commentsPerMovie.adapter';
import { MovieReview } from '@/app/(dashboard)/movie/[title]/models/commentsPerMovie.models';

interface UseCommentsPerMovieResult {
  comments: MovieReview[] | null;
  loading: boolean;
  error: string | null;
}

export function useCommentsPerMovie(movieId: string): UseCommentsPerMovieResult {
  const [comments, setComments] = useState<MovieReview[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movieId) return;

    const fetchComments = async () => {
      try {
        const response = await commentsPerMovie.getCommentsPerMovie(movieId);
        setComments(response.data as unknown as MovieReview[]);
        setError(null);
      } catch (err) {
        const axiosError = err as AxiosError;
        setError(axiosError.message);
        setComments(null);
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [movieId]);

  return { comments, loading, error };
}
