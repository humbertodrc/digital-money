import {Card} from "@/interfaces/card";
import {Button} from "@headlessui/react";
import {set, useFormContext} from "react-hook-form";
import CardsList from "../cardsList/CardsList";
import {Service} from "@/interfaces/service";
import Link from "next/link";
import { formatAmount } from "@/utils/formatAmount";

interface SelectCardsPaymentProps {
	cards: Card[];
	userId: number;
	service: Service;
}

export default function SelectCardsPayment({
	cards,
	userId,
	service,
}: SelectCardsPaymentProps) {
	const { control } = useFormContext();
	
	const amount = service.invoice_value || 0;

	return (
		<div className="flex flex-col gap-4">
			{/* Detalle del servicio */}
			<section className="w-full bg-black-primary rounded-lg px-12 py-8 shadow-md">
				<div className="flex w-full justify-between border-b border-tertiary/30 pb-10">
					<h2 className="text-xl text-primary font-semibold">{service.name}</h2>
					<Link className="underline text-base font-normal" href="/dashboard/services">
						Ver detalles del pago
					</Link>
				</div>
				<div className="flex w-full justify-between pt-8">
					<h3 className="text-xl text-white font-semibold">Total a pagar</h3>
					<p className="text-xl text-white font-semibold">{formatAmount(amount)}</p>
				</div>
			</section>

			{/* Tarjetas */}
			<section className="w-full py-10 pl-11 pr-9 flex flex-col rounded-md bg-white shadow-md">
				<CardsList cardsList={cards} userId={userId} control={control} />
			</section>

			<div className="flex w-full justify-end mt-5">
				<Button
					type="submit"
					// onClick={onNextStep}
					className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-full xl:w-60 h-16 rounded-xl text-black font-bold"
				>
					Pagar
				</Button>
			</div>
		</div>
	);
}
