import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { verify } from "./services/jwt_sign_verify";
import { getToken } from "next-auth/jwt";

const secret = process.env.NEXTAUTH_SECRET || "secret";

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const autToken = await getToken({
    req: request,
    secret,
  });
  function validUrl(path: string): boolean {
    return request.nextUrl.pathname.startsWith(path);
  }
  if (validUrl("/api")) {
    try {
      const token = request.headers.get("x-access-token");

      if (!token)
        return NextResponse.json(
          { message: "Debes proveer un token" },
          { status: 403 }
        );

      const decoded = await verify(token, secret);
      if (!decoded)
        return NextResponse.json(
          { message: "Credenciales invalidas" },
          { status: 401 }
        );

      const { id } = JSON.parse(String(decoded["payload"]));

      const requestHeader = new Headers(request.headers);

      requestHeader.set("user-id", id);
      return NextResponse.next({
        request: {
          headers: requestHeader,
        },
      });
    } catch (error) {
      return NextResponse.json({ message: "No esta autorizado" }, { status: 401 });
    }
  }
  if (validUrl("/login") && autToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if(validUrl("/register") && autToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if(validUrl("/account") && !autToken) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: [
    "/api/profile/:id/",
    "/login/",
    "/register/",
    "/account/"
  ],
};
