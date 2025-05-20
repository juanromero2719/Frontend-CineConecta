'use client';

import React from 'react';
import Header from '@/components/HeaderComponent';

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen bg-[rgba(var(--latte-light))]">
      <Header />
      <main className="flex flex-col items-center justify-center px-4 py-6">
        {children}
      </main>
    </div>
  );
}
