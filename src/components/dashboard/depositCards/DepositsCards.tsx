"use client";

import {useState} from "react";
import SelectedCard from "../selectedCard/SelectedCard";
import { Card } from "@/interfaces/card";
import AddAmount from "../addAmount/AddAmount";

interface DepositsCardsProps {
  cards: Card[];
  userId: number;
}

export default function DepositsCards({cards, userId}: DepositsCardsProps) {
	// Steps
  const [step, setStep] = useState(0);
  // {
  //     "origin": "origin",
  //     "destination": "destination",
  //     "dated": "2024-08-26T22:41:58.643Z",
  //     "amount": 250
  //   }
  const [depositData, setDepositData] = useState({
    origin: "origin",
    destination: "destination",
    dated: "",
    amount: 0
  });

	const handleNextStep1 = () => {
		setStep((prevStep) => prevStep + 1);
		// Despues guardar el step en localStorage
  };
  
  // En el step 2 se agrega el monto a depositar
  const handleNextStep2 = (amount: number) => {
    setDepositData((prevData) => ({
      ...prevData,
      dated: new Date().toISOString(),
      amount,
    }));
    setStep((prevStep) => prevStep + 1);
  };

	return (
		<>
			{step === 0 && <SelectedCard handleNextStep1={handleNextStep1} cards={cards} userId={userId} />}
			{step === 1 && <AddAmount handleNextStep2={handleNextStep2} />}
			{step === 2 && (<div>Revisá que está todo bien</div>)}
			{step === 3 && (<div>Ya cargamos el dinero en tu cuenta</div>)}
		</>
	);
}
