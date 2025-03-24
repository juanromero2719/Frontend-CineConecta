'use client';

import React from 'react';

import Header from '@/../components/header'

export default function AuthLayout({ children }: { children: React.ReactNode; }) {
    const baseUrl = process.env.BASE_URL_API;
console.log('baseee', baseUrl)
    return (
        <>
            <div className='flex flex-col min-h-screen bg-ccDarkGray'>
                <Header/>

                <main className=" flex flex-col tems-center justify-center px-4 py-6 bg-ccDarkGray">
                    {children}
                </main>
            </div>         
        </>
    );
}