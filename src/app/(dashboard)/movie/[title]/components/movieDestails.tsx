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
    <div className="flex flex-col gap-6">
      {/* Tarjeta principal */}
      <div className="bg-[rgb(var(--dark-blue-60))] bg-noise rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-8 border border-white/10">
        {/* Poster */}
        <div className="flex-shrink-0 flex justify-center items-start">
          <Image
            src={movie.poster_url || '/images/default-movie.png'}
            alt={movie.title || ''}
            width={220}
            height={320}
            className="rounded-xl object-cover shadow-md w-[180px] h-[260px] md:w-[220px] md:h-[320px]"
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
            <div><span className="font-semibold">Presupuesto:</span> ${(movie as any).budget || 'N/A'}</div>
            <div><span className="font-semibold">Recaudación:</span> ${(movie as any).revenue || 'N/A'}</div>
            <div><span className="font-semibold">Estado:</span> {(movie as any).status || ''}</div>
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

