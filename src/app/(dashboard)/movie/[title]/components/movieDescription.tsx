import React, { useEffect, useState } from "react";
import Header from "@/components/HeaderComponent";
import Image from "next/image";
import { useParams } from "next/navigation";
import { Movie } from "@/app/(dashboard)/dashboard/models/movies.models";
import { filterByGenres } from "@/adapters/filterByGenres.adapter";
import CreateComment from "./createComment";

interface MovieExtra extends Movie {
  saga?: string;
  votes?: number;
}

export const MovieDescription = () => {

    const { title } = useParams<{ title: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);
    const [isCommentModalOpen, setIsCommentModalOpen] = useState(false);
    
    useEffect(() => {
        const fetchMovie = async () => {
          setLoading(true);
          try {
            const response = await filterByGenres.getMoviesFilterByGenres({ title: decodeURIComponent(title) });
            console.log('id', response.data.results?.[0].id);
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

    const movieExtra = movie as MovieExtra;

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

            <div className="bg-noise p-6 flex flex-col md:flex-row gap-8 z-20 min-h-[400px] w-full md:absolute md:bottom-0 md:left-0 md:right-0">
                {/* Poster */}
                <div className="flex-shrink-0 flex justify-center items-center md:items-end h-full">
                    <Image
                        src={movie.poster_url || '/images/default-movie.png'}
                        alt={movie.title || ''}
                        width={400}
                        height={600}
                        className="rounded-xl object-cover shadow-md w-[140px] h-[200px] sm:w-[160px] sm:h-[230px] md:min-w-[300px] md:w-[20vw] md:h-[50vh]"
                    />
                </div>
                {/* Info principal */}
                <div className="flex-1 flex flex-col gap-4 mt-4 text-center md:mt-0 md:text-left w-full max-w-[95vw] px-3">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">{movie.title || ''}</h2>
                <p className="italic text-white/80 mb-2">{movieExtra.saga || 'La saga continúa'}</p>
                <div className="flex flex-wrap gap-2 mb-2 justify-center md:justify-start">
                    {movie.genre?.split(',').map((g: string) => (
                    <span key={g} className="bg-white/10 text-white px-3 py-1 rounded-full text-sm font-semibold">{g.trim()}</span>
                    ))}

                </div>
                <span className="text-white/80 text-sm">{movie.release_date ? new Date(movie.release_date).getFullYear() : ''}</span>

                <div className="flex flex-graw items-center gap-3 mb-2 justify-center md:justify-start">
                    <span className="text-yellow-400 text-2xl">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i}>{i < Math.round(movie.rating || 0) ? '★' : '☆'}</span>
                    ))}
                    </span>
                    <span className="text-white/80 text-lg">{movie.rating?.toFixed(1) || ''} {movieExtra.votes ? `(${movieExtra.votes})` : ''}</span>
                </div>
                <div className="flex gap-2 mb-2 justify-center md:justify-start flex-wrap">
                    <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded font-semibold text-sm">Me gusta ❤️</button>
                    <button 
                        onClick={() => setIsCommentModalOpen(true)}
                        className="bg-white/10 hover:bg-white/20 text-white px-4 py-1 rounded font-semibold text-sm"
                    >
                        Comentar 📩
                    </button>
                </div>
                </div>
            </div>

            <CreateComment 
                isOpen={isCommentModalOpen}
                onClose={() => setIsCommentModalOpen(false)}
                movieName={movie.title}
                movieId={movie.id}
            />
        </div>
    );
};

