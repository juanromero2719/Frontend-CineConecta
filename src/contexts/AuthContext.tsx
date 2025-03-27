'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { axiosInstance } from '@/services/axiosInstance';
import { usePathname, useRouter } from 'next/navigation';

interface AuthContextType {
    isAuthenticated: boolean;
    setIsAuthenticated: (value: boolean) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const publicRoutes = ['/', '/login', '/register'];

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {
        const verifyAuth = async () => {
            if (publicRoutes.includes(pathname)) {
                return;
            }

            try {
                const response = await axiosInstance.get('/verify-token');
                setIsAuthenticated(response.data.authenticated);

                if (!response.data.authenticated) {
                    router.push('/');
                }
            } catch {
                setIsAuthenticated(false);
                router.push('/');
            }
        };

        verifyAuth();
    }, [pathname, router]);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth debe ser usado dentro de un AuthProvider');
    }
    return context;
} 