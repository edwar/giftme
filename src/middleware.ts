import { NextFetchEvent, NextRequest, NextResponse } from "next/server";
import { verify } from "./services/jwt_sign_verify";

const secret = process.env.NEXTAUTH_SECRET || "secret";
const keyToken = process.env.NEXTAUTH_KEY_TOKEN || "next-auth.session-token"

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(keyToken);
  const authToken = token?.value
  function validUrl(path: string): boolean {
    return request.nextUrl.pathname.startsWith(path);
  }
  if (validUrl("/api")) {
    try {
      let token: string | undefined;

      if (request.cookies.has("token")) {
        token = request.cookies.get("token")?.value;
      } else if (request.headers.get("Authorization")?.startsWith("Bearer ")) {
        token = request.headers.get("Authorization")?.substring(7);
      }

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
  if (validUrl("/login") && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if(validUrl("/register") && authToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  if(validUrl("/account") && !authToken) {
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
