'use client';

import React, { useState } from 'react';
import Input      from '@/components/ui/mbInput';
import { useLoginUser } from '@/app/(auth)/hooks/useLoginUser';
import Link       from 'next/link';
import { MbButton } from '@/components/ui/mbButton';

const CardLogin: React.FC = () => {
  const [email,    setEmail]    = useState('');
  const [password, setPassword] = useState('');
  const { loginUser, loading }  = useLoginUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try { await loginUser(email, password); } catch {}
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
          Iniciar Sesión
        </h3>
        <h2 className="text-sm md:text-base lg:text-lg text-gray-400 text-center mb-8">
          Bienvenido de nuevo a CineConecta
        </h2>

        {/* --- email --- */}
        <div className="mb-6">
          <Input
            id="email"
            type="email"
            value={email}
            placeholder="tu@email.com"
            onChange={e => setEmail(e.target.value)}
            label="Email"
            required
          />
        </div>

        {/* --- contraseña --- */}
        <div className="mb-2">
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            value={password}
            onChange={e => setPassword(e.target.value)}
            label="Contraseña"
            required
          />
        </div>

        {/* --- forgot link --- */}
        <div className="flex justify-end mb-6">
          <Link
            href="/forgot-password"
            className="text-[rgba(var(--sky-blue))] text-sm md:text-base hover:underline transition-colors"
          >
            ¿Olvidaste tu contraseña?
          </Link>
        </div>

        {/* --- submit --- */}
        <button
          type="submit"
          disabled={loading}
          className="
            w-full text-lg md:text-xl bg-[rgba(var(--sky-blue))]
            text-white py-3 rounded-md hover:underline transition
            disabled:opacity-60 disabled:cursor-not-allowed mb-6
          "
        >
          {loading ? 'Cargando…' : 'Iniciar Sesión'}
        </button>

        {/* --- registro --- */}
        <p className="text-center text-gray-400 text-sm md:text-lg mb-8">
          ¿No tienes una cuenta?{' '}
          <Link href="/register" className="text-[rgba(var(--sky-blue))] hover:underline">
            Regístrate
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

export default CardLogin;
