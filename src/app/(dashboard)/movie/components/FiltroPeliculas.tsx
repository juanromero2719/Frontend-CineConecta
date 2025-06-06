"use client";

import Header from "@/components/HeaderComponent";
import { useState, useMemo, useCallback } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from 'next/image';
import { useGenres } from "@/app/(dashboard)/dashboard/hooks/useGenres";
import { useFilterByGenres } from "@/hooks/useFilterByGenres";

export default function FiltroPeliculas() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const { genres, loading: genresLoading } = useGenres();

  // Memoizamos los parámetros de búsqueda para evitar re-renders innecesarios
  const searchParams = useMemo(() => ({
    title: searchTerm,
    genre: selectedGenres.join(","),
  }), [searchTerm, selectedGenres]);

  const { data: movies, loading: moviesLoading, error } = useFilterByGenres(searchParams);

  const handleGenreClick = useCallback((genre: string) => {
    setSelectedGenres((prev) =>
      prev.includes(genre)
        ? prev.filter((g) => g !== genre)
        : [...prev, genre]
    );
  }, []);

  const handleSearch = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // La búsqueda se realiza automáticamente a través del hook useFilterByGenres
    }
  }, []);

  return (
    <div className="w-full min-h-[100vh] flex flex-col bg-cover bg-center relative bg-noise bg-[rgb(var(--dark-blue-100))] pb-10">
      <div className="relative z-20 mt-2">
        <Header />
      </div>

      <div className="mx-4 mt-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-white text-2xl font-bold">Explorar Películas</h1>
          <h3 className="text-gray-400 text-sm mt-2">
            Descubre una amplia variedad de películas para todos los gustos
          </h3>
        </motion.div>

        <div className="flex flex-col gap-4 mt-6">
          {/* Barra de búsqueda y filtro */}
          <div className="flex gap-4">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                🔍
              </span>
              <input
                type="text"
                placeholder="Buscar películas..."
                className="w-full pl-10 pr-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-sky-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearch}
              />
            </div>
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center gap-2"
            >
              <Image
                src="/images/filter.png"
                alt="Filtrar"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              Filtros
            </button>
          </div>

          {/* Chips de géneros */}
          {isFilterOpen && (
            <div className="flex flex-wrap gap-2">
              {genresLoading ? (
                <div className="text-white">Cargando géneros...</div>
              ) : (
                genres.map((genre) => (
                  <button
                    key={genre}
                    onClick={() => handleGenreClick(genre)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      selectedGenres.includes(genre)
                        ? "bg-sky-500 text-white"
                        : "bg-white/10 text-white hover:bg-white/20"
                    }`}
                  >
                    {genre}
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {/* Grid de películas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-8"
        >
          {moviesLoading ? (
            <div className="col-span-full text-center text-white">Cargando películas...</div>
          ) : error ? (
            <div className="col-span-full text-center text-red-500">{error}</div>
          ) : movies?.results && movies.results.length > 0 ? (
            <>
              <span className="text-white/80 text-sm mb-4 block">
                Mostrando {movies.results.length} películas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.results.map((movie) => {
                  // Normalizo los géneros para soportar array o string
                  let genresArray: string[] = [];
                  if (Array.isArray(movie.genre)) {
                    genresArray = movie.genre;
                  } else if (typeof movie.genre === 'string') {
                    genresArray = movie.genre.split(',').map(g => g.trim()).filter(Boolean);
                  }
                  return (
                    <div
                      key={movie.id}
                      className="relative bg-[rgb(var(--dark-blue-60))] rounded-xl overflow-hidden shadow-md border border-white/10 flex flex-col"
                    >
                      {/* Imagen */}
                      <div className="relative h-40 w-full">
                        <Image
                          src={movie.poster_url || "/images/default-movie.png"}
                          alt={movie.title}
                          fill
                          className="object-cover w-full h-full"
                        />
                        {/* Rating en la esquina superior derecha */}
                        <div className="absolute top-2 right-2 flex items-center bg-black/70 px-2 py-1 rounded-full">
                          <span className="text-yellow-400 text-sm font-bold mr-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <span key={i}>
                                {i < Math.round(movie.rating || 0) ? "★" : "☆"}
                              </span>
                            ))}
                          </span>
                        </div>
                      </div>
                      {/* Info */}
                      <div className="p-4 flex-1 flex flex-col">
                        <Link href={`/movie/${encodeURIComponent(movie.title)}`} passHref legacyBehavior>
                          <span className="text-white hover:text-[rgb(var(--sky-blue))] cursor-pointer font-bold text-lg leading-tight mb-1">
                            {movie.title}
                          </span>
                        </Link>
                        <span className="text-white/70 text-sm mb-2">{movie.release_date ? new Date(movie.release_date).getFullYear() : ""}</span>
                        <div className="flex flex-wrap gap-2 mt-auto">
                          {genresArray.slice(0, 2).map((genre: string) => (
                            <span
                              key={genre}
                              className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold"
                            >
                              {genre}
                            </span>
                          ))}
                          {genresArray.length > 2 && (
                            <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">
                              +{genresArray.length - 2}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="col-span-full text-center text-white">No se encontraron películas</div>
          )}
        </motion.div>
      </div>
    </div>
  );
}