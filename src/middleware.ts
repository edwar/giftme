import { type NextRequest, NextResponse } from "next/server";
import { verify } from "./services/jwt_sign_verify";
import { withAuth } from "next-auth/middleware"

const secret = process.env.NEXTAUTH_SECRET || "secret";

function validUrl(path: string, pathname: string): boolean {
  return pathname.startsWith(path);
}

export async function middleware(request: NextRequest) {
  if (validUrl("/api", request.nextUrl.pathname)) {
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
}

export default withAuth({
  callbacks: {
    authorized: ({req, token}) => {
      if (validUrl("/login", req.nextUrl.pathname) && token) {
        NextResponse.redirect(new URL('/', req.url));
      }
      if(validUrl("/register", req.nextUrl.pathname) && token) {
        NextResponse.redirect(new URL('/', req.url));
      }
      if(validUrl("/account", req.nextUrl.pathname) && !token) {
        NextResponse.redirect(new URL('/', req.url))
      }
      return !!token
    },
  },
})

export const config = {
  matcher: [
    "/api/profile/:id/",
    "/login/",
    "/register/",
    "/account/"
  ],
};
