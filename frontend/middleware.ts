import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const protectedPrefixes = ["/dashboard", "/admin"];

export function middleware(request: NextRequest) {
  const token = request.cookies.get("sleepos_access_token")?.value;
  const { pathname } = request.nextUrl;

  const isProtectedRoute = protectedPrefixes.some((prefix) => pathname.startsWith(prefix));
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/admin/:path*"],
};

