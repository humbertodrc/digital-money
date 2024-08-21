import {NextResponse} from "next/server";
import type {NextRequest} from "next/server";

export function middleware(request: NextRequest) {
	const cookieHasAuthToken = request.cookies.has("authToken");
	const signupSuccess = request.cookies.has("signupSuccess");
	const url = request.nextUrl.clone();

	// Verificamos que se pueda acceder a /signup/success solo si se ha registrado un usuario y tenemos la cookie
	if (!signupSuccess && url.pathname === "/signup/success") {
		return NextResponse.redirect(new URL("/", request.url));
	}

	// Verificamos si el usuario tiene un token de autenticación para rutas protegidas
	if (!cookieHasAuthToken && url.pathname.startsWith("/dashboard")) {
		return NextResponse.redirect(new URL("/", request.url));
	}

  // Si el usuario tiene un token de autenticación, lo enviamos en el header de la solicitud
	// if (cookieHasAuthToken) {
	// 	const authToken = request.cookies.get("authToken")?.value;
  //   const requestHeaders = new Headers(request.headers);
	// 	if (authToken) {
  //     requestHeaders.set("Authorization", `${authToken}`);
  //     requestHeaders.keys();
  //   }
    
	// 	return NextResponse.next({
	// 		request: {
	// 			headers: requestHeaders,
	// 		},
	// 	});
  // }
  
	// Permitir el acceso a la ruta solicitada
	return NextResponse.next();
}

export const config = {
	matcher: ["/dashboard/:path*", "/signup/success"],
};
