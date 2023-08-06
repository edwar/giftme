import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

const url = process.env.NEXTAUTH_URL ?? ''

function validUrl(path: string, request: NextRequest): boolean {
  return request.nextUrl.pathname.startsWith(path);
}

export async function middleware(request: NextRequest) {

  let authToken = null;
  if (url === 'http://localhost:3000') {
    authToken = await getToken({ req: request })
  } else {
    authToken = await getToken({ req: request, secureCookie: true })
  }

  if (validUrl("/login", request) && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if(validUrl("/register", request) && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  if(validUrl("/account", request) && !authToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  if(validUrl("/account/profile", request) && authToken) {
    return NextResponse.next({
      headers: {
        'Authorization': `Bearer ${authToken.accessToken}`
      }
    })
  }

  if(validUrl("/", request) && authToken) {
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    "/login/",
    "/register/",
    "/account/",
    "/account/profile/:id/",
    "/"
  ],
};
