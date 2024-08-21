import { Card } from "@/interfaces/card";
import CardItem from "../cardItem/CardItem";

interface CardListProps {
  cardsList: Card[];
  userId: number;
}

export default function CardsList({ cardsList, userId }: CardListProps) {
  return (
    <section className="w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15">
      <h2 className="pb-5 text-base font-semibold">Tus tarjetas</h2>
      <ul className="flex flex-col gap-5">
        {cardsList.map((card) => (
          <CardItem key={card.id} card={card} userId={userId} />
        ))}
      </ul>
      <span className="text-sm text-gray-700">* Se permite un máximo de 10 tarjetas por usuario.</span>
    </section>
  )
}