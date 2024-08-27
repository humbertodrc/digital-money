import { Card } from "@/interfaces/card";
import CardItem from "../cardItem/CardItem";
import clsx from "clsx";

interface CardListProps {
  cardsList: Card[];
  userId: number;
  canDelete?: boolean;
  canSelect?: boolean;
  className?: string;
}

export default function CardsList({ cardsList, userId, canDelete, canSelect, className }: CardListProps) {
  return (
    <section className={clsx('w-full flex flex-col gap-5 rounded-md bg-white text-black', className)}>
      <h2 className="pb-5 text-base font-semibold">Tus tarjetas</h2>
      <ul className="flex flex-col gap-5 [&>*:not(:last-child)]:border-b [&>*:not(:last-child)]:border-secondary/30">
        {cardsList.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            userId={userId}
            canDelete={canDelete}
            canSelect={canSelect}
          />
        ))}
      </ul>
      {/* Condicional */}
      {/* <span className="text-sm text-gray-700">* Se permite un máximo de 10 tarjetas por usuario.</span> */}
    </section>
  )
}