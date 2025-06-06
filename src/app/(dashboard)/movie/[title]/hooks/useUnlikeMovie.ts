import { useState } from "react";
import { unlikeMovieAdapter } from "@/app/(dashboard)/movie/[title]/adapters/unlikeMovie.adapter";

export function useUnlikeMovie() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const unlikeMovie = async (id: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await unlikeMovieAdapter.unlikeMovie(id);
      setSuccess(response.data.message || "¡Película removida de favoritos!");
      return response.data;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ocurrió un error al quitar el like.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { unlikeMovie, loading, error, success };
} 