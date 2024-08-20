'use client';
import Bullet from "@/components/common/Icons/Bullet";

interface CardItemProps {
	card: Card;
}

export default function CardItem({card}: CardItemProps) {
	const lastNumbers = card.number_id.toString().slice(-4);

	const handleDelete = (id: number) => {
		console.log(`Card with id ${id} has been deleted`);
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
