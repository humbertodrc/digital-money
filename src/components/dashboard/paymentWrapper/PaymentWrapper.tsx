"use client";
import {Account} from "@/interfaces/account";
import {Service} from "@/interfaces/service";
import {useState} from "react";
import {FormProvider, useForm} from "react-hook-form";
import SelectAccountPayment from "../selectAccountPayment/SelectAccountPayment";
import SelectCardsPayment from "../selectCardsPayment/SelectCardsPayment";
import {Card} from "@/interfaces/card";
import SuccessOperation from "../successOperation/SuccessOperation";
import {postTransactions} from "@/services/transactions";

interface PaymentWrapperProps {
	service: Service;
	accountInfo: Account;
	cards: Card[];
}

export default function PaymentWrapper({
	service,
	accountInfo,
	cards,
}: PaymentWrapperProps) {
	// Steps
	const [step, setStep] = useState(0);

	const methods = useForm({
		defaultValues: {
			amount: service.invoice_value || 0,
			accountNumber: "",
			description: service.name,
      card_id: "",
		},
	});

	const handleNextStep = () => {
		setStep((prevStep) => prevStep + 1);
		// Despues guardar el step en localStorage
	};

	const onSubmit = async (data: any) => {
		// Normalizar los datos y enviarlos al servidor
		const body = {
			amount: - Number(data.amount),
			dated: new Date().toISOString(),
      description: data.description,
      card_id: data.card_id,
		};
    const response = await postTransactions(accountInfo.id, body);

    if (response) {
			handleNextStep();
		}
	};

	return (
		<FormProvider {...methods}>
			<form onSubmit={methods.handleSubmit(onSubmit)} className="w-full">
				{step === 0 && <SelectAccountPayment handleNextStep={handleNextStep} />}

				{step === 1 && (
					<SelectCardsPayment
						cards={cards}
						userId={accountInfo.user_id}
						service={service}
					/>
				)}

				{step === 2 && (
					<SuccessOperation destiny={service.name}  />
				)}
			</form>
		</FormProvider>
	);
}
