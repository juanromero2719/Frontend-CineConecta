'use client';

import React from 'react';
import MessageWelcome from '@/app/(dashboard)/dashboard/components/MessageWelcome';
import FeaturedFilms from '@/app/(dashboard)/dashboard/components/FeaturedFilms';
import BestMoviesMonth from '@/app/(dashboard)/dashboard/components/BestMoviesMonth';
import MovieCarousel from '@/components/movies/MovieCarousel';
import { useRecentMovies } from '../hooks/useRecentMovies';

// import { useUsers } from '@/app/(dashboard)/dashboard/hooks/useUser';

const HomePage: React.FC = () => {
  
  // Peliculas recientes
  const { data: recentMovies, loading: loadingRecentMovies, error: errorRecentMovies } = useRecentMovies();
  const error = errorRecentMovies ? new Error(errorRecentMovies) : null;



  const moviesData = [
    {
      id: 1,
      title: 'Thunderbolts',
      description: 'Descripción de la película',
      genre: 'Acción',
      director: 'Director 1',
      release_date: '2024-01-01',
      rating: 2.0,
      poster_url: '/images/thunderbolts.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 2,
      title: 'Thunderbolts',
      description: 'Descripción de la película',
      genre: 'Acción',
      director: 'Director 2',
      release_date: '2024-01-01',
      rating: 2.0,
      poster_url: '/images/thunderbolts.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 3,
      title: 'Thunderbolts',
      description: 'Descripción de la película',
      genre: 'Acción',
      director: 'Director 3',
      release_date: '2024-01-01',
      rating: 2.0,
      poster_url: '/images/thunderbolts.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 4,
      title: 'Thunderbolts',
      description: 'Descripción de la película',
      genre: 'Acción',
      director: 'Director 4',
      release_date: '2024-01-01',
      rating: 2.0,
      poster_url: '/images/thunderbolts.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    },
    {
      id: 5,
      title: 'Thunderbolts',
      description: 'Descripción de la película',
      genre: 'Acción',
      director: 'Director 5',
      release_date: '2024-01-01',
      rating: 2.0,
      poster_url: '/images/thunderbolts.jpg',
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString()
    }
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 px-6 py-8 min-h-screen text-[#3d3d3d]">
        
        {/* Izquierda: Bienvenida y destacados → 2/3 */}
        <div className="basis-2/3">
          <MessageWelcome/>
          <FeaturedFilms/>
        </div>

        {/* Derecha: Mejores calificadas → 1/3 */}
        <div className="basis-1/3 flex justify-center items-start mt-30">
          <BestMoviesMonth/>
        </div>

        
      </div>
      <div className='space-y-20'>
        <MovieCarousel title="Películas Nuevas" movies={recentMovies?.results || []} loading={loadingRecentMovies} error={error} />
        <MovieCarousel title="Recomendaciones para ti" movies={moviesData} loading={loadingRecentMovies} error={error}/>
      </div>
    </>
    

    
  );
};

export default HomePage;
