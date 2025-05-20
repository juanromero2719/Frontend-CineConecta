import React from 'react';
import Image from 'next/image';
import { useTopRated } from '../hooks/useTopRated';
import { MovieTopRated } from '../models/top-rated.models';

const FeaturedFilms: React.FC = () => {
    
    const { data, loading, error } = useTopRated();
    console.log(data);

    if (loading) return <p className="text-center">Cargando...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (!data || !data.movies || !data.movies.length) return <p className="text-center">No hay películas destacadas.</p>;

    return (
        <>
            <h2 className="text-3xl font-semibold mb-4 text-center text-[rgb(var(--gray))]">Películas Destacadas</h2>
            <div className="flex flex-wrap gap-6 justify-center">
                {data.movies.map(({ movie, average_score }: MovieTopRated) => (
                    <div key={movie.id} className="flex items-center gap-4 rounded-2xl  p-2">
                        <Image
                            src={movie.poster_url}
                            alt={movie.title}
                            width={128}
                            height={192}
                            className="w-64 h-96 object-cover rounded-2xl shadow-md"
                        />
                        <div>
                            <h3 className="text-2xl text-center font-bold text-[rgb(var(--gray))]">{movie.title}</h3>
                            <div className="flex items-center mt-1 text-yellow-600 text-4xl text-center">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <span key={i}>{i < Math.round(average_score) ? '★' : '☆'}</span>
                                ))}
                            </div>
                            <p className="text-4xl font-semibold mt-1 text-center text-[#ba7c3a]">{average_score.toFixed(1)}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default FeaturedFilms;