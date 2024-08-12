"use client";
import {useState} from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import Button from "@/components/common/Button/Button";
import {LoginFormProps, UserData} from "@/interfaces/login";

export default function LoginForm({isSignupSuccess}: LoginFormProps) {
	const [step, setStep] = useState(1);
	const [userData, setUserData] = useState<UserData>({email: ""});

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
			{step === 1 && (
				<>
					<p className="text-lg font-semibold mb-10">
						¡Hola! Ingresá tu e-mail
					</p>
					<Step1Form onSubmit={handleEmailSubmit} />
					{!isSignupSuccess && (
						<Button
							asLink
							href="/signup"
							className="text-black bg-gray hover:bg-tertiary mt-8"
						>
							Crear cuenta
						</Button>
					)}
				</>
			)}
			{step === 2 && (
				<>
					<p className="text-lg font-semibold mb-10">Ingresá tu contraseña</p>
					<Step2Form onSubmit={handlePasswordSubmit} />
				</>
			)}
		</main>
	);
}
