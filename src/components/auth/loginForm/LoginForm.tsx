"use client";
import BackIcon from "@/components/common/Icons/BackIcon";
import {LoginFormProps, UserData} from "@/interfaces/login";
import {postLogin} from "@/services/auth";
import {setCookieClient} from "@/utils/cookieClient";
import {useRouter} from "next/navigation";
import {useState} from "react";
import Step1Form from "./Step1Form";
import Step2Form from "./Step2Form";
import useLocalStorage from "@/hooks/useLocalStorage";

export default function LoginForm({isSignupSuccess}: LoginFormProps) {
	const [userData, setUserData] = useState<UserData>({email: ""});
	const [error, setError] = useState<string | null>(null);
	const [step, setStep] = useState(1);
	const {setValue}= useLocalStorage("acc_token")
	const router = useRouter();

	// Manejador para el envío del primer paso (email)
	const handleEmailSubmit = (data: {email: string}) => {
		setUserData((prevData) => ({...prevData, email: data.email}));
		setStep(2);
	};

	// Manejador para el envío del segundo paso (contraseña)
	const handlePasswordSubmit = async (data: {password: string}) => {
		const updatedData = {...userData, password: data.password};

		try {
			const resp = await postLogin(updatedData);
			if (resp.token && !resp.error) {
				setCookieClient({ name: "authToken", value: resp.token, hours: 1 });
				setValue(resp.token);

				router.push("/dashboard");
			}
		} catch (error) {
			setError("Error al iniciar sesión intenta de nuevo");
		}
	};

	// Manejador para regresar al paso 1
	const handleBack = () => {
		setStep(1);
		setUserData({email: ""});
		setError(null);
	};

	// Si el usuario regresa al paso 1, por medio del browser, reseteamos el estado
	if (step === 1 && userData.password) {
		setUserData({email: ""});
	}

	return (
		<main className="w-full px-4 md:px-0 flex flex-col items-center justify-center md:w-2/3 xl:w-96 mx-auto my-8">
			{step === 1 && (
				<Step1Form
					onSubmit={handleEmailSubmit}
					isSignupSuccess={isSignupSuccess}
				/>
			)}
			{step === 2 && <Step2Form onSubmit={handlePasswordSubmit} />}
			{error && (
				<div
					className="text-error flex items-center mt-4 gap-2 cursor-pointer"
					onClick={handleBack}
				>
					<BackIcon className="w-6 h-6 " />
					<p className="text-sm italic font-normal">{error}</p>
				</div>
			)}
		</main>
	);
}
