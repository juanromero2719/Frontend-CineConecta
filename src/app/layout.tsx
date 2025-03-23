// src/app/layout.tsx

import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CineConecta',
  description: 'Plataforma de autenticación',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className='bg-ccDarkGray'>
      <body className="bg-ccDarkGray text-white">
        {children}
      </body>
    </html>
  );
}
