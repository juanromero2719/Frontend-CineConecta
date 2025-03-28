'use client';

import React from 'react';

import Header from '@/components/header'

export default function AuthLayout({ children }: { children: React.ReactNode; }) {

    return (
        <>
            <div className='flex flex-col min-h-screen '>
                <Header />

                <main className=" flex flex-col tems-center justify-center px-4 py-6 ">
                    {children}
                </main>
            </div>
        </>
    );
}