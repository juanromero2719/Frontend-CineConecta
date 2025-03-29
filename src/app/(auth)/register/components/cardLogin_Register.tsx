'use client';

import React, { useState } from 'react';
import Input from '@/components/ui/input';
import { useRegisterUser } from '@/app/(auth)/register/hooks/useRegisterUser';
import { showSuccess } from '@/utilities/notifications';
import Logo from '@/components/logo';
import Link from 'next/link';

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
    <section className="flex flex-col md:flex-row bg-white w-[90vw] md:w-[80vw] lg:w-[70vw] 2xl:w-[50vw] h-auto md:h-[500px] rounded-2xl min-w-[300px] overflow-hidden">

      {/* Lado izquierdo con Formulario */}
      <div className="w-full md:w-[60%] flex justify-center items-center py-8 px-6">
        <form onSubmit={handleSubmit} className="w-full md:w-[80%]">
          <h3 className="text-2xl font-bold mb-6 text-gray-700">
            Configurar tu cuenta
          </h3>

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

          {/* CHECKBOX TÉRMINOS */}
          <div className="mb-6 flex items-center space-x-2 text-sm text-gray-600">
            <input
              id="terms"
              name="termsAccepted"
              type="checkbox"
              checked={formData.termsAccepted}
              onChange={handleChange}
              className="cursor-pointer"
            />
            <label htmlFor="terms" className="cursor-pointer">
              Declaro que he leído y acepto los{' '}
              <span className="underline">Términos de servicio</span>
            </label>
          </div>

          {/* BOTÓN REGISTRARSE */}
          <button
            type="submit"
            disabled={loading}
            className="w-full text-lg bg-[rgba(var(--dark-latte))] text-white py-2 px-4 rounded-md hover:bg-[rgba(var(--latte))] outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4 transition-colors"
          >
            {loading ? 'Cargando...' : 'Registrarse'}
          </button>

          {/* LINK INICIA SESIÓN */}
          <div className="text-center text-black text-sm">
            ¿Ya tienes una cuenta?{' '}
            <Link
              href="/"
              className="text-[rgba(var(--dark-latte))] font-semibold hover:underline hover:text-[rgba(var(--latte))] transition-colors"
            >
              Inicia sesión
            </Link>
          </div>
        </form>
      </div>

      {/* Lado derecho con Logo */}
      <div className="w-full md:w-[40%] h-[200px] md:h-auto bg-[rgba(var(--light-latte))] flex justify-center items-center">
        <Logo />
      </div>
    </section>
  );
};

export default CardRegister;
