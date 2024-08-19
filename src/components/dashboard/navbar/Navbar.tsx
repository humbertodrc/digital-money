"use client";
import {navbarPaths} from "@/constants/navbarPaths";
import {removeCookieClient} from "@/utils/cookieClient";
import clsx from "clsx";
import Link from "next/link";
import {usePathname, useRouter} from "next/navigation";

export default function Navbar() {
	const router = useRouter();
	const pathname = usePathname();

	// TODO: esto se debe pasar a al componente que va a manejar el cierra de sesión
	const handleLogout = () => {
		// Lógica para cerrar sesión
		removeCookieClient("authToken");
		router.push("/");
	};

	return (
		<nav className="w-full h-full p-10 flex flex-col gap-5 items-start text-black">
			<Link
				href="/dashboard"
				className={clsx("text-base", {
					"font-extrabold": pathname === navbarPaths.home,
				})}
			>
				Inicio
			</Link>
			<Link
				href="/dashboard/activity"
				className={clsx("text-base", {
					"font-extrabold": pathname === navbarPaths.activity,
				})}
			>
				Actividad
			</Link>
			<Link
				href="/dashboard/profile"
				className={clsx("text-base", {
					"font-extrabold": pathname === navbarPaths.profile,
				})}
			>
				Tu perfil
			</Link>
			<Link
				href="/dashboard/deposit"
				className={clsx("text-base", {
					"font-extrabold": pathname === navbarPaths.deposit,
				})}
			>
				Cargar dinero
			</Link>
			<Link
				href="/dashboard/payment"
				className={clsx("text-base", {
					"font-extrabold": pathname === navbarPaths.payment,
				})}
			>
				Pagar servicios
			</Link>
			<Link
				href="/dashboard/cards"
				className={clsx("text-base", {
					"font-extrabold": pathname === navbarPaths.cards,
				})}
			>
				Tarjetas
			</Link>
			<button className="opacity-60" onClick={handleLogout}>
				Cerrar sesión
			</button>
		</nav>
	);
}
