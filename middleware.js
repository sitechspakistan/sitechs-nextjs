import { NextResponse } from 'next/server'

export function middleware(request) {
  const pathname = request.nextUrl.pathname.toLowerCase()

  // Block legacy PHP & spam URLs
  if (
    pathname.includes('index.php') ||
    pathname.includes('pcmypage') ||
    pathname.includes('shopdetail') ||
    pathname.includes('/product/edit')
  ) {
    return new NextResponse('Gone', { status: 410 })
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next|favicon.ico|robots.txt|sitemap.xml).*)'],
}