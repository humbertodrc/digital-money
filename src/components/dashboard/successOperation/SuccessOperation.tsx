"use client";
import Button from "@/components/common/button/Button";
import CheckIcon from "@/components/common/Icons/CheckIcon";
import {Card} from "@/interfaces/card";
import {getCardById} from "@/services/cards";
import {formatAmount} from "@/utils/formatAmount";
import {formatDate} from "@/utils/formatDate";
import {getCardType} from "@/utils/getCardType";
import {maskCardNumber} from "@/utils/maskCardNumber";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {useFormContext} from "react-hook-form";

interface SuccessOperationProps {
	origin?: string;
	destiny: string;
	title: string;
	userId?: number;
	isDeposit?: boolean;
}

export default function SuccessOperation({
	origin,
	destiny,
	title,
	userId,
	isDeposit,
}: SuccessOperationProps) {
	const [selectedCard, setSelectedCard] = useState<Card>();
	const {getValues} = useFormContext();
	const date = new Date();
	const router = useRouter();
	const cardId = getValues("card_id");
	const token = localStorage.getItem("acc_token") || "";

	const handleBackToDashboard = () => {
		router.push("/dashboard");
	};

	useEffect(() => {
		if (!isDeposit) {
			getCardById(userId, token, cardId).then((data) => {
				setSelectedCard(data);
			});
		}
	}, [cardId, isDeposit, token, userId]);

	return (
		<section className="flex flex-col gap-5">
			<div className="w-full flex flex-col gap-3 items-center justify-center bg-primary py-4 rounded-lg">
				<CheckIcon className="fill-black" />
				<h2 className="text-xl text-black font-bold">{title}</h2>
			</div>
			<div className="bg-black-primary p-5 xl:pt-9 xl:pl-16 xl:pb-11 rounded-lg">
				<div className="flex flex-col gap-2 mb-8">
					<p className="text-base font-normal">{formatDate(date)}</p>
					<span className="font-bold text-base text-primary">
						{formatAmount(getValues("amount"))}
					</span>
				</div>
				<div className="flex flex-col gap-2 mb-6">
					<p className="text-base font-normal">Para</p>
					<p className="font-bold text-lg text-primary">{destiny}</p>
				</div>
				<div className="flex flex-col gap-2">
					{origin && (
						<>
							<p>Brubank</p>
							<p>{origin}</p>
						</>
					)}
					{selectedCard && (
						<>
							<p>Tarjeta</p>
							<div className="flex gap-1">
								<p>{getCardType(String(selectedCard?.number_id))}</p>
								<p>{maskCardNumber(String(selectedCard?.number_id))}</p>
							</div>
						</>
					)}
				</div>
			</div>
			<div className="flex gap-5 justify-end">
				<Button
					type="button"
					className="bg-gray hover:bg-primary-dark focus:outline-2 focus:outline-grbg-gray w-full xl:w-60"
					onClick={handleBackToDashboard}
				>
					Volver al inicio
				</Button>
				<Button
					type="button"
					className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-full xl:w-60"
				>
					Descargar comprobante
				</Button>
			</div>
		</section>
	);
}
