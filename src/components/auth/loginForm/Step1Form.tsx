"use client";
import Button from "@/components/common/Button/Button";
import TextInput from "@/components/common/TextInput";
import { Controller, useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import { shemaEmail } from "@/schema/login";

interface Step1FormProps {
	onSubmit: (data: any) => void;
}

export default function Step1Form({onSubmit}: Step1FormProps) {
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
						{...field}
						id="email"
						type="email"
						placeholder="Correo*"
						errorText={errors.email?.message}
					/>
				)}
			/>
			<Button type="submit" className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary">
				Continuar
			</Button>
		</form>
	);
}
