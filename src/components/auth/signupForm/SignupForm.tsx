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
		email: yup.string().required("El campo es requerido"),
		password: yup.string().required("El campo es requerido"),
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
						{/* <input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Nombre*"
							type="text"
							id="name"
						/> */}
						<Controller
							name="name"
							control={control}
							// rules={{
							// 	required: {
							// 		value: true,
							// 		message: "El campo es requerido",
							// 	},
							// 	pattern: {
							// 		value: /^(?! )[A-Za-z\s]+$/,
							// 		message: "El campo solo puede contener letras",
							// 	},
							// }}
							render={({field}) => (
								<TextInput
									{...field}
									id="name"
									type="text"
									wrapperClassName="mt-2.5"
									errorText={errors.name?.message}
								/>
							)}
						/>
					</div>
					{/* Apellido */}
					<div>
						{/* <input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Apellido*"
							type="text"
							id="lastName"
						/> */}
						<Controller
							name="lastName"
							control={control}
							// rules={{
							// 	required: {
							// 		value: true,
							// 		message: "El campo es requerido",
							// 	},
							// 	pattern: {
							// 		value: /^(?! )[A-Za-z\s]+$/,
							// 		message: "El campo solo puede contener letras",
							// 	},
							// }}
							render={({field}) => (
								<TextInput
									{...field}
									id="lastName"
									type="text"
									wrapperClassName="mt-2.5"
									errorText={errors.lastName?.message}
								/>
							)}
						/>
					</div>
					{/* DNI */}
					<div>
						{/* <input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="DNI*"
							type="text"
							id="dni"
						/> */}
						<Controller
							name="dni"
							control={control}
							// rules={{
							// 	required: {
							// 		value: true,
							// 		message: "El campo es requerido",
							// 	},
							// 	// pattern: {
							// 	// 	value: /^[0-9]{8,8}$/,
							// 	// 	message: "El DNI debe tener 8 dígitos",
							// 	// },
							// }}
							render={({field}) => (
								<TextInput
									{...field}
									id="dni"
									wrapperClassName="mt-2.5"
									errorText={errors.dni?.message}
								/>
							)}
						/>
					</div>
					{/* Correo */}
					<div>
						{/* <input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Correo*"
							type="email"
							id="email"
						/> */}
						<Controller
							name="email"
							control={control}
							// rules={{
							// 	required: {
							// 		value: true,
							// 		message: "El campo es requerido",
							// 	},
							// 	// pattern: {
							// 	// 	value: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
							// 	// 	message: "El correo no es válido",
							// 	// },
							// }}
							render={({field}) => (
								<TextInput
									{...field}
									id="email"
									type="email"
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
						{/* <input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Contraseña*"
							type="password"
							id="password"
						/> */}
						<Controller
							name="password"
							control={control}
							// rules={{
							// 	required: {
							// 		value: true,
							// 		message: "El campo es requerido",
							// 	},
							// 	// minLength: {
							// 	// 	value: 6,
							// 	// 	message: "La contraseña debe tener al menos 6 caracteres",
							// 	// },
							// 	// maxLength: {
							// 	// 	value: 20,
							// 	// 	message: "La contraseña debe tener máximo 20 caracteres",
							// 	// },
							// 	// pattern: {
							// 	// 	value: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$/,
							// 	// 	message:
							// 	// 		"La contraseña debe tener al menos 1 carácter especial, una mayúscula y un número",
							// 	// },
							// }}
							render={({field}) => (
								<TextInput
									{...field}
									id="password"
									type="password"
									wrapperClassName="mt-2.5"
									errorText={errors.password?.message}
								/>
							)}
						/>
					</div>
					{/* Confirmar contraseña */}
					<div>
						{/* <input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Confirmar contraseña*"
							type="password"
							id="confirmPassword"
						/> */}
						<Controller
							name="confirmPassword"
							control={control}
							// rules={{
							// 	required: {
							// 		value: true,
							// 		message: "El campo es requerido",
							// 	},
							// 	validate: (value) =>
							// 		value === getValues("password") ||
							// 		"Las contraseñas no coinciden",
							// }}
							render={({field}) => (
								<TextInput
									{...field}
									id="confirmPassword"
									type="password"
									wrapperClassName="mt-2.5"
									errorText={errors.confirmPassword?.message}
								/>
							)}
						/>
					</div>
					{/* Telefono */}
					<div>
						{/* <input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Teléfono*"
							type="text"
							id="phone"
						/> */}
						<Controller
							name="phone"
							control={control}
							// rules={{
							// 	required: {
							// 		value: true,
							// 		message: "El campo es requerido",
							// 	},
							// 	// pattern: {
							// 	// 	value: /^[0-9]{9,9}$/,
							// 	// 	message: "El teléfono debe tener 9 dígitos",
							// 	// },
							// }}
							render={({field}) => (
								<TextInput
									{...field}
									id="phone"
									type="text"
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
