"use client";
import Button from "@/components/common/Button/Button";
import TextInput from "@/components/common/TextInput";
import { shemaPassword } from "@/schema/login";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";

interface Step2FormProps {
	onSubmit: (data: any) => void;
}

export default function Step2Form({onSubmit}: Step2FormProps) {
	const {
		control,
		handleSubmit,
		formState: {errors},
	} = useForm({
		resolver: yupResolver(shemaPassword),
		defaultValues: {
			password: "",
		},
	});

	return (
		<>
			<p className="text-lg font-semibold mb-10">Ingresá tu contraseña</p>
			<form
				onSubmit={handleSubmit(onSubmit)}
				className="w-full flex flex-col gap-1"
			>
				<Controller
					name="password"
					control={control}
					render={({field}) => (
						<TextInput
							wrapperClassName="h-24"
							{...field}
							id="password"
							type="password"
							placeholder="Contraseña*"
							errorText={errors.password?.message}
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
		</>
	);
}
