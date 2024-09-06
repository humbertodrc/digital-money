"use client";
import {Account} from "@/interfaces/account";
import {Card} from "@/interfaces/card";
import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import AddAmount from "../addAmount/AddAmount";
import CheckDeposit from "../checkDeposit/CheckDeposit";
import SelectedCard from "../selectedCard/SelectedCard";
import {postDeposits} from "@/services/deposits";
import SuccessDeposit from "../successDeposit/SuccessDeposit";

interface DepositsCardsProps {
	cards: Card[];
	accountInfo: Account;
}

interface DepositData {
	card_id: string;
	amount: number;
}

export default function DepositsCards({
	cards,
	accountInfo,
}: DepositsCardsProps) {
	// Steps
	const [step, setStep] = useState(0);

	const methods = useForm({
		defaultValues: {
			card_id: "",
			amount: 0,
		},
	});
	const onSubmit = async (data: DepositData) => {
		// Normalizar los datos y enviarlos al servidor
		const body = {
			origin: "origin",
			destination: "destination",
			dated: new Date().toISOString(),
			amount: Number(data.amount),
		};
		const response = await postDeposits(accountInfo.id, body);

		if (response) {
			handleNextStep();
		}
	};

	const handleNextStep = () => {
		setStep((prevStep) => prevStep + 1);
		// Despues guardar el step en localStorage
	};

	const handleBackStep = () => {
		setStep((prevStep) => prevStep - 1);
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
				{step === 0 && (
					<SelectedCard
						handleNextStep={handleNextStep}
						cards={cards}
						userId={accountInfo.user_id}
					/>
				)}
				{step === 1 && <AddAmount handleNextStep={handleNextStep} />}
				{step === 2 && (
					<CheckDeposit cvu={accountInfo.cvu} handleBackStep={handleBackStep} />
				)}
				{step === 3 && <SuccessDeposit cvu={accountInfo.cvu} />}
			</form>
		</FormProvider>
	);
}
