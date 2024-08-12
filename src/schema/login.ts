import * as yup from "yup";

export const shemaEmail = yup
	.object({
		email: yup
			.string()
			.required("El campo es requerido")
			.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Correo inválido"),
	})
	.required();

export const shemaPassword = yup
	.object({
		password: yup
			.string()
			.required("El campo es requerido")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}$/,
				"Contraseña inválida"
			),
	})
	.required();

