import Button from "@/components/common/button/Button";

interface AddAmountProps {
	handleNextStep2: (amount: number) => void;
}

export default function AddAmount({ handleNextStep2 }: AddAmountProps) {
  


	return (
		<>
			<section className="w-full pt-10 pl-14 pr-11 pb-11 flex flex-col rounded-lg bg-secondary shadow-md">
				<h2 className="text-xl text-primary font-semibold">
					¿Cuánto querés ingresar a la cuenta?
				</h2>
				<div className="w-[360px] p-5 flex flex-row gap-1 items-center rounded-lg bg-white text-black mt-11">
					<span className="text-md text-black/50">$</span>
					<input
						type="number"
						placeholder="0.00"
						className="w-full bg-transparent text-md text-black/50 font-normal"
					/>
        </div>
        <div className="mt-9 w-full flex justify-end">
        <Button
            onClick={() => handleNextStep2(250)}
						className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-full xl:w-60"
					>
						Continuar
					</Button>
        </div>
			</section>
		</>
	);
}
