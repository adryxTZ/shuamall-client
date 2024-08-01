import { NextRequest, NextResponse } from 'next/server';

export const config = {
    matcher: [
        '/((?!api/|_next/|_static/|_vercel|[\\w-]+\\.\\w+).*)',
    ],
};

export default function middleware(req: NextRequest) {
    const url = req.nextUrl;
    let hostname = req.headers.get('host') || '';

    // Remove port if present
    hostname = hostname.split(':')[0];

    if (process.env.NODE_ENV === 'development') {
        hostname = hostname.replace('.localhost', '');
    } else {
        hostname = hostname.replace(`.${process.env.NEXT_PUBLIC_ROOT_DOMAIN}`, '');
    }

    // Replace spaces with hyphens
    hostname = hostname.replace(/%20/g, '-');
    console.log(`Processed Hostname: ${hostname}`);

    // Check if it's the main site
    if (hostname === 'localhost' || hostname === process.env.NEXT_PUBLIC_ROOT_DOMAIN) {
        console.log('Skipping middleware for main site');
        return NextResponse.next();
    }

    // Rewrite for shop subdomains
    url.pathname = `/${hostname}${url.pathname}`;
    console.log(`Rewriting to: ${url.toString()}`);
    return NextResponse.rewrite(url);
}
