import * as yup from "yup";

export const shema = yup
	.object({
		firstname: yup
			.string()
      .required("El campo es requerido")
      .min(3, "El campo debe tener al menos 3 caracteres")
			.matches(/^(?! )[A-Za-z\s]+$/, "El campo solo puede contener letras"),
		lastname: yup
			.string()
      .required("El campo es requerido")
      .min(3, "El campo debe tener al menos 3 caracteres")
			.matches(/^(?! )[A-Za-z\s]+$/, "El campo solo puede contener letras"),
    dni: yup
      .string()
      .required("El campo es requerido")
      .matches(/^[0-9]{8}$/, "DNI inválido"),
		email: yup
			.string()
			.required("El campo es requerido")
			.matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Correo inválido"),
		password: yup
			.string()
			.required("El campo es requerido")
			.matches(
				/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{6,20}$/,
				"Contraseña inválida"
			),
		confirmPassword: yup
			.string()
			.required("El campo es requerido")
			.oneOf([yup.ref("password")], "Las contraseñas no coinciden"),
		phone: yup.string().required("El campo es requerido"),
	})
	.required();
