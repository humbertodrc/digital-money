"use client";
import Bullet from "@/components/common/Icons/Bullet";
import {Card} from "@/interfaces/card";
import {deleteCard} from "@/services/cards";
import {useRouter} from "next/navigation";

interface CardItemProps {
	card: Card;
	userId: number;
	canDelete?: boolean;
	canSelect?: boolean;
	lastItemNoBorder?: boolean;
}

export default function CardItem({
	card,
	userId,
	canDelete,
	canSelect,
}: CardItemProps) {
	const router = useRouter();
	const lastNumbers = card.number_id.toString().slice(-4);

	const handleDelete = async (id: number) => {
		await deleteCard(userId, id);
		router.refresh();
	};

	return (
		<li className="w-full pb-5 flex flex-row justify-between items-center ">
			<div className="flex flex-row gap-5">
				<Bullet className="fill-primary" />
				<span>terminada en {lastNumbers}</span>
			</div>
			{canDelete && (
				<button
					className="text-base font-bold text-black"
					onClick={() => handleDelete(card.id)}
				>
					Eliminar
				</button>
			)}
			{/* Radio button */}
			{canSelect && (
				<input
					type="radio"
					name="card"
					value={card.id}
					className="w-4 h-4 border border-secondary/30 rounded-full
					appearance-none checked:bg-primary checked:border-secondary checked:after:bg-black checked:after:rounded-full checked:after:w-2 checked:after:h-2 relative cursor-pointer checked:after:block checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2"
				/>
			)}
		</li>
	);
}
