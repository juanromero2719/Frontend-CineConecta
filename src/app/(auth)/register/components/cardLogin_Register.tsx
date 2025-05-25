'use client';

import React, { useState } from 'react';
import Input from '@/components/ui/mbInput';
import { useRegisterUser } from '@/app/(auth)/register/hooks/useRegisterUser';
import { showSuccess } from '@/utilities/notifications';
import Link from 'next/link';
import { MbButton } from '@/components/ui/mbButton';

const CardRegister: React.FC = () => {
  const { registerUser, loading } = useRegisterUser();

  // Estado del formulario
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    termsAccepted: false, // Para manejar la casilla de verificación
  });

  // Maneja cambios de input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Maneja el envío del form
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Por si necesitas validar el checkbox:
      // if (!formData.termsAccepted) {
      //   alert("Debes aceptar los términos de servicio");
      //   return;
      // }

      const response = await registerUser(formData.name, formData.email, formData.password);
      if (response !== null) {
        showSuccess('Registro exitoso', 'Usuario registrado correctamente');
      }
    } catch {
      // Manejo de error según tu app
    }
  };

  return (
    <section
    className="
      flex flex-col bg-[rgba(var(--dark-blue-60))] bg-noise
      w-[95vw] xs:w-[90vw] md:w-[70vw] lg:w-[45vw] xl:w-[36vw] 2xl:w-[30vw]
      max-w-[540px] min-w-[300px] rounded-lg overflow-hidden
      px-4 sm:px-8 py-10 mx-auto mt-16 mb-12
    "
  >
    <form onSubmit={handleSubmit} className="w-full">
      {/* --- encabezados --- */}
      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white text-center mb-2">
        Crear una cuenta
      </h3>
      <h2 className="text-sm md:text-base lg:text-lg text-gray-400 text-center mb-8">
        Únete a la comunidad de CineConecta
      </h2>

      {/* NOMBRE */}
      <div className="mb-4">
            <Input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              label="Nombre"
              required
            />
          </div>

          {/* EMAIL */}
          <div className="mb-4">
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              label="Email"
              required
            />
          </div>

          {/* CONTRASEÑA */}
          <div className="mb-2">
            <Input
              id="password"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              label="Contraseña"
              required
            />
          </div>


      {/* --- submit --- */}
      <button
        type="submit"
        disabled={loading}
        className="
          w-full text-lg md:text-xl bg-[rgba(var(--sky-blue))]
          text-white py-3 rounded-md hover:underline transition
          disabled:opacity-60 disabled:cursor-not-allowed mb-6 mt-6
        "
      >
        {loading ? 'Cargando…' : 'Registrarse'}
      </button>

      {/* --- registro --- */}
      <p className="text-center text-gray-400 text-sm md:text-lg mb-8">
        ¿Ya tienes una cuenta?{' '}
        <Link href="/" className="text-[rgba(var(--sky-blue))] hover:underline">
          Inicia sesión
        </Link>
      </p>

      {/* --- divisor --- */}
      <div className="flex items-center gap-3 text-gray-400 text-sm md:text-base mb-6">
        <hr className="flex-grow border-t border-white/20" />
        <span>O continúa con</span>
        <hr className="flex-grow border-t border-white/20" />
      </div>

      {/* --- botones sociales --- */}
      <div className="flex flex-col sm:flex-row gap-4">
        <MbButton text="Google"   iconSrc="/images/google.webp"   />
        <MbButton text="Facebook" iconSrc="/images/facebook.png" />
      </div>
    </form>
  </section>
  );
};

export default CardRegister;
