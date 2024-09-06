import AddIcon from "@/app/components/common/Icons/AddIcon";
import ArrowRight from "@/app/components/common/Icons/ArrowRight";
import CardsList from "@/app/components/dashboard/cardsList/CardsList";
import { getAcountInfo } from "@/services/acountInfo";
import { getCards } from "@/services/cards";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";
import Link from "next/link";

export default async function CardsPage() {
	const token = getTokenFromCookie();
	const accountInfo = await getAcountInfo(token);
	const cards = await getCards(accountInfo.id, token);
	return (
		<>
			<section
				className={
					"w-full p-5 flex flex-col gap-8 rounded-md bg-black-primary shadow-md md:p-10 xl:px-8 xl:py-9"
				}
			>
				<h2 className="text-base font-semibold">
					Agregá tu tarjeta de débito o crédito
				</h2>
				<Link
					href="/dashboard/cards/add"
					className="w-full flex items-center justify-between"
				>
					<div className="flex flex-row items-center gap-3">
						<AddIcon />
						<span className="text-primary text-2xl font-semibold">
							Nueva tarjeta
						</span>
					</div>
					<ArrowRight className="fill-primary" />
				</Link>
			</section>
			<CardsList
				cardsList={cards}
				userId={accountInfo.id}
				className="p-5 shadow-md md:p-10 xl:p-15"
				canDelete
			/>
		</>
	);
}
