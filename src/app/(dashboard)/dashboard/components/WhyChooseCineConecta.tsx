import { Film, Star, Users } from 'lucide-react';
import React from 'react';

const features = [
  {
    icon: <Film className="w-8 h-8 text-[#1da1f2] bg-white/10 rounded-full p-1" />, // azul
    title: 'Amplio Catálogo',
    description: 'Accede a información detallada de miles de películas, desde clásicos hasta los últimos estrenos.'
  },
  {
    icon: <Star className="w-8 h-8 text-[#a259ff] bg-white/10 rounded-full p-1" />, // morado
    title: 'Reseñas Detalladas',
    description: 'Comparte tus opiniones con reseñas completas y calificaciones precisas que ayudan a otros cinéfilos.'
  },
  {
    icon: <Users className="w-8 h-8 text-[#ff7849] bg-white/10 rounded-full p-1" />, // naranja
    title: 'Comunidad Activa',
    description: 'Conéctate con otros aficionados al cine, descubre recomendaciones personalizadas y participa en discusiones.'
  }
];

const WhyChooseCineConecta = () => {
  return (
    <section className="w-full py-12 px-4 flex flex-col items-center bg-[rgba(var(--dark-blue-80))] bg-noise">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-2">¿Por qué elegir CineConecta?</h2>
      <p className="text-white/80 text-center max-w-2xl mb-10">
        Nuestra plataforma está diseñada para verdaderos amantes del cine, ofreciendo una experiencia única para descubrir, discutir y compartir.
      </p>
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-6 justify-center items-center">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white/5 rounded-xl p-6 flex flex-col items-start w-full md:w-1/3 min-w-[260px] max-w-sm shadow-lg border border-white/10"
          >
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-white font-semibold text-lg mb-2">{feature.title}</h3>
            <p className="text-white/80 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseCineConecta; 