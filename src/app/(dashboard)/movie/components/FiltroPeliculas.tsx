"use client";

import Header from "@/components/HeaderComponent";
import { useState, useMemo, useRef } from "react";
import { useFilterByGenres } from "@/hooks/useFilterByGenres";
import { useGenres } from "@/app/(dashboard)/dashboard/hooks/useGenres";
import Link from "next/link";
import { motion, useInView } from "framer-motion";

export default function FiltroPeliculas() {
  const [search, setSearch] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [selectedGenre, setSelectedGenre] = useState<string>("");

  // Obtener géneros dinámicamente
  const { data: genresData, loading: loadingGenres } = useGenres();

  // Filtros para el hook, memoizados para evitar renders innecesarios
  const filters = useMemo(() => ({
    title: search || undefined,
    genre: selectedGenre || undefined,
  }), [search, selectedGenre]);

  const { data, loading, error } = useFilterByGenres(filters);

  // Handler para Enter en input
  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setSearch(inputValue.trim());
    }
  };

  // Handler para chips de género
  const handleGenreClick = (genre: string) => {
    setSelectedGenre(genre === selectedGenre ? "" : genre);
  };

  // Películas a mostrar
  const movies = data?.results || [];

  // Refs y useInView para animaciones
  const titleRef = useRef(null);
  const filtersRef = useRef(null);
  const gridRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-100px" });
  const filtersInView = useInView(filtersRef, { once: true, margin: "-100px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-100px" });

  return (
    <div className="w-full min-h-[100vh] flex flex-col bg-cover bg-center relative bg-noise bg-[rgb(var(--dark-blue-100))] pb-10">
      <div className="relative z-20 mt-2">
        <Header />
      </div>

      <div className="mx-4 mt-8">
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 40 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-white text-2xl font-bold">Explorar Películas</h1>
          <h3 className="text-gray-400 text-sm mt-2">
            Descubre una amplia variedad de películas para todos los gustos
          </h3>
        </motion.div>

        <motion.div
          ref={filtersRef}
          initial={{ opacity: 0, y: 40 }}
          animate={filtersInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          className="flex flex-col gap-4 mt-6"
        >
          {/* Barra de búsqueda y filtro */}
          <div className="flex w-full mx-auto bg-[rgb(var(--dark-blue-60))] py-6 px-4 bg-noise rounded-md">
            <div className="relative flex-1">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="9" cy="9" r="7" />
                  <line x1="15" y1="15" x2="19" y2="19" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Buscar películas por título, género o palabra clave"
                className="w-full pl-10 pr-36 py-2 rounded-md bg-[rgb(var(--dark-blue-60))] text-white border border-white/10 focus:outline-none"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)}
                onKeyDown={handleInputKeyDown}
              />
            </div>
            <button className="ml-2 flex items-center bg-[rgb(var(--dark-blue-60))] border border-white/10 text-white px-4 py-2 rounded-md">
              Popularidad
              <svg className="ml-2" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M7 10l5 5 5-5" />
                <path d="M12 15V3" />
              </svg>
            </button>
          </div>

          {/* Chips de géneros */}
          <div className="flex flex-wrap gap-2 mt-2">
            <button
              className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition ${!selectedGenre ? "bg-sky-600 text-white" : "bg-white/10 text-white hover:bg-sky-700"}`}
              onClick={() => handleGenreClick("")}
            >
              Todos
            </button>
            {loadingGenres ? (
              <span className="text-white/60 px-4">Cargando géneros...</span>
            ) : (
              genresData?.genres?.map((genre) => (
                <button
                  key={genre}
                  className={`cursor-pointer px-6 py-2 rounded-full text-sm font-semibold transition ${selectedGenre === genre ? "bg-sky-600 text-white" : "bg-white/10 text-white hover:bg-sky-700"}`}
                  onClick={() => handleGenreClick(genre)}
                >
                  {genre}
                </button>
              ))
            )}
          </div>
        </motion.div>

        {/* Grid de películas */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 40 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="mt-8"
        >
          {loading && <span className="text-white/80 text-sm mb-4 block">Cargando películas...</span>}
          {error && <span className="text-red-400 text-sm mb-4 block">{error}</span>}
          {!loading && !error && (
            <>
              <span className="text-white/80 text-sm mb-4 block">
                Mostrando {movies.length} películas
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie) => (
                  <div
                    key={movie.id}
                    className="relative bg-[rgb(var(--dark-blue-60))] rounded-xl overflow-hidden shadow-md border border-white/10 flex flex-col"
                  >
                    {/* Imagen */}
                    <div className="relative h-40 w-full">
                      <img
                        src={movie.poster_url || "/images/default-movie.png"}
                        alt={movie.title}
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
                        {movie.genre?.split(",").slice(0, 2).map((genre: string) => (
                          <span
                            key={genre}
                            className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold"
                          >
                            {genre.trim()}
                          </span>
                        ))}
                        {movie.genre?.split(",").length > 2 && (
                          <span className="bg-white/10 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            +{movie.genre?.split(",").length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}