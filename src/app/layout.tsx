
import { Providers } from '@/components/Providers';
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CineConecta',
  description: 'Plataforma de autenticación',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className=''>
      <body className=" text-white">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
