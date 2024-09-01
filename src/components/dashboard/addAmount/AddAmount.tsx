import Button from "@/components/common/button/Button";
import TextInput from "@/components/common/textInput/TextInput";
import {useFormContext, Controller} from "react-hook-form";

interface AddAmountProps {
	handleNextStep: () => void;
}

export default function AddAmount({handleNextStep}: AddAmountProps) {
	const {control} = useFormContext();

	return (
		<>
			<section className="w-full pt-10 pl-14 pr-11 pb-11 flex flex-col rounded-lg bg-black-primary shadow-md">
				<h2 className="text-xl text-primary font-semibold">
					¿Cuánto querés ingresar a la cuenta?
				</h2>
				<div className="w-[360px] p-5 flex flex-row gap-2 items-center rounded-lg bg-white text-black mt-11">
					<span className="text-md text-black/50">$</span>
					<Controller
						name="amount"
						control={control}
						render={({field}) => (
							<TextInput
								{...field}
								type="number"
								placeholder="0.00"
								wrapperClassName="w-full"
								className="bg-transparent text-md text-black/50 font-normal"
							/>
						)}
					/>
				</div>
				<div className="mt-9 w-full flex justify-end">
					<Button
						onClick={handleNextStep}
						className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-full xl:w-60"
					>
						Continuar
					</Button>
				</div>
			</section>
		</>
	);
}
