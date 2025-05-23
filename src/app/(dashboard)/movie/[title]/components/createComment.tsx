import { FaUserCircle, FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { useCreateComment } from '../hooks/useCreateComment';

interface CreateCommentProps {
    isOpen: boolean;
    onClose: () => void;
    userName?: string;
    movieName?: string; // Cambiado de movieId a movieName
}

export default function CreateComment({ isOpen, onClose, userName = 'Yarlinson Barranco', movieName }: CreateCommentProps) {
    const [rating, setRating] = useState(4);
    const [hover, setHover] = useState<number | null>(null);
    const [comment, setComment] = useState('');
    const { createComment, loading } = useCreateComment();
    const [, setSuccess] = useState(false);

    if (!isOpen) return null;

    const handleSend = async () => {
        await createComment({
            movie_name: movieName || '',
            content: comment,
        });
        setSuccess(true);
        setComment('');
        setRating(4);
        setTimeout(() => {
            setSuccess(false);
            onClose();
        }, 1200);
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/30 backdrop-blur-sm bg-opacity-40">
            <div className="bg-[#f8f6f4] rounded-2xl p-8 w-[400px] shadow-lg relative">
                {/* Botón cerrar */}
                <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-2xl font-bold">×</button>
                <h1 className="text-2xl font-bold text-[rgba(var(--gray))] mb-4">Reseñas</h1>
                <div className="flex items-center gap-4 mb-2">
                    <FaUserCircle className="text-4xl text-black/60" />
                    <span className="font-bold text-[#a06a2b] text-lg">{userName}</span>
                </div>
                <div className="flex items-center gap-2 mb-4">
                    {/* Estrellas seleccionables */}
                    {Array.from({ length: 5 }).map((_, i) => (
                        <FaStar
                            key={i}
                            className={
                                (hover !== null ? i < hover : i < rating)
                                    ? 'text-[#a06a2b] text-2xl cursor-pointer'
                                    : 'text-gray-300 text-2xl cursor-pointer'
                            }
                            onMouseEnter={() => setHover(i + 1)}
                            onMouseLeave={() => setHover(null)}
                            onClick={() => setRating(i + 1)}
                        />
                    ))}
                    <span className="ml-2 bg-[#f8f6f4] border border-[#a06a2b] text-[#a06a2b] font-bold rounded-full px-4 py-1 text-md">{rating.toFixed(1)}</span>
                </div>
                <textarea
                    className="w-full h-24 rounded-xl border-2 border-[#a06a2b] p-3 mb-4 text-[rgba(var(--gray))] font-semibold focus:outline-none resize-none bg-[#f8f6f4]"
                    placeholder="Escribe tu comentario ..."
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    disabled={loading}
                />

                <button
                    className="w-full bg-[#a06a2b] text-white font-bold py-2 rounded-xl text-lg hover:bg-[#8a531a] transition disabled:opacity-60"
                    onClick={handleSend}
                    disabled={loading || !comment.trim()}
                >
                    {loading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </div>
    );
}

    