'use client';
import Bullet from "@/components/common/Icons/Bullet";
import { Card } from "@/interfaces/card";
import { deleteCard } from "@/services/cards";

interface CardItemProps {
	card: Card;
	userId: number;
}

export default function CardItem({card, userId}: CardItemProps) {
	const lastNumbers = card.number_id.toString().slice(-4);

	const handleDelete = async(id: number) => {
		await deleteCard(userId, id);
	};

	return (
		<li className="w-full pb-5 flex flex-row justify-between items-center border-b border-gray">
			<div className="flex flex-row gap-5">
				<Bullet className="fill-primary" />
				<span>terminada en {lastNumbers}</span>
			</div>
			<button
				className="text-base font-bold text-black"
				onClick={() => handleDelete(card.id)}
			>
				Eliminar
			</button>
		</li>
	);
}
