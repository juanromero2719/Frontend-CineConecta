import { FaUserCircle, FaStar } from 'react-icons/fa';
import { useParams } from 'next/navigation';
import { useCommentsPerMovie } from '@/app/(dashboard)/movie/[title]/hooks/useCommentsPerMovie';

export default function MovieComments() {
    const { title } = useParams<{ title: string }>();
    const { comments, loading, error } = useCommentsPerMovie(title);

    return (
        <div className="flex flex-col min-h-[60vh] w-full bg-[rgb(var(--dark-blue-60))] bg-noise rounded-2xl border border-white/10 p-0 md:p-0">
            {/* Encabezado */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-white/5 rounded-t-2xl">
                <h1 className="text-xl font-bold text-white">Reseñas</h1>
                <div className="flex items-center gap-2">
                    <span className="text-white/70 font-semibold">Ordenar por:</span>
                    <button className="bg-white/10 text-white px-3 py-1 font-semibold rounded hover:bg-white/20 focus:outline-none">Más recientes</button>
                </div>
            </div>

            {/* Estado de carga o error */}
            {loading && (
                <div className="flex justify-center items-center min-h-[20vh] text-lg text-white/70">Cargando comentarios...</div>
            )}
            {error && (
                <div className="flex justify-center items-center min-h-[20vh] text-lg text-red-400">Error al cargar comentarios</div>
            )}

            {/* Lista de comentarios */}
            {!loading && !error && (
                <div className="px-6 py-4">
                    {comments && comments.length > 0 ? (
                        comments.map((comment) => (
                            <div key={comment.id} className="flex gap-4 bg-white/5 rounded-xl px-6 py-4 mb-6">
                                {/* Avatar */}
                                <div className="flex-shrink-0 flex flex-col items-center pt-1">
                                    <FaUserCircle className="text-4xl text-white/80" />
                                </div>
                                {/* Contenido de la reseña */}
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-1">
                                        <span className="font-bold text-white text-base">{comment.user?.name || 'Usuario'}</span>
                                        <div className="flex items-center gap-1">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <FaStar key={i} className={i < Math.round(comment.rating) ? 'text-yellow-400 text-lg' : 'text-gray-500 text-lg'} />
                                            ))}
                                        </div>
                                        <span className="font-bold text-yellow-400 ml-2">{comment.rating?.toFixed(1) || '0.0'}</span>
                                    </div>
                                    <p className="text-white/90 text-sm mb-2">{comment.content}</p>
                                    <p className="font-semibold text-white/60 text-xs">{new Date(comment.created_at).toLocaleDateString()}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="flex justify-center items-center min-h-[20vh] text-lg text-white/70">No hay comentarios</div>
                    )}
                </div>
            )}
        </div>
    );
}

