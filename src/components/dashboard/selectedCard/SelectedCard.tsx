import Button from "@/components/common/button/Button";
import AddIcon from "@/components/common/Icons/AddIcon";
import { Card } from "@/interfaces/card";
import Link from "next/link";
import CardsList from "../cardsList/CardsList";

interface SelectedCardProps {
  handleNextStep1: () => void;
  cards: Card[];
  userId: number;
}

export default function SelectedCard({handleNextStep1, cards, userId}: SelectedCardProps) {
	return (
		<>
			<section className="w-full pt-10 pl-14 pr-11 pb-11 flex flex-col rounded-md bg-secondary shadow-md">
				<h2 className="text-xl text-primary font-bold">Seleccionar tarjeta</h2>
				<div className="w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black md:p-10 xl:p-15 mt-11">
					<CardsList cardsList={cards} userId={userId} canSelect />
				</div>
				<div className="flex items-center justify-between mt-9">
					<Link href="/dashboard/cards/add" className="flex items-center gap-5 flex-1">
						<AddIcon />
						<span className="text-primary text-lg font-semibold">
							Nueva tarjeta
						</span>
					</Link>
          <Button
            onClick={handleNextStep1}
						className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-full xl:w-60"
					>
						Continuar
					</Button>
				</div>
			</section>
		</>
	);
}