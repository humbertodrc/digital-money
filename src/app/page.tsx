import Header from "@/components/layout/header/Header";

const links = [
	{href: "/login", text: "Ingresar", outline: true},
	{href: "/signup", text: "Crear cuenta"},
];

export default function Home() {
	return (
		<>
			<Header logoLink="/" logoClassName="fill-primary" links={links} />
			<main className="relative w-full p-5 flex flex-col grow justify-between bg-landing-image bg-cover bg-center bg-no-repeat 2xl:bg-[50%_25%] md:p-20 ">
				<section className="w-2/3 pt-10 mb-10 flex flex-col gap-5 md:w-1/2 2xl:w-2/5">
					<h1 className="font-normal text-2xl md:text-4xl xl:text-5xl">
						De ahora en adelante, haces más con tu dinero
					</h1>
					<div className="w-1/5 border-t-4 border-primary md:w-1/4 md:hidden"></div>
					<h2 className="font-semibold text-xl text-primary md:text-2xl xl:text-3xl">
						Tu nueva <strong>billetera virtual</strong>
					</h2>
				</section>
				<section className="flex flex-col gap-5 self-center z-20 xl:flex-row">
					<div className="w-full p-5 bg-white rounded-xl text-black flex flex-col gap-2 md:p-7 md:gap-5 xl:w-[500px]">
						<h3 className="pb-2 font-bold text-xl border-b-2 border-primary md:text-2xl xl:text-3xl">
							Transferí dinero
						</h3>
						<p className="text-sm md:text-base xl:text-lg text-balance">
							Desde Digital Money House vas a poder transferir dinero a otras
							cuentas, asi como también recibir transferencias y nuclear tu
							capital en nuestra billetera virtual.
						</p>
					</div>
					<div className="w-full p-5 bg-white rounded-xl text-black flex flex-col gap-2 md:p-7 md:gap-5 xl:w-[500px]">
						<h3 className="pb-2 font-bold text-xl border-b-2 border-primary md:text-2xl xl:text-3xl">
							Pago de servicios
						</h3>
						<p className="text-sm md:text-base xl:text-lg text-balance">
							Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido
							y conveniente. Olvidate de las facturas en papel.
						</p>
					</div>
				</section>
				<div className="absolute bottom-0 left-0 w-full h-2/5 rounded-t-2xl bg-primary z-10 md:h-1/3 xl:h-1/4"></div>
			</main>
		</>
	);
}
