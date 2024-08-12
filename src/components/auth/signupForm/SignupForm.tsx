"use client";
import TextInput from "@/components/common/TextInput";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import {useRouter} from "next/navigation";
import {postSignup} from "@/services/signup";
import {shema} from "@/schema";
import { SignupData } from "@/interfaces/signup";
import Button from "@/components/common/Button/Button";


export default function SignupForm() {
	const router = useRouter();
	const {
		control,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm({
		resolver: yupResolver(shema),
		defaultValues: {
			firstname: "",
			lastname: "",
			dni: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
		},
	});

	const onSubmit = async (data: SignupData) => {
		const {dni} = data;

		const body = {
			...data,
			dni: Number(dni),
		};

		const resp = await postSignup(body);

		reset();

		if (resp) {
			// Si el registro es exitoso, redirigimos al usuario a la pagina de registro exitoso
			router.push("/signup/success");
		}
	};

	return (
		<main className="w-full px-4 md:px-0 flex flex-col gap-8 items-center justify-center md:w-2/3 xl:w-1/2 mx-auto my-8">
			<h1 className="text-lg font-bold text-center">Crear cuenta</h1>
			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<div className="grid xl:grid-cols-2 gap-5 2xl:gap-x-16 2xl:gap-y-10">
					{/* Nombre */}
					<div>
						<Controller
							name="firstname"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="firstname"
									type="text"
									placeholder="Nombre*"
									errorText={errors.firstname?.message}
								/>
							)}
						/>
					</div>
					{/* Apellido */}
					<div>
						<Controller
							name="lastname"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="lastname"
									type="text"
									placeholder="Apellido*"
									errorText={errors.lastname?.message}
								/>
							)}
						/>
					</div>
					{/* DNI */}
					<div>
						<Controller
							name="dni"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="dni"
									type="text"
									placeholder="DNI*"
									errorText={errors.dni?.message}
								/>
							)}
						/>
					</div>
					{/* Correo */}
					<div>
						<Controller
							name="email"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="email"
									type="email"
									placeholder="Correo*"
									errorText={errors.email?.message}
								/>
							)}
						/>
					</div>
				</div>
				{/* Message contraseña */}
				<div className="w-full my-5">
					<p className="text-sm xl:text-[15px] font-normal text-tertiary">
						Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
						carácter especial, una mayúscula y un número
					</p>
				</div>
				<div className="grid xl:grid-cols-2 gap-5 2xl:gap-x-16 2xl:gap-y-10">
					{/* Contraseña */}
					<div>
						<Controller
							name="password"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="password"
									type="password"
									placeholder="Contraseña*"
									errorText={errors.password?.message}
								/>
							)}
						/>
					</div>
					{/* Confirmar contraseña */}
					<div>
						<Controller
							name="confirmPassword"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="confirmPassword"
									type="password"
									placeholder="Confirmar contraseña*"
									errorText={errors.confirmPassword?.message}
								/>
							)}
						/>
					</div>
					{/* Telefono */}
					<div>
						<Controller
							name="phone"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="phone"
									type="text"
									placeholder="Teléfono*"
									errorText={errors.phone?.message}
								/>
							)}
						/>
					</div>
					{/* Button */}
					<div>
						<Button className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary">
							Crear cuenta
						</Button>
					</div>
				</div>
			</form>
		</main>
	);
}
