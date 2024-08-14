import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieHasAuthToken = request.cookies.has("authToken");
  const signupSuccess = request.cookies.has("signupSuccess");
  console.log("signupSuccess", signupSuccess);
  console.log('url', request.nextUrl.pathname);
  const url = request.nextUrl.clone();

  // Verificamos que se pueda acceder a /signup/success solo si se ha registrado un usuario y tenemos la cookie
  if (!signupSuccess && url.pathname === "/signup/success") {
    return NextResponse.redirect(new URL("/", request.url));
  }
  

  // Verificamos si el usuario tiene un token de autenticación
  if (!cookieHasAuthToken && url.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Permitir el acceso a la ruta solicitada
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/signup/success"],
};
