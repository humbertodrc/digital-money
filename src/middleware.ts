import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieHasAuthToken = request.cookies.has("authToken");
  const url = request.nextUrl.clone();

  // Verificamos si es la página de éxito y si tiene la bandera de registro exitoso
  if (url.pathname === "/signup/success") {
		const signupSuccess = request.cookies.get("signupSuccess");
		console.log(signupSuccess);

    if (!signupSuccess) {
      return NextResponse.redirect(new URL("/signup", request.url));
    }
  }

  // Verificamos si el usuario tiene un token de autenticación
  // if (!cookieHasAuthToken) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  // Permitir el acceso a la ruta solicitada
  // return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/signup/success"],
};
