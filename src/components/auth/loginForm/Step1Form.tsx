"use client";
import Button from "@/components/common/Button/Button";
import TextInput from "@/components/common/TextInput";
import { Cookie } from "@/interfaces/login";
import { shemaEmail } from "@/schema/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import ButtonRegister from "./ButtonRegister";

interface Step1FormProps {
	onSubmit: (data: any) => void;
	isSignupSuccess: Cookie | undefined;
}

export default function Step1Form({onSubmit, isSignupSuccess}: Step1FormProps) {
	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(shemaEmail),
		defaultValues: {
			email: "",
		},
	});

	return (
		<>
			<p className="text-lg font-semibold mb-10">¡Hola! Ingresá tu e-mail</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full flex flex-col gap-1"
			>
				<Controller
					name="email"
					control={control}
					render={({field}) => (
						<TextInput
							wrapperClassName="h-24"
							className="p-5"
							{...field}
							id="email"
							type="email"
							placeholder="Correo*"
							errorText={errors.email?.message}
						/>
					)}
				/>
				<Button
					type="submit"
					className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary"
				>
					Continuar
				</Button>
			</form>
			{!isSignupSuccess && (
				<ButtonRegister />
			)}
		</>
	);
}
