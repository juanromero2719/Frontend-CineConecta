import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTopRated } from '../hooks/useTopRated';
import { MovieTopRated } from '../models/top-rated.models';

const FeaturedFilms: React.FC = () => {
    const { data, loading, error } = useTopRated();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!data || !data.movies || data.movies.length === 0) return;
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === data.movies.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [data]);

    if (loading) return <p className="text-center">Cargando...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!data || !data.movies || !data.movies.length) return <p className="text-center">No hay películas destacadas.</p>;

    const total = data.movies.length;
    const goPrev = () => setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
    const goNext = () => setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    const { movie, average_score }: MovieTopRated = data.movies[current];

    return (
        <>
            <h2 className="text-3xl font-semibold mb-6 text-center text-[rgb(var(--gray))]">Películas Destacadas</h2>
            <div className="flex items-center justify-center gap-4">
                <button
                    onClick={goPrev}
                    className="p-2 rounded-full hover:bg-gray-200 transition flex items-center justify-center"
                    aria-label="Anterior"
                >
                    {/* Flecha izquierda SVG */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c07b3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
                </button>
                <div className="flex items-center gap-4 rounded-2xl p-2">
                    <Image
                        src={movie.poster_url}
                        alt={movie.title}
                        width={128}
                        height={192}
                        className="w-64 h-96 object-cover rounded-2xl shadow-md"
                    />
                    <div>
                        <h3 className="text-2xl text-center font-bold text-[rgb(var(--gray))]">{movie.title}</h3>
                        <div className="flex items-center justify-center mt-1 text-yellow-600 text-4xl text-center">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <span key={i}>{i < Math.round(average_score) ? '★' : '☆'}</span>
                            ))}
                        </div>
                        <p className="text-4xl font-semibold mt-1 text-center text-[#ba7c3a]">{average_score.toFixed(1)}</p>
                    </div>
                </div>
                <button
                    onClick={goNext}
                    className="p-2 rounded-full hover:bg-gray-200 transition flex items-center justify-center"
                    aria-label="Siguiente"
                >
                    {/* Flecha derecha SVG */}
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#c07b3e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
                </button>
            </div>
        </>
    );
};

export default FeaturedFilms;