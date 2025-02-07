import { NextResponse } from 'next/server';

export async function middleware(request) {
  console.log("middleware executed.")
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - firebase-messaging-sw.js (service worker)
     * - firebase-cloud-messaging-push-scope (Firebase FCM)
     */
    '/admin/:path*',
    '/stall-holder/:path*',
    '/light-worker/:path*',
    // '/zoom-documentation',
    '/((?!api|_next/static|_next/image|favicon.ico|firebase-messaging-sw.js|firebase-cloud-messaging-push-scope|zoom-documentation).*)',
    // '/((?!zoom-documentation).*)',
  ],
};
