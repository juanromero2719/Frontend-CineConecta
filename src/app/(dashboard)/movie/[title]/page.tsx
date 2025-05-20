'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { filterByGenres } from '@/app/(dashboard)/dashboard/adapters/filterByGenres.adapter';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { Movie } from '@/app/(dashboard)/dashboard/models/movies.models';

export default function MovieDetailPage() {
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
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl font-bold mb-4 text-[rgb(var(--gray))]">Película no encontrada</h2>
        <p className="text-lg text-[rgb(var(--gray))] text-center">No se encontró información para la película <b>{decodeURIComponent(title)}</b>.</p>
        <p className="text-lg text-[rgb(var(--gray))] text-center">
          <Link href="/dashboard" className='hover:underline'>Volver a la página principal</Link>
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-8 bg-[#f7f3ef] p-8 rounded-xl shadow-lg max-w-4xl mx-auto mt-8">
      <Image
        src={movie.poster_url || '/images/default-movie.png'}
        alt={movie.title || ''}
        width={350}
        height={500}
        className="rounded-xl object-cover shadow-lg"
      />
      <div className="flex-1 flex flex-col gap-2">
        <h2 className="text-4xl font-bold text-[rgb(var(--gray))] mb-2">{movie.title || ''}</h2>
        <div className="flex gap-2 mb-2">
          {movie.genre?.split(',').map((g: string) => (
            <span key={g} className="bg-[#c07b3e] text-white px-3 py-1 rounded-full text-lg font-semibold">{g.trim()}</span>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-yellow-600 text-3xl">
            {Array.from({ length: 5 }).map((_, i) => (
              <span key={i}>{i < Math.round(movie.rating || 0) ? '★' : '☆'}</span>
            ))}
          </span>
          <span className="text-2xl font-bold text-[#ba7c3a]">{movie.rating?.toFixed(1) || ''}/5.0</span>
        </div>
        <div className="mb-2">
          <span className="font-bold text-[rgb(var(--gray))]">Director:</span> <span className="font-semibold">{movie.director || ''}</span>
        </div>
        <div className="mb-2">
          <span className="font-bold text-[rgb(var(--gray))]">Año:</span> <span className="font-semibold">{movie.release_date ? new Date(movie.release_date).getFullYear() : ''}</span>
        </div>
        <p className="mt-2 text-lg text-[rgb(var(--gray))]">{movie.description || ''}</p>
        <button className="mt-6 bg-white text-[rgb(var(--gray))] font-bold px-6 py-2 rounded-lg shadow hover:bg-[#c07b3e] hover:text-white transition">Añadir Reseña</button>
      </div>
    </div>
  );
}

