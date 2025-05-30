'use client';

import React from 'react';
import Header from '@/components/HeaderComponent'
import Footer from '@/components/shared/Footer'

export default function AuthLayout({ children }: { children: React.ReactNode; }) {

    return (
        <>
            <div className='flex flex-col min-h-screen bg-[rgb(var(--dark-blue-100))] bg-noise'>
                <Header />
                
                <main className="flex flex-col items-center my-auto justify-center min-h-screen">
                    {children}
                </main>
            
            </div>
            <Footer />
        </>
    );
}