import { useGenres } from '@/app/(dashboard)/dashboard/hooks/useGenres';

const BestMoviesMonth: React.FC = () => {

    // Generos
    const { data: genres, loading: loadingGenres, error: errorGenres } = useGenres();
    console.log(genres);

    return (
        <>
            <div className="bg-white rounded-lg p-5 shadow-md w-[55%]">
            <h3 className="text-xl font-bold mb-4 text-center">Mejor calificadas en el último mes</h3>
            <select className="w-full mb-4 border border-gray-300 rounded px-2 py-1 text-lg">
            <option>Filtrar por género</option>

            {loadingGenres && <p className="text-gray-500">Cargando géneros...</p>
            }
            {genres?.genres.map((genre) => (
                <option key={genre} value={genre}>{genre}</option>
            ))}
            {errorGenres && <p className="text-red-500">{errorGenres}</p>}
            </select>

            <ol className="space-y-4 text-sm">
                {[
                    'Oppenheimer',
                    'Barbie',
                    'Guardians of the Galaxy Vol. 3',
                    'John Wick: Chapter 4',
                    'The Little Mermaid',
                ].map((movie, index) => (
                    <li key={index} className="flex items-start gap-2 px-6 space-y-4 text-md">
                    <span className="font-bold text-[#c07b3e]">{index + 1}</span>
                    <span className="text-gray-800">{movie}</span>
                    </li>
                ))}
            </ol>

        </div>
        </>
    )
}

export default BestMoviesMonth;