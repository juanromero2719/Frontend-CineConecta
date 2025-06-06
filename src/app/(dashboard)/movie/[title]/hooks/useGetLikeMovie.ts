import { useEffect, useState } from "react";
import { getLikeMovieAdapter } from "@/app/(dashboard)/movie/[title]/adapters/getLikeMovie.adapter";

export function useGetLikeMovie(id: string | null) {
  const [liked, setLiked] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    setError(null);
    getLikeMovieAdapter.getLikeMovie(id)
      .then(res => setLiked(!!res.data.liked))
      .catch(err => setError(err.message || "Error al consultar el like."))
      .finally(() => setLoading(false));
  }, [id]);

  return { liked, loading, error };
} 