'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import MovieCarousel from '@/components/movies/MovieCarousel';
import { useRecentMovies } from '../hooks/useRecentMovies';
import { BannerHomePage } from './BannerHomePage';  
// import WhyChooseCineConecta from './WhyChooseCineConecta';
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

  // Referencias para cada sección
  const tendenciaRef = useRef(null);
  const ultimasRef = useRef(null);

  // Detectar si están en vista
  const tendenciaInView = useInView(tendenciaRef, { once: true, margin: "-100px" });
  const ultimasInView = useInView(ultimasRef, { once: true, margin: "-100px" });

  return (
    <>

      <BannerHomePage/>

      {/* <WhyChooseCineConecta/> */}
      
      <div className="flex flex-col md:flex-row gap-8 px-6 py-8 text-[#3d3d3d]"></div>

      <div className='space-y-20 mb-20'>
        <motion.div
          ref={tendenciaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={tendenciaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MovieCarousel title="🏹 Películas en tendencia" subtitle="Las películas más populares en este momento" movies={recentMovies?.results || []} loading={loadingRecentMovies} error={error} />
        </motion.div>
        <motion.div
          ref={ultimasRef}
          id="ultimas-incorporaciones"
          initial={{ opacity: 0, y: 40 }}
          animate={ultimasInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MovieCarousel title="🆕 Últimas incorporaciones" subtitle="Nuevas películas mas recientes en nuestra plataforma" movies={moviesData} loading={loadingRecentMovies} error={error}/>
        </motion.div>
      </div>
  
        {/* Izquierda: Bienvenida y destacados → 2/3 */}
        {/* <div className="basis-2/3">
          <MessageWelcome/>
          <FeaturedFilms/>
        </div> */}

        {/* Derecha: Mejores calificadas → 1/3 */}
        {/* <div className="basis-1/3 flex justify-center items-start mt-30">
          <BestMoviesMonth/>
        </div> */}
    
    </>
    

    
  );
};

export default HomePage;
