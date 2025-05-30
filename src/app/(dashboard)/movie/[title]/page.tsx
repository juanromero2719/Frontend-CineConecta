'use client';

import MovieComments from "@/app/(dashboard)/movie/[title]/components/movieComments";
import MovieDetails from "@/app/(dashboard)/movie/[title]/components/movieDestails";
import { MovieDescription } from "./components/movieDescription";

export default function MovieDetailPage() {
  return (
    <div className="min-h-screen w-full bg-[rgb(var(--dark-blue-80))] bg-noise">
      <MovieDescription />
      
        {/* Columna principal: detalles y comentarios */}
        
        <div className="xl:col-span-2 flex flex-col gap-8 px-10 items-center justify-center w-full">
          
          <MovieDetails />
          <MovieComments />
        </div>
        {/* Columna lateral: aquí puedes agregar detalles extra, películas similares, etc. */}
        {/* <AsideComponent /> */}
      
    </div>
  );
}

