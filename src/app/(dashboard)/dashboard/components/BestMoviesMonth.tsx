import { useGenres } from '@/app/(dashboard)/dashboard/hooks/useGenres';
import React, { useState } from 'react';
import { useFilterByGenres } from '../hooks/useFilterByGenres';
import { Movie } from '../models/movies.models';

const BestMoviesMonth: React.FC = () => {
    // Generos
    const { data: genres, loading: loadingGenres, error: errorGenres } = useGenres();
    const [selectedGenre, setSelectedGenre] = useState<string | undefined>(undefined);

    // Hook de filtro
    const { data: filteredData, loading: loadingFiltered, error: errorFiltered } = useFilterByGenres({ genre: selectedGenre });

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
        setSelectedGenre(value === '' ? undefined : value);
    };

    return (
        <>
            <div className="bg-white rounded-lg p-5 shadow-md w-[55%]">
                <h3 className="text-2xl font-bold mb-4 text-center text-[rgb(var(--gray))]">Mejor calificadas en el último mes</h3>
                {/* Mensajes de carga y error fuera del select */}
                {loadingGenres && <p className="text-gray-500 mb-2">Cargando géneros...</p>}
                {errorGenres && <p className="text-red-500 mb-2">{errorGenres}</p>}
                <select className="w-full mb-4 border border-gray-300 rounded px-2 py-1 text-xl" onChange={handleGenreChange} value={selectedGenre || ''}>
                    <option value="">Filtrar por género</option>
                    {genres?.genres.map((genre) => (
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
                                <span className="font-bold text-[#c07b3e] text-xl">{index + 1}</span>
                                <span className="text-[rgb(var(--gray))] text-xl">{movie.title}</span>
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