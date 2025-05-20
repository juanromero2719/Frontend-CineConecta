const MessageWelcome: React.FC = () => {
    return (
        <>
            <h1 className="text-2xl md:text-5xl font-bold mb-8 text-center text-[rgb(var(--gray))]">Bienvenido a CineConecta</h1>
            
            <p className="mb-6 text-sm md:text-justify md:text-2xl text-[rgb(var(--gray))]">
                En un mundo donde las opiniones de los usuarios guían nuestras decisiones, CineConecta te invita a ser parte de una comunidad vibrante de cinéfilos. Aquí podrás compartir tus reseñas, descubrir nuevas películas y recibir recomendaciones personalizadas gracias a nuestro sistema de análisis de sentimientos e inteligencia artificial.
            </p>

            <p className="mb-10 text-2xl italic text-[rgb(var(--gray))]">¡Conéctate, comenta y descubre el cine como nunca antes!</p>
        </>
    )
}

export default MessageWelcome;