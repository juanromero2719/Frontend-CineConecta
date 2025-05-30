'use client';

import React from 'react';
import Footer from '@/components/shared/Footer'

export default function AuthLayout({ children }: { children: React.ReactNode; }) {

    return (
        <>
            <div className='flex flex-col min-h-screen bg-[rgba(var(--dark-blue-100))] bg-noise'>
                <main className=" flex flex-col justify-center ">
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    );
}