import { NextResponse } from 'next/server';

export function middleware(req) {
    const token = req.cookies.get('token');
    const url = req.nextUrl.clone();

    console.log(token)

    if (!token && url.pathname === '/dashboard') {
        url.pathname = '/login';
        return NextResponse.redirect(url);
    }

    if (token && (url.pathname === '/login' || url.pathname === '/signup')) {
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        '/dashboard',
        '/login',
        '/signup',
    ],
};