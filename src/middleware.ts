import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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

    if (publicRoutes.includes(path) || path.startsWith('/api/')) {
        return NextResponse.next()
    }

    if (path.startsWith('/dashboard')) {
        return NextResponse.next()
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/((?!_next/static|_next/image|favicon.ico).*)',
    ],
}