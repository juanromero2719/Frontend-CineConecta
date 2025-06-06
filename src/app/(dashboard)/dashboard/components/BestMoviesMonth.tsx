import { useGenres } from '@/app/(dashboard)/dashboard/hooks/useGenres';
import React, { useState, useMemo } from 'react';
import { useFilterByGenres } from '../../../../hooks/useFilterByGenres';
import { Movie } from '../models/movies.models';
import Link from 'next/link';

const BestMoviesMonth: React.FC = () => {
    // Generos
    const { genres, loading: loadingGenres, error: errorGenres } = useGenres();
    const [selectedGenre, setSelectedGenre] = useState<string>('');

    const filters = useMemo(() => (
        selectedGenre ? { genre: selectedGenre } : {}
    ), [selectedGenre]);

    // Hook de filtro
    const { data: filteredData, loading: loadingFiltered, error: errorFiltered } = useFilterByGenres(filters);

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedGenre(e.target.value);
    };

    return (
        <>
            <div className="bg-white rounded-lg p-5 shadow-md w-[55%] min-w-[400px] min-h-[550px]">
                <h3 className="text-3xl font-bold mb-12 text-center text-[rgb(var(--gray))]">Mejor calificadas en el último mes</h3>
                {/* Mensajes de carga y error fuera del select */}
                {loadingGenres && <p className="text-gray-500 mb-2">Cargando géneros...</p>}
                {errorGenres && <p className="text-red-500 mb-2">{errorGenres}</p>}
                <select className="w-full border border-gray-300 rounded px-2 py-1 text-2xl mb-12 text-[rgb(var(--gray))]" onChange={handleGenreChange} value={selectedGenre}>
                    <option value="">Filtrar por género</option>
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>

                {/* Resultados filtrados */}
                {loadingFiltered && <p className="text-gray-500">Cargando películas...</p>}
                {errorFiltered && <p className="text-red-500">{errorFiltered}</p>}
                <ol className="space-y-4 text-sm">
                    {filteredData && filteredData.results && filteredData.results.length > 0 ? (
                        filteredData.results.slice(0, 5).map((movie: Movie, index: number) => (
                            <li key={movie.id} className="flex items-start gap-2 px-6 space-y-4 text-md">
                                <span className="font-bold text-[#c07b3e] text-2xl">{index + 1}</span>
                                <Link href={`/movie/${movie.title}`} className='hover:underline'>
                                    <span className="text-[rgb(var(--gray))] text-2xl">{movie.title}</span>
                                </Link>
                            </li>
                        ))
                    ) : !loadingFiltered && (
                        <li className="text-gray-500 px-6">No hay películas para este género.</li>
                    )}
                </ol>
            </div>
        </>
    )
}

export default BestMoviesMonth;