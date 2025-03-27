import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rutas que no requieren autenticación
const publicRoutes = ['/', '/login', '/register']

export function middleware(request: NextRequest) {

    const token = request.cookies.get('cine_token')

    const path = request.nextUrl.pathname

    if (publicRoutes.includes(path)) {
        return NextResponse.next()
    }

    if (!token) {
        return NextResponse.redirect(new URL('/', request.url))
    }


    return NextResponse.next()
}

export const config = {
    matcher: [

        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}

