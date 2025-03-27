'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useLogout } from '@/hooks/useLogout';

export default function Header() {
    const { isAuthenticated } = useAuth();
    const { logout } = useLogout();

    const handleLogout = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await logout();
        } catch (error) {
            console.error('Error al cerrar sesión:', error);
        }
    };

    return (
        <header className="bg-ccGray text-white py-4 px-6 shadow-md">
            <div className="h-[5vh] container mx-auto flex items-center justify-between">

                <Link href={isAuthenticated ? '/dashboard' : '/'} className="flex items-center gap-2">
                    <h1 className="text-3xl font-bold">Cine Conecta</h1>
                </Link>

                <nav>
                    <ul className="flex space-x-6">
                        {isAuthenticated ? (
                            <li>
                                <button
                                    onClick={handleLogout}
                                    className="hover:text-slate-300 transition text-xl cursor-pointer"
                                >
                                    Logout
                                </button>
                            </li>
                        ) : (
                            <li>
                                <Link
                                    href="/"
                                    className="hover:text-slate-300 transition text-xl"
                                >
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </header>
    );
}