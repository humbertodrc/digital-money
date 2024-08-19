"use client";
import { removeCookieClient } from "@/utils/cookieClient";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();

	// TODO: esto se debe pasar a al componente que va a manejar el cierra de sesión
	const handleLogout = () => {
		// Lógica para cerrar sesión
		removeCookieClient("authToken");
		router.push("/");
	};

  return (
    <nav className="w-full h-full p-10 flex flex-col gap-5 items-start text-black">
      <Link href="/dashboard" className="">Inicio</Link>
      <Link href="/dashboard/activity" className="">Actividad</Link>
      <Link href="/dashboard/profile" className="">Tu perfil</Link>
      <Link href="/dashboard/deposit" className="">Cargar dinero</Link>
      <Link href="/dashboard/payment" className="">Pagar servicios</Link>
      <Link href="/dashboard/cards" className="">Tarjetas</Link>
      <button className="opacity-25" onClick={handleLogout}>Cerrar sesión</button>
    </nav>
  )
}