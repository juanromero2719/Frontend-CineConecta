const MessageWelcome: React.FC = () => {
    return (
        <>
            <h1 className="text-2xl md:text-5xl font-bold mb-8 text-center">Bienvenido a CineConecta</h1>
            
            <p className="mb-6 text-sm md:text-justify md:text-3xl text-gray-700">
                En un mundo donde las opiniones de los usuarios guían nuestras decisiones, CineConecta te invita a ser parte de una comunidad vibrante de cinéfilos. Aquí podrás compartir tus reseñas, descubrir nuevas películas y recibir recomendaciones personalizadas gracias a nuestro sistema de análisis de sentimientos e inteligencia artificial.
            </p>

            <p className="mb-10 text-2xl italic">¡Conéctate, comenta y descubre el cine como nunca antes!</p>
        </>
    )
}

export default MessageWelcome;