'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import MovieCarousel from '@/components/movies/MovieCarousel';
import { useRecentMovies } from '@/app/(dashboard)/dashboard/hooks/useRecentMovies';
import { BannerHomePage } from '@/app/(dashboard)/dashboard/components/BannerHomePage';  
import { useUserData } from '@/hooks/useUserData';
import { useFeaturedMovies } from '@/app/(dashboard)/dashboard/hooks/useFeaturedMovies';
// import WhyChooseCineConecta from './WhyChooseCineConecta';
// import { useUsers } from '@/app/(dashboard)/dashboard/hooks/useUser';

const HomePage: React.FC = () => {

  // id del usuario
  const [userId, setUserId] = useState<string | null>(null);
  
  // Peliculas recientes
  const { data: recentMovies, loading: loadingRecentMovies, error: errorRecentMovies } = useRecentMovies();
  // obtener datos del usuario
  const { data: userData } = useUserData();
  // peliculas destacadas
  const { data: featuredMovies, loading: loadingFeaturedMovies, error: errorFeaturedMovies } = useFeaturedMovies(userId, 10);

  useEffect(() => {
    if (userData) {
      setUserId(userData.id);
    }
  }, [userData]);

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
          <MovieCarousel
            title="🏹 Películas en tendencia"
            subtitle="Las películas más populares en este momento"
            movies={recentMovies?.results || []}
            loading={loadingRecentMovies}
            error={errorRecentMovies ? new Error(errorRecentMovies) : null}
          />
        </motion.div>
        <motion.div
          ref={ultimasRef}
          id="ultimas-incorporaciones"
          initial={{ opacity: 0, y: 40 }}
          animate={ultimasInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <MovieCarousel
            title="🆕 Últimas incorporaciones"
            subtitle="Nuevas películas mas recientes en nuestra plataforma"
            movies={featuredMovies?.movies || []}
            loading={loadingFeaturedMovies}
            error={errorFeaturedMovies ? new Error(errorFeaturedMovies) : null}
          />
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
