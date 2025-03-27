import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rutas que no requieren autenticación
const publicRoutes = [
    '/',
    '/login',
    '/register',
    '/api/login',
    '/api/register',
    '/api/verify-token'
]

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    // Permitir todas las rutas públicas y rutas de API
    if (publicRoutes.includes(path) || path.startsWith('/api/')) {
        return NextResponse.next()
    }

    // Verificar si la ruta es del dashboard
    if (path.startsWith('/dashboard')) {
        // Permitir que el contexto de autenticación maneje la protección
        return NextResponse.next()
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}

