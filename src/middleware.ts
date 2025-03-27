import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rutas que no requieren autenticación
const publicRoutes = ['/', '/login', '/register']

export async function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname

    if (publicRoutes.includes(path)) {
        return NextResponse.next()
    }

    const jwt = request.cookies.get('cine_token')?.value
    console.log("jwt", jwt)

    if (!jwt) {
        return NextResponse.redirect(new URL('/', request.url))
    }
}

export const config = {
    matcher: [
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}

