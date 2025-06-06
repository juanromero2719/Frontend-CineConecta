import { useState } from "react";
import { likeMovieAdapter } from "@/app/(dashboard)/movie/[title]/adapters/likeMovie.adapter";

export function useLikeMovie() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const likeMovie = async (id: string) => {
    setLoading(true);
    setError(null);
    setSuccess(null);
    try {
      const response = await likeMovieAdapter.likeMovie(id);
      setSuccess(response.data.message || "¡Película marcada como favorita!");
      return response.data;
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Ocurrió un error al dar like.");
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { likeMovie, loading, error, success };
} 