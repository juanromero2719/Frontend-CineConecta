'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { Movie } from '@/app/(dashboard)/dashboard/models/movies.models';
import Image from 'next/image';
import Link from 'next/link';
import { Star } from 'lucide-react';

interface MovieCarouselProps {
  title: string;
  movies: Movie[] | null;
  loading: boolean;
  error: Error | null;
  subtitle?: string;
  seeAllUrl?: string;
}

const ITEM_WIDTH        = 280; 
const DISPLAY_FACTOR    = 3;
const SPEED_PX_PER_FRAME = 0.5;

const MovieCarousel: React.FC<MovieCarouselProps> = ({
  title,
  movies,
  loading,
  error,
  subtitle,
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const rafId     = useRef<number | null>(null);
  const hovering  = useRef(false);

  const renderMovies = movies ? Array(DISPLAY_FACTOR).fill(movies).flat() : [];

  const autoScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || !movies?.length) return;

    const listWidth = ITEM_WIDTH * movies.length;

    if (!hovering.current) {
      el.scrollLeft += SPEED_PX_PER_FRAME;
    }

    if (el.scrollLeft >= listWidth) {
      el.style.scrollBehavior = 'auto';
      el.scrollLeft           = el.scrollLeft - listWidth;
      el.style.scrollBehavior = 'smooth';
    }

    rafId.current = requestAnimationFrame(autoScroll);
  }, [movies]);

  useEffect(() => {
    rafId.current = requestAnimationFrame(autoScroll);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [autoScroll]);

  if (error)    return <p className="text-center text-red-700">{error.message}</p>;
  if (loading)  return <p className="text-center">Cargando…</p>;
  if (!movies?.length) return null;

  return (
    <div className="w-full">
      {/* Encabezado de la sección */}
      <div className="flex items-center justify-between mb-2 px-2">
        <div className='px-4'> 
          <h2 className="text-xl md:text-2xl font-bold text-white flex items-center gap-2">
            {title}
          </h2>
          <p className="text-white/70 text-sm mt-1 hidden md:block">
            {subtitle}
          </p>
        </div>
     
      </div>

      {/* Carrusel */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-6 overflow-x-auto px-2 py-2"
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => (hovering.current = false)}
        >
          {renderMovies.map((movie, i) => {
            const poster = movie.poster_url && movie.poster_url.trim() !== ''
              ? movie.poster_url
              : '/images/default-movie.png';
            return (
              <div
                key={`${movie.id}-${i}`}
                className="flex-shrink-0 rounded-xl bg-[#232b38] text-white shadow-lg relative overflow-hidden border border-white/10"
                style={{ width: ITEM_WIDTH }}
              >
                {/* Imagen */}
                <div className="relative">
                  <Image
                    src={poster}
                    alt={movie.title}
                    width={ITEM_WIDTH}
                    height={180}
                    className="h-44 w-full object-cover rounded-t-xl"
                  />
                  {/* Calificación en la esquina superior derecha */}
                  <div className="absolute top-2 right-2 flex items-center gap-1 bg-[#232b38] bg-opacity-90 px-2 py-1 rounded-full shadow text-yellow-400 text-xs font-bold">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {movie.rating?.toFixed(1) ?? 'N/A'}
                  </div>
                </div>
                {/* Info */}
                <div className="p-4 flex flex-col gap-2 min-h-[110px]">
                  <Link href={`/movie/${movie.title}`} className="hover:underline">
                    <h3 className="font-semibold text-base md:text-lg text-white mb-1 truncate">
                      {movie.title}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-2 text-xs text-white/70">
                    <span className="flex items-center gap-1">
                      <svg width="14" height="14" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M7 10V7a5 5 0 1 1 10 0v3h1a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h1Zm2-3a3 3 0 1 1 6 0v3H9V7Z"/></svg>
                      {movie.year}
                    </span>
                  </div>
                  {/* Géneros */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {movie.genres?.slice(0, 2).map((genre: string, idx: number) => (
                      <span key={idx} className="bg-[#1a2230] text-white/80 text-xs px-2 py-1 rounded-md">
                        {genre}
                      </span>
                    ))}
                    {movie.genres && movie.genres.length > 2 && (
                      <span className="bg-[#1a2230] text-white/60 text-xs px-2 py-1 rounded-md">+{movie.genres.length - 2}</span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MovieCarousel;
