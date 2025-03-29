'use client';

import React from 'react';

export default function AuthLayout({ children }: { children: React.ReactNode; }) {

    return (
        <>
            <div className='flex flex-col min-h-screen bg-[rgb(var(--latte))]'>
                <main className=" flex flex-col items-center my-auto justify-center px-4 py-6 ">
                    {children}
                </main>
            </div>
        </>
    );
}