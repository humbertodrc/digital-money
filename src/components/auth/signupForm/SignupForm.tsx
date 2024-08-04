"use client";
import TextInput from "@/components/common/TextInput";
import {Controller, useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

const shema = yup
	.object({
		name: yup
			.string()
			.required("El campo es requerido")
			.matches(/^(?! )[A-Za-z\s]+$/, "El campo solo puede contener letras"),
		lastName: yup
			.string()
			.required("El campo es requerido")
			.matches(/^(?! )[A-Za-z\s]+$/, "El campo solo puede contener letras"),
		dni: yup.string().required("El campo es requerido"),
		email: yup.string().required("El campo es requerido").matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Correo inválido"),
		password: yup.string().required("El campo es requerido").matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}$/, "Contraseña inválida"),
		confirmPassword: yup
			.string()
			.required("El campo es requerido")
			.oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
		phone: yup.string().required("El campo es requerido"),
	})
	.required();

export default function SignupForm() {
	const {
		control,
		handleSubmit,
		formState: {errors},
		getValues,
	} = useForm({
		resolver: yupResolver(shema),
		defaultValues: {
			name: "",
			lastName: "",
			dni: "",
			email: "",
			password: "",
			confirmPassword: "",
			phone: "",
		},
	});

	const onSubmit = async (data: any) => {
		console.log(data);
	};

	return (
		<main className="w-full px-4 md:px-0 flex flex-col gap-8 items-center justify-center md:w-2/3 xl:w-1/2 mx-auto my-8">
			<h1 className="text-lg font-bold text-center">Crear cuenta</h1>
			<form className="w-full" onSubmit={handleSubmit(onSubmit)}>
				<div className="grid xl:grid-cols-2 gap-5 2xl:gap-x-16 2xl:gap-y-10">
					{/* Nombre */}
					<div>
						<Controller
							name="name"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="name"
									type="text"
									placeholder="Nombre*"
									wrapperClassName="mt-2.5"
									errorText={errors.name?.message}
								/>
							)}
						/>
					</div>
					{/* Apellido */}
					<div>
						<Controller
							name="lastName"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="lastName"
									type="text"
									placeholder="Apellido*"
									wrapperClassName="mt-2.5"
									errorText={errors.lastName?.message}
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
									placeholder="DNI*"
									wrapperClassName="mt-2.5"
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
									wrapperClassName="mt-2.5"
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
									wrapperClassName="mt-2.5"
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
									wrapperClassName="mt-2.5"
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
									wrapperClassName="mt-2.5"
									errorText={errors.phone?.message}
								/>
							)}
						/>
					</div>
					{/* Button */}
					<div>
						<button className="w-full p-5 rounded-lg text-black text-base font-bold bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary">
							Crear cuenta
						</button>
					</div>
				</div>
			</form>
		</main>
	);
}
