import Button from "@/components/common/button/Button";
import TextInput from "@/components/common/textInput/TextInput";
import {Controller, useFormContext} from "react-hook-form";

interface SelectAccountPaymentProps {
  handleNextStep: () => void;
}

const ACCOUNT = "12345678901";

export default function SelectAccountPayment({handleNextStep}: SelectAccountPaymentProps) {
	const {control, getValues} = useFormContext();

	const onNextStep = () => {
    // Validar el numero que por ahora es hardcodeado
    const { accountNumber } = getValues();
    if (accountNumber !== ACCOUNT) {
      return;
    }

    handleNextStep();

	};

	return (
		<section className="w-full pt-10 pl-14 pr-11 pb-11 flex flex-col rounded-lg bg-black-primary shadow-md">
			<h2 className="text-xl text-primary font-semibold">
      Número de cuenta sin el primer 2
			</h2>
			<div className="w-[475px] p-5 rounded-lg bg-white text-black mt-11">
				<Controller
					name="accountNumber"
          control={control}
					render={({field}) => (
						<TextInput
							{...field}
							type="number"
							wrapperClassName="w-full"
              className="bg-transparent text-md text-black/50 font-normal"
              maxLength={11}
              noBorder
						/>
					)}
				/>
      </div>
      <p className="text-xs mt-3 font-normal">Son 11 números sin espacios, sin el “2” inicial. Agregá ceros adelante si tenés menos. </p>
			<div className="mt-9 w-full flex justify-end">
        <Button
          type="button"
					onClick={onNextStep}
					className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-full xl:w-60"
				>
					Continuar
				</Button>
			</div>
		</section>
	);
}
