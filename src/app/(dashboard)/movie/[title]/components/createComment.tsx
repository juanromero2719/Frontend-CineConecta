import { FaStar } from 'react-icons/fa';
import { useState } from 'react';
import { useCreateComment } from '../hooks/useCreateComment';

interface Review {
  user: string;
  date: string;
  rating: number;
  comment: string;
  likes: number;
}

interface CreateCommentProps {
  isOpen: boolean;
  onClose: () => void;
  userName?: string;
  movieName?: string;
  reviews?: Review[]; // Lista de reseñas
}

export default function CreateComment({
  isOpen,
  onClose,
  movieName,
  reviews = [
    {
      user: 'JuanPerez',
      date: '29 de julio de 2023',
      rating: 3.5,
      comment:
        'Una película sorprendentemente inteligente y con más profundidad de lo que esperaba. Gerwig utiliza el icono de Barbie para explorar temas feministas y existenciales de forma accesible y divertida.',
      likes: 84,
    },
  ],
}: CreateCommentProps) {
  const [rating, setRating] = useState(0);
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
    setRating(0);
    setTimeout(() => {
      setSuccess(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-[rgb(var(--dark-blue-60))] rounded-2xl p-6 w-full max-w-2xl shadow-xl border border-white/10 bg-noise relative">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold focus:outline-none"
          aria-label="Cerrar"
        >
          ×
        </button>
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-white">Reseñas</h1>
          <span className="bg-white/10 text-white text-xs px-3 py-1 rounded-lg mr-6">{reviews.length} reseña</span>
        </div>

        {/* Deja tu opinión */}
        <div className="mb-2">
          <h2 className="text-base font-semibold text-white mb-2">Deja tu opinión</h2>
          <div className="flex flex-col justify-start items-start gap-2 mb-2">
            <span className="text-white text-sm">Tu calificación</span>
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, i) => (
                <FaStar
                  key={i}
                  className={
                    (hover !== null ? i < hover : i < rating)
                      ? 'text-yellow-400 text-xl cursor-pointer'
                      : 'text-gray-500 text-xl cursor-pointer'
                  }
                  onMouseEnter={() => setHover(i + 1)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => setRating(i + 1)}
                />
              ))}
            </div>
          </div>
          <textarea
            className="w-full h-20 rounded-lg border border-white/10 text-white p-3 mb-3 resize-none focus:outline-none bg-noise bg-[rgb(var(--dark-blue-60))]"
            placeholder="Comparte tus pensamientos sobre esta película..."
            value={comment}
            onChange={e => setComment(e.target.value)}
            disabled={loading}
          />
          <button
            className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-5 py-2 rounded-md transition disabled:opacity-60"
            onClick={handleSend}
            disabled={loading || !comment.trim()}
          >
            Publicar Reseña
          </button>
        </div>


      </div>
    </div>
  );
}

    