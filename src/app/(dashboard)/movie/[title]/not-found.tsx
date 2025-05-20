export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] bg-[#f7f3ef] p-8 rounded-xl shadow-lg max-w-3xl mx-auto mt-8">
        <h2 className="text-3xl font-bold mb-4 text-[rgb(var(--gray))]">
          Película no encontrada
        </h2>
        <p className="text-lg text-[rgb(var(--gray))] text-center">
          Lo sentimos, no pudimos encontrar la información de la película que
          buscabas.
        </p>
      </div>
    );
  }
  