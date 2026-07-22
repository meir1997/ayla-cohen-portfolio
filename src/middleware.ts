import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  let pathname = request.nextUrl.pathname

  try {
    pathname = decodeURIComponent(pathname)
  } catch {
    // Keep the original path if it contains malformed encoding.
  }

  if (pathname.replace(/\/$/, '') === '/הצהרת-נגישות') {
    return NextResponse.redirect(new URL('/accessibility', request.url), 308)
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
