import Card from "@/components/landing/card/Card";
import Title from "@/components/landing/title/Title";
import Header from "@/components/layout/header/Header";

const links = [
	{href: "/login", text: "Ingresar", outline: true},
	{href: "/signup", text: "Crear cuenta"},
];

export default function Home() {
	return (
		<>
			<Header logoLink="/" logoClassName="fill-primary" links={links} />
			<main className="relative w-full p-5 flex flex-col grow justify-between md:p-20 ">
				<section className="w-2/3 pt-10 mb-10 flex flex-col gap-5 md:w-1/2 2xl:w-2/5">
					<Title
						title="De ahora en adelante, hacés más con tu dinero"
						subtitle="Tu nueva <strong>billetera virtual</strong>"
					/>
				</section>
				<section className="flex flex-col gap-5 self-center z-20 xl:flex-row">
					<Card
						title="Transferí dinero"
						description="Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual."
					/>
					<Card
						title="Pago de servicios"
						description="Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel."
					/>
				</section>
				<div className="absolute bottom-0 left-0 w-full h-2/5 rounded-t-2xl bg-primary z-10 md:h-1/3 xl:h-1/4"></div>
			</main>
		</>
	);
}
