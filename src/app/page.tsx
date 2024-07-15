import Card from "@/components/landing/card/Card";
import Title from "@/components/landing/title/Title";
import Header from "@/components/layout/header/Header";
import { landingData } from "@/data/landing";

const links = [
	{href: "/login", text: "Ingresar", outline: true},
	{href: "/signup", text: "Crear cuenta"},
];

export default function Home() {
	return (
		<>
			<Header logoLink="/" logoClassName="fill-primary" links={links} />
			<main className="relative w-full p-5 flex flex-col grow justify-between md:p-20 bg-landing-image bg-cover bg-center bg-no-repeat">
				<section className="w-2/3 pt-10 mb-10 flex flex-col gap-5 md:w-1/2 2xl:w-2/5">
					<Title
						title={landingData.title}
						subtitle={landingData.subTitle}
					/>
				</section>
				<section className="flex flex-col gap-5 self-center z-20 xl:flex-row">
					<Card
						title={landingData.cards.transfer.title}
						description={landingData.cards.transfer.description}
					/>
					<Card
						title={landingData.cards.services.title}
						description={landingData.cards.services.description}
					/>
				</section>
				<div className="absolute bottom-0 left-0 w-full h-2/5 rounded-t-2xl bg-primary z-10 md:h-1/3 xl:h-1/4"></div>
			</main>
		</>
	);
}
