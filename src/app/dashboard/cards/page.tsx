import AddIcon from "@/components/common/Icons/AddIcon";
import ArrowRight from "@/components/common/Icons/ArrowRight";
import CardsList from "@/components/dashboard/cardsList/CardsList";
import Link from "next/link";

const cards = [
	{
		id: 24,
		account_id: 15,
		number_id: 4242424242424242,
		first_last_name: "Humberto Rivero",
		cod: 123,
		expiration_date: "12/2028",
	},
	{
		id: 25,
		account_id: 15,
		number_id: 5252525252525252,
		first_last_name: "Humberto Rivero",
		cod: 363,
		expiration_date: "12/2028",
	},
	{
		id: 26,
		account_id: 15,
		number_id: 5452374545457545,
		first_last_name: "Humberto",
		cod: 363,
		expiration_date: "06/2028",
	},
	{
		id: 27,
		account_id: 15,
		number_id: 4542454545454545,
		first_last_name: "Humberto",
		cod: 363,
		expiration_date: "03/2026",
	},
	{
		id: 28,
		account_id: 15,
		number_id: 2325452253544454,
		first_last_name: "Humberto Rivero",
		cod: 363,
		expiration_date: "03/2025",
	},
	{
		id: 29,
		account_id: 15,
		number_id: 4525262645452554,
		first_last_name: "Humberto",
		cod: 363,
		expiration_date: "12/2027",
	},
	{
		id: 31,
		account_id: 15,
		number_id: 4545233634645245,
		first_last_name: "Humberto",
		cod: 363,
		expiration_date: "12/2029",
	},
	{
		id: 32,
		account_id: 15,
		number_id: 5252235746548582,
		first_last_name: "Humberto",
		cod: 363,
		expiration_date: "12/2026",
	},
	{
		id: 33,
		account_id: 15,
		number_id: 5225445555553636,
		first_last_name: "Humberto",
		cod: 363,
		expiration_date: "12/2029",
	},
	{
		id: 95,
		account_id: 15,
		number_id: 2424585698247825,
		first_last_name: "Humberto",
		cod: 60,
		expiration_date: "07/2030",
	},
	{
		id: 96,
		account_id: 15,
		number_id: 4242364668978978,
		first_last_name: "Humberto",
		cod: 63,
		expiration_date: "07/2032",
	},
];

export default function CardsPage() {
  console.log(cards.length);
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
      {/* <CardsList cardsList={cards} /> */}
		</>
	);
}
