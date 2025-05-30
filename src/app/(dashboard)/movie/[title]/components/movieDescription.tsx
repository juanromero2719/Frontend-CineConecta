import React, { useEffect, useState } from "react";
import Header from "@/components/HeaderComponent";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Movie } from "@/app/(dashboard)/dashboard/models/movies.models";
import { filterByGenres } from "@/app/(dashboard)/dashboard/adapters/filterByGenres.adapter";

export const MovieDescription = () => {

    const { title } = useParams<{ title: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const fetchMovie = async () => {
          setLoading(true);
          try {
            const response = await filterByGenres.getMoviesFilterByGenres({ title: decodeURIComponent(title) });
            setMovie(response.data.results?.[0] || null);
          } catch {
            setMovie(null);
          } finally {
            setLoading(false);
          }
        };
        fetchMovie();
      }, [title]);

    if (loading) {
        return <div className="flex flex-col items-center justify-center min-h-[60vh]"><p>Cargando...</p></div>;
    }

    if (!movie) {
        return <div className="flex flex-col items-center justify-center min-h-[60vh]"><p>Película no encontrada</p></div>;
    }
    return (
        <div
            className="w-full h-[80vh] flex flex-col bg-cover bg-center relative"
            style={{
                backgroundImage:
                    "url('/images/fondoCine.jpg')",
            }}
        >
            {/* Capa oscura */}
            <div className="absolute inset-0 bg-[#0a0d14]/90 z-0"></div>
            {/* Capa de ruido */}
            <div className="absolute inset-0 bg-noise opacity-90 z-10 pointer-events-none"></div>
            {/* Contenido */}
            <div className="relative z-20 mt-2">
                <Header />
            </div>

            <div className="bg-noise p-6 flex flex-col md:flex-row gap-8 z-20 border border-red-900 min-h-[400px] ">
                {/* Poster */}
                <div className="flex-shrink-0 flex justify-center h-full self-end">
                    <Image
                        src={movie.poster_url || '/images/default-movie.png'}
                        alt={movie.title || ''}
                        width={400}
                        height={600}
                        className="rounded-xl object-cover shadow-md w-[180px] h-[260px] md:min-w-[300px] md:w-[20vw] md:h-[50vh]"
                    />
                </div>
                {/* Info principal */}
                <div className="flex-1 flex flex-col gap-2">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{movie.title || ''}</h2>
                <p className="italic text-white/80 mb-2">{(movie as any).saga || 'La saga continúa'}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                    {movie.genre?.split(',').map((g: string) => (
                    <span key={g} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-semibold">{g.trim()}</span>
                    ))}
                </div>
                <div className="flex items-center gap-3 mb-2">
                    <span className="text-white/80 text-sm">{movie.release_date ? new Date(movie.release_date).getFullYear() : ''}</span>
                    <span className="text-yellow-400 text-lg">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < Math.round(movie.rating || 0) ? '★' : '☆'}</span>
                    ))}
                    </span>
                    <span className="text-white/80 text-sm">{movie.rating?.toFixed(1) || ''} {(movie as any).votes ? `(${(movie as any).votes})` : ''}</span>
                </div>
                <div className="flex gap-2 mb-2">
                    <button className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-1 rounded font-semibold text-sm">Añadir a Lista</button>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded font-semibold text-sm">Favorito</button>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded font-semibold text-sm">Compartir</button>
                </div>
                </div>
            </div>
        </div>
    );
};

