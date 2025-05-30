'use client';

import React from 'react';
import Link from 'next/link';
import Logo from '@/components/shared/LogoCineConecta'
import { useAuth } from '@/contexts/AuthContext';
import { LogoutButton } from './auth/LogoutButton';

export default function Header() {
  const { isAuthenticated } = useAuth();

  return (
    <header className="w-full mt-2">
      <div className="flex flex-col md:flex-row w-full items-center justify-between px-4 md:px-6 gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex justify-center w-full md:w-auto">
          <Link
            href={isAuthenticated ? '/dashboard' : '/'}
            className="flex items-center gap-2 py-2"
          >
            <Logo width={160} />
          </Link>
        </div>

        {/* Navegación principal */}
        {isAuthenticated ? (
          <nav className="w-full md:w-auto flex justify-center">
            <ul className="flex flex-col md:flex-row items-center gap-2 md:gap-8">
              <li>
              <button className="text-base md:text-lg text-[rgb(var(--gray))] transition hover:text-[rgb(var(--sky-blue))] ">
                Inicio
              </button>
            </li>
            <li>
              <button className="text-base md:text-lg text-[rgb(var(--gray))] transition hover:text-[rgb(var(--sky-blue))]">
                Películas
              </button>
            </li>
            <li>
              <button className="text-base md:text-lg text-[rgb(var(--gray))] transition hover:text-[rgb(var(--sky-blue))]">
                Recomendaciones
              </button>
            </li>
            </ul>
          </nav>
        ) : (
          <></>
        )}

        {/* Botón login/logout */}
        <div className="flex justify-center w-full md:w-auto">
          {isAuthenticated ? (
            <LogoutButton />
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
}
