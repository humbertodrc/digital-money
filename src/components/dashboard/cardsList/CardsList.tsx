import {Card} from "@/interfaces/card";
import CardItem from "../cardItem/CardItem";
import clsx from "clsx";
import {Controller } from "react-hook-form";
import RadioInput from "@/components/common/radioInput/RadioInput";

interface CardListProps {
	cardsList: Card[];
	userId: number;
	canDelete?: boolean;
  className?: string;
  control?: any;
}

export default function CardsList({
	cardsList,
	userId,
	canDelete,
  className,
  control,
}: CardListProps) {
	
	return (
		<section
			className={clsx(
				"w-full flex flex-col gap-5 rounded-md bg-white text-black",
				className
			)}
		>
			<h2 className="pb-5 text-base font-semibold">Tus tarjetas</h2>
			<ul className="flex flex-col gap-5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-secondary/30">
				{cardsList.map((card) => (
					<CardItem
						key={card.id}
						card={card}
						userId={userId}
						canDelete={canDelete}
					>
						<Controller
							name="card_id"
							control={control}
							render={({field}) => (
								<RadioInput
									{...field}
									labelPosition="right"
									value={card.id.toString()}
									checked={field.value === card.id.toString()}
								/>
							)}
						/>
					</CardItem>
				))}
			</ul>
			{/* Condicional */}
			{/* <span className="text-sm text-gray-700">* Se permite un máximo de 10 tarjetas por usuario.</span> */}
		</section>
	);
}
