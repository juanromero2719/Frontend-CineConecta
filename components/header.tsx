'use client';

import React from 'react';
import Link from 'next/link';

export default function Header() {
    
    return (
        <>
            
            <header className="bg-ccGray text-white py-4 px-6 shadow-md">
                <div className="h-[5vh] container mx-auto flex items-center justify-between">
                    
                    <Link href="/" className="flex items-center gap-2">
                        <h1 className="text-3xl font-bold">Cine Conecta</h1>
                    </Link>
                    
                    <nav>
                        <ul className="flex space-x-6">

                            <li>
                                <Link href="register" className="hover:text-slate-300 transition text-xl">
                                    Inicio
                                </Link>
                            </li>
                            
                            {/* <li>
                                <Link href="register" className="hover:text-slate-300 transition">
                                    Películas
                                </Link>
                            </li>
                            <li>
                                <Link href="register" className="hover:text-slate-300 transition">
                                    Recomendaciones
                                </Link>
                            </li>
                            <li>
                                <Link href="register" className="hover:text-slate-300 transition">
                                    Perfil
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </div>
            </header>
         
        </>
    );
}