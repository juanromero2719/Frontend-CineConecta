import React from 'react';
import LogoCineConecta from '@/components/shared/LogoCineConecta';

export default function Footer() {
  return (
    <footer className="w-full bg-[rgb(var(--dark-blue-80))] bg-noise text-gray-300 px-4 sm:px-6 lg:px-8 py-10 mt-auto">
      {/* ---------- GRID PRINCIPAL ---------- */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10
        "
      >
        {/* --- Col 1: marca + redes --- */}
        <div>
          <div className='flex justify-center xl:justify-start'>
          <LogoCineConecta width={180} height={180}  />
          </div>
         

          <p className="text-sm text-gray-400 mb-4 mt-4">
            Conectando amantes del cine a través de reseñas,<br />
            discusiones y descubrimientos cinematográficos.
          </p>

          <div className="flex gap-4">
            {[
              { src: '/images/icons/facebook.png', alt: 'Facebook' },
              { src: '/images/icons/twitter.png',  alt: 'Twitter'  },
              { src: '/images/icons/instagram.png',alt: 'Instagram'},
              { src: '/images/icons/github.png',   alt: 'Github'   },
            ].map(({ src, alt }) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                className="w-5 h-5 grayscale hover:grayscale-0 transition"
              />
            ))}
          </div>
        </div>

        {/* --- Col 2: navegación --- */}
        <div>
          <h3 className="font-semibold mb-3">Explora</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Inicio', 'Películas', 'Categorías', 'Tendencias'].map(item => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Col 3: información --- */}
        <div>
          <h3 className="font-semibold mb-3">Información</h3>
          <ul className="space-y-2 text-sm text-gray-400">
            {['Acerca de', 'Contacto', 'Privacidad', 'Términos de uso'].map(item => (
              <li key={item}>
                <a href="#" className="hover:underline">{item}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Col 4: suscripción --- */}
        <div>
          <h3 className="font-semibold mb-3">Mantente conectado</h3>
          <p className="text-sm text-gray-400 mb-4">
            Suscríbete para recibir actualizaciones<br />
            y recomendaciones personalizadas.
          </p>

          {/* input y botón apilan en móviles */}
          <form className="flex flex-col sm:flex-row sm:flex-nowrap gap-3 w-full">
  <input
    type="email"
    placeholder="Tu email"
    className="flex-1 px-3 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none w-full"
  />
  <button
    type="submit"
    className="px-4 py-2 rounded-md bg-[rgba(var(--sky-blue))] text-white hover:underline transition w-full sm:w-auto"
  >
    Suscribirse
  </button>
</form>
        </div>
      </div>

      {/* ---------- Línea inferior ---------- */}
      <div className="mt-10 border-t border-gray-700 pt-6">
        <div
          className="
            max-w-screen-xl mx-auto
            flex flex-col md:flex-row items-center justify-between
            text-xs text-gray-500 gap-4
          "
        >
          <span>© 2025 CineConecta. Todos los derechos reservados.</span>

          <div className="flex gap-4">
            {['Privacidad', 'Términos', 'Cookies'].map(item => (
              <a key={item} href="#" className="hover:underline">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
