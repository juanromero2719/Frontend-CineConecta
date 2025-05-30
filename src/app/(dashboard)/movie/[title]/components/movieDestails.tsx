import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Movie } from '@/app/(dashboard)/dashboard/models/movies.models';
import { useParams } from 'next/navigation';
import { filterByGenres } from '@/app/(dashboard)/dashboard/adapters/filterByGenres.adapter';
import Link from 'next/link';
import CreateComment from './createComment';

interface MovieExtra extends Movie {
  saga?: string;
  votes?: number;
  budget?: number;
  revenue?: number;
  status?: string;
}

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

  const movieExtra = movie as MovieExtra;

  return (
    <div className="flex flex-col gap-6 mt-10 justify-center w-full ">
 
      {/* Sinopsis y reparto */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sinopsis */}
        <div className="md:col-span-2 bg-[rgb(var(--dark-blue-60))] bg-noise rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-2">Sinopsis</h3>
          <p className="text-white/80 text-base">{movie.description || ''}</p>
        </div>
        {/* Detalles */}
        <div className="bg-[rgb(var(--dark-blue-60))] bg-noise rounded-2xl p-6 border border-white/10">
          <h3 className="text-lg font-bold text-white mb-2">Detalles</h3>
          <div className="text-white/80 text-sm space-y-1">
            <div><span className="font-semibold">Director:</span> {movie.director || ''}</div>
            <div><span className="font-semibold">Fecha de estreno:</span> {movie.release_date ? new Date(movie.release_date).toLocaleDateString() : ''}</div>
            <div><span className="font-semibold">Presupuesto:</span> ${movieExtra.budget || 'N/A'}</div>
            <div><span className="font-semibold">Recaudación:</span> ${movieExtra.revenue || 'N/A'}</div>
            <div><span className="font-semibold">Estado:</span> {movieExtra.status || ''}</div>
          </div>
        </div>
      </div>

      {/* Reparto principal */}
      <div className="bg-[rgb(var(--dark-blue-60))] bg-noise rounded-2xl p-6 border border-white/10">
        <h3 className="text-lg font-bold text-white mb-4">Reparto Principal</h3>
        <div className="flex flex-wrap gap-6">
          {/* Simulación de reparto principal */}
          <div className="flex flex-col items-center">
            <Image src="/images/actor1.jpg" alt="Actor Principal" width={80} height={80} className="rounded-full object-cover mb-2" />
            <span className="text-white font-semibold text-sm">Actor Principal</span>
            <span className="text-white/60 text-xs">Protagonista</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/actor2.jpg" alt="Actriz Principal" width={80} height={80} className="rounded-full object-cover mb-2" />
            <span className="text-white font-semibold text-sm">Actriz Principal</span>
            <span className="text-white/60 text-xs">Protagonista</span>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/images/actor3.jpg" alt="Actor Secundario" width={80} height={80} className="rounded-full object-cover mb-2" />
            <span className="text-white font-semibold text-sm">Actor Secundario</span>
            <span className="text-white/60 text-xs">Personaje Secundario</span>
          </div>
        </div>
      </div>

      {/* Modal de comentario */}
      <CreateComment isOpen={showCommentModal} onClose={() => setShowCommentModal(false)} movieName={movie.title} />
    </div>
  );
}

