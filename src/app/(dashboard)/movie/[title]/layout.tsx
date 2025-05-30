'use client';

import React from 'react';

export default function MovieLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex flex-col items-center justify-center py-0">
        {children}
      </main>
    </div>
  );
}
