'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/LogoCineConecta'
import { useAuth } from '@/contexts/AuthContext';
import { useLogout } from '@/hooks/useLogout';
import { LoginButton } from './auth/LoginButton';

export default function Header() {
  const { isAuthenticated } = useAuth();
  const { logout } = useLogout();

  const handleLogout = async (e: React.FormEvent) => {
    e.preventDefault();
    await logout().catch(console.error);
  };

  return (
    <header className="w-full bg-[rgb(var(--dark-blue-100))] shadow-md bg-noise ">
      {/* nada de altura fija, solo px para los costados */}
      <div className="flex w-full items-center justify-between px-6">
        {/* Logo */}
        <Link
          href={isAuthenticated ? '/dashboard' : '/'}
          className="flex items-center gap-2 py-2"
        >
          <Logo  width={200}/>
        </Link>

        {/* Navegación */}
        <nav>
          <ul className="flex items-center space-x-6">
            {isAuthenticated ? (
              <>
                <li>
                  <button className="text-xl text-[rgb(var(--gray))] transition hover:underline ">
                    Inicio
                  </button>
                </li>
                <li>
                  <button className="text-xl text-[rgb(var(--gray))] transition hover:underline">
                    Películas
                  </button>
                </li>
                <li>
                  <button className="text-xl text-[rgb(var(--gray))] transition hover:underline">
                    Recomendaciones
                  </button>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-xl text-[rgb(var(--gray))] transition hover:underline"
                  >
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <li className='py-3'>
                <LoginButton />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}
