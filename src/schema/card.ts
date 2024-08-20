import * as yup from "yup";

export const schemaCard = yup
	.object({
		number: yup
			.string()
			.min(16, "Minimo 16 números")
			.max(16, "Maximo 16 números")
			.required("El campo es requerido"),
		name: yup.string().required("El campo es requerido"),
		expiry: yup
			.string()
			.min(5, "Minimo 5 caracteres")
			.max(5, "Maximo 5 caracteres")
			.required()
			.matches(/^(0[1-9]|1[0-2])\/\d{2}$/, "Invalid date"),
    cvc: yup.string()
      .min(3, "Minimo 3 caracteres")
      .max(3, "Maximo 3 caracteres")
      .required("El campo es requerido"),
	})
	.required();
