import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Movie } from '@/app/(dashboard)/dashboard/models/movies.models';
import { useParams } from 'next/navigation';
import { filterByGenres } from '@/app/(dashboard)/dashboard/adapters/filterByGenres.adapter';
import Link from 'next/link';
import CreateComment from './createComment';

export default function MovieDetails() {

    const { title } = useParams<{ title: string }>();
    const [movie, setMovie] = useState<Movie | null>(null);
    const [loading, setLoading] = useState(true);
    const [showCommentModal, setShowCommentModal] = useState(false);

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
        return (
          <div className="flex flex-col items-center justify-center min-h-[60vh] ">
            <h2 className="text-3xl font-bold mb-4 text-[rgb(var(--gray))]">Película no encontrada</h2>
            <p className="text-lg text-[rgb(var(--gray))] text-center">No se encontró información para la película <b>{decodeURIComponent(title)}</b>.</p>
            <p className="text-lg text-[rgb(var(--gray))] text-center">
              <Link href="/dashboard" className='hover:underline'>Volver a la página principal</Link>
            </p>
          </div>
        );
      }

    return (
        <div className="flex flex-col md:flex-row gap-8 px-8 py-20 mx-auto bg-[rgba(var(--latte))]">
        <Image
          src={movie.poster_url || '/images/default-movie.png'}
          alt={movie.title || ''}
          width={500}
          height={650}
          className="rounded-xl object-cover shadow-lg"
        />
        <div className="flex-1 flex flex-col gap-2  px-[100px]">
          <h2 className="text-5xl font-bold text-[rgb(var(--gray))] mb-6 text-center">{movie.title || ''}</h2>
          <div className="flex gap-2 mb-2 justify-center">
            {movie.genre?.split(',').map((g: string) => (
              <span key={g} className="bg-[#c07b3e]  text-white px-3 py-1 rounded-full text-3xl font-semibold">{g.trim()}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-10 justify-center">
            <span className="text-yellow-600 text-6xl">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i}>{i < Math.round(movie.rating || 0) ? '★' : '☆'}</span>
              ))}
            </span>
            <span className="ml-10 text-4xl font-bold text-[#ba7c3a]">{movie.rating?.toFixed(1) || ''}/5.0</span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-[#ba7c3a] text-4xl mr-6">Director:</span> <span className="font-semibold text-[rgb(var(--gray))] text-4xl">{movie.director || ''}</span>
          </div>
          <div className="mb-2">
            <span className="font-bold text-[#ba7c3a] text-4xl mr-6">Año:</span> <span className="font-semibold text-[rgb(var(--gray))] text-4xl">{movie.release_date ? new Date(movie.release_date).getFullYear() : ''}</span>
          </div>
          <p className="mt-2 text-4xl text-[rgb(var(--gray))]">{movie.description || ''}</p>
          <button
            className="mt-6 bg-white text-[rgb(var(--gray))] font-bold px-6 py-2 rounded-lg shadow hover:bg-[#c07b3e] hover:text-white transition text-3xl"
            onClick={() => setShowCommentModal(true)}
          >
            Añadir Reseña
          </button>
        </div>
        {/* Modal de comentario */}
        <CreateComment isOpen={showCommentModal} onClose={() => setShowCommentModal(false)} movieName={movie.title} />
      </div>
    )
}

