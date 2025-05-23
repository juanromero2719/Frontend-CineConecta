import { FaUserCircle, FaStar } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import { useCommentsPerMovie } from '@/app/(dashboard)/movie/[title]/hooks/useCommentsPerMovie';

export default function MovieComments() {
    const { title } = useParams<{ title: string }>();
    const { comments, loading, error } = useCommentsPerMovie(title);

    return (
        <div className="flex flex-col min-h-[60vh] w-full bg-white">
            {/* Encabezado */}
            <div className="flex items-center justify-between mb-4">
                <h1 className="text-2xl font-bold text-[rgba(var(--gray))] px-6 py-3">Reseñas</h1>
                <div className="flex items-center gap-2">
                    <span className="text-gray-500 font-semibold">Ordenar por:</span>
                    <button className="bg-white text-gray-700 px-3 py-1 font-semibold focus:outline-none">Mas recientes</button>
                </div>
            </div>

            {/* Estado de carga o error */}
            {loading && (
                <div className="flex justify-center items-center min-h-[20vh] text-lg text-gray-500">Cargando comentarios...</div>
            )}
            {error && (
                <div className="flex justify-center items-center min-h-[20vh] text-lg text-red-500">Error al cargar comentarios</div>
            )}

            {/* Lista de comentarios */}
            {!loading && !error && (
                <>
                    {comments && comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id} className="flex gap-4 bg-white px-6 mb-6">
                                {/* Avatar */}
                                <div className="flex-shrink-0 flex flex-col items-center pt-1">
                                    <FaUserCircle className="text-5xl text-black/60" />
                                </div>
                                {/* Contenido de la reseña */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="font-bold text-[#a06a2b] text-lg">{comment.user?.name || 'Usuario'}</span>
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <FaStar key={i} className={i < Math.round(comment.rating) ? 'text-[#a06a2b] text-xl' : 'text-gray-300 text-xl'} />
                                            ))}
                                        </div>
                                        <span className="font-bold text-[#a06a2b] ml-2">{comment.rating?.toFixed(1) || '0.0'}</span>
                                    </div>
                                    <p className="font-semibold text-gray-700 mb-2">{comment.rating_text}</p>
                                    <p className="font-bold text-gray-700 mb-2">{comment.sentiment_text}</p>
                                    <p className="text-gray-700 mb-2">{comment.content}</p>
                                    <p className="font-semibold text-gray-700">{new Date(comment.created_at).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center min-h-[20vh] text-lg text-gray-500">no hay comentarios</div>
                    )}
                </>
            )}
        </div>
    );
}

