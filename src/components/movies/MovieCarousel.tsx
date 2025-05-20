'use client';

import React, { useRef, useEffect, useCallback } from 'react';
import { Movie } from '@/app/(dashboard)/dashboard/models/movies.models';
import Image from 'next/image';

interface MovieCarouselProps {
  title: string;
  movies: Movie[] | null;
  loading: boolean;
  error: Error | null;
}

const ITEM_WIDTH        = 208; 
const DISPLAY_FACTOR    = 3;   
const SPEED_PX_PER_FRAME = 0.5; 

const MovieCarousel: React.FC<MovieCarouselProps> = ({
  title,
  movies,
  loading,
  error,
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

  /* ---------- UI states ---------- */
  if (error)    return <p className="text-center text-red-700">{error.message}</p>;
  if (loading)  return <p className="text-center">Cargando…</p>;
  if (!movies?.length) return null;

  return (
    <div className="w-full">
      <h2 className="mb-4 text-center text-3xl font-bold text-[rgb(var(--gray))]">{title}</h2>

      <div className="relative">

        {/* Carrusel */}
        <div
          ref={scrollRef}
          className="hide-scrollbar flex gap-6 overflow-x-auto px-10 py-2"
          onMouseEnter={() => (hovering.current = true)}
          onMouseLeave={() => (hovering.current = false)}
        >
          {renderMovies.map((movie, i) => {
            // Si no hay poster_url, usa una imagen por defecto
            const poster = movie.poster_url && movie.poster_url.trim() !== ''
              ? movie.poster_url
              : '/images/default-movie.png';
            return (
              <div
                key={`${movie.id}-${i}`}
                className="flex-shrink-0 rounded-md bg-white text-center shadow-md"
                style={{ width: ITEM_WIDTH }}
              >
                <Image
                  src={poster}
                  alt={movie.title}
                  width={ITEM_WIDTH}
                  height={256}
                  className="h-64 w-full rounded-t-md object-cover"
                />
                <div className="py-2">
                  <div className="text-yellow-600">
                    {'★'.repeat(Math.floor(movie.rating)) +
                      '☆'.repeat(5 - Math.floor(movie.rating))}
                  </div>
                  <p className="font-semibold text-[#ba7c3a]">
                    {movie.rating.toFixed(1)}
                  </p>
                  <p className="text-sm font-bold text-gray-800 ">{movie.title}</p>
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
