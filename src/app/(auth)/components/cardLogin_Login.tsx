'use client';

import React, { useState } from 'react';
import Input from '@/components/ui/input';
import { useLoginUser } from '@/app/(auth)/hooks/useLoginUser';
import Logo from '@/components/logo'
import Link from 'next/link';

const CardLogin: React.FC = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loginUser, loading } = useLoginUser();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
    } catch { }
  };

  return (

    <section className='flex flex-col md:flex-row bg-white w-[90vw] md:w-[80vw] h-auto md:h-[500px] lg:w-[70vw] 2xl:w-[50vw] rounded-2xl min-w-[300px] overflow-hidden'>

      <div className='w-full md:w-[40%] h-[200px] md:h-auto bg-[rgba(var(--light-latte))] flex justify-center items-center'>
        <Logo />
      </div>

      {/* Formulario */}
      <div className='w-full md:w-[60%] flex justify-center items-center py-8'>
        <form onSubmit={handleSubmit} className='w-[80%]'>
          <h3 className='text-xl font-bold mb-6 text-gray-700'>Iniciar Sesión</h3>

          <div className="mb-4">
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Correo electrónico"
              required
            />
          </div>

          <div className="mb-2">
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Contraseña"
              required
            />
          </div>

          <div className='flex justify-end mb-6'>
            <p className='text-[rgba(var(--dark-latte))] text-sm'>
              <Link href="/forgot-password" className='hover:text-[rgba(var(--latte))] hover:underline transition-colors'>
                ¿Olvidaste tu contraseña?
              </Link>
            </p>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full text-lg bg-[rgba(var(--dark-latte))] text-white py-2 px-4 rounded-md hover:bg-[rgba(var(--latte))] outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 mb-4"
          >
            {loading ? 'Cargando...' : 'Ingresar'}
          </button>

          <div className='flex justify-center'>
            <p className='text-black text-sm'>
              No tienes una cuenta?{' '}
              <Link
                href="/register"
                className='text-[rgba(var(--dark-latte))] font-semibold hover:underline hover:text-[rgba(var(--latte))] transition-colors'
              >
                Regístrate
              </Link>
            </p>
          </div>
        </form>
      </div>

    </section>


  );
};

export default CardLogin;
