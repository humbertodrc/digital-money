import Button from "../../common/button/Button";
import TextInput from "@/app/components/common/textInput/TextInput";
import {shemaPassword} from "@/schema/login";
import {yupResolver} from "@hookform/resolvers/yup";
import {Controller, useForm} from "react-hook-form";

interface Step2FormProps {
	onSubmit: (data: any) => void;
}

export default function Step2Form({onSubmit}: Step2FormProps) {
	const {
		control,
		handleSubmit,
		formState: {errors, isSubmitting},
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
							className="p-5"
							placeholder="Contraseña*"
							errorText={errors.password?.message}
						/>
					)}
				/>
				<Button
					type="submit"
					className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary flex items-center justify-center"
				>
					{isSubmitting ? (
						<>
							<svg
								className="animate-spin -ml-1 mr-3 h-8 w-8 text-white"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
							>
								<circle
									className="opacity-25"
									cx="12"
									cy="12"
									r="10"
									stroke="currentColor"
									strokeWidth="4"
								></circle>
								<path
									className="opacity-75"
									fill="currentColor"
									d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
								></path>
							</svg>
							<span className="ml-2">Enviando</span>
						</>
					) : (
						"Continuar"
					)}
				</Button>
			</form>
		</>
	);
}
