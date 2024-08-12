"use client";
import { LoginFormProps, UserData } from "@/interfaces/login";
import { useState } from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";

export default function LoginForm({isSignupSuccess}: LoginFormProps) {
	const [userData, setUserData] = useState<UserData>({email: ""});
	const [step, setStep] = useState(1);

	// Manejador para el envío del primer paso (email)
	const handleEmailSubmit = (data: {email: string}) => {
		setUserData((prevData) => ({...prevData, email: data.email}));
		setStep(2);
	};

	// Manejador para el envío del segundo paso (contraseña)
	const handlePasswordSubmit = async (data: {password: string}) => {
		const updatedData = {...userData, password: data.password};

		// TODO: Implementar la llamada a la API
		// const resp = await postLogin(updatedData);
	};

	// Si el usuario regresa al paso 1, por medio del browser, reseteamos el estado
	if (step === 1 && userData.password) {
		setUserData({email: ""});
	}

	return (
		<main className="w-full px-4 md:px-0 flex flex-col items-center justify-center md:w-2/3 xl:w-96 mx-auto my-8">
			<>
				{step === 1 && (
					<Step1Form
						onSubmit={handleEmailSubmit}
						isSignupSuccess={isSignupSuccess}
					/>
				)}
			</>
			<>
				{step === 2 && <Step2Form onSubmit={handlePasswordSubmit} />}
			</>
		</main>
	);
}
