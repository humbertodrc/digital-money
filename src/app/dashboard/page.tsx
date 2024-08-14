"use client";
import Header from "@/components/layout/header/Header";
import {removeCookieAuth} from "@/utils/cookie";
import {useRouter} from "next/navigation";

export default function DashboardPage() {
	const router = useRouter();

	// TODO: esto se debe pasar a al componente que va a manejar el cierra de sesión
	const handleLogout = () => {
		removeCookieAuth("authToken");
		router.push("/");
	};

	return (
		<>
			<Header
				logoLink="/"
				headerClassName="bg-primary"
				logoClassName="fill-black"
			/>
			<div>
				<button onClick={handleLogout}>Cerrar sesión</button>
			</div>
		</>
	);
}
