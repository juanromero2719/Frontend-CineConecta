'use client';

import MovieComments from "@/app/(dashboard)/movie/[title]/components/movieComments";
import MovieDetails from "@/app/(dashboard)/movie/[title]/components/movieDestails";
import { MovieDescription } from "./components/movieDescription";

export default function MovieDetailPage() {
  return (
    <div className="min-h-screen w-full bg-[rgb(var(--dark-blue-80))] bg-noise">
      <MovieDescription />
      <div className="mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Columna principal: detalles y comentarios */}
        
        <div className="xl:col-span-2 flex flex-col gap-8">
          
          <MovieDetails />
          <MovieComments />
        </div>
        {/* Columna lateral: aquí puedes agregar detalles extra, películas similares, etc. */}
        {/* <AsideComponent /> */}
      </div>
    </div>
  );
}

