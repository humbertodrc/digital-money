'use client';
import Button from "@/components/common/button/Button";
import EditIcon from "@/components/common/Icons/EditIcon";
import {formatAmount} from "@/utils/formatAmount";
import {useFormContext} from "react-hook-form";

interface CheckDepositProps {
  cvu: string;
  handleBackStep: () => void;
}

export default function CheckDeposit({cvu, handleBackStep}: CheckDepositProps) {
	const {getValues} = useFormContext();

	return (
		<section className="w-full p-5 flex flex-col gap-9 rounded-lg bg-black-primary shadow-md md:p-10 xl:pt-10 xl:pl-16 xl:pr-11 xl:pb-11">
			<h2 className="text-lg text-primary font-semibold">
				Revisá que todo este bien
			</h2>
			<div className="flex items-end justify-between">
				<div className="pb-7">
					<div className="mb-9">
						<div className="flex items-center gap-4 mb-2">
							<p className="font-normal text-base">Vas a transferir</p>
							<EditIcon className="cursor-pointer" onClick={handleBackStep} />
						</div>
						<p className="font-bold text-base">
							{formatAmount(getValues("amount"))}
						</p>
					</div>
					<div className="mb-6">
						<p className="font-normal text-base mb-2">Para</p>
						<p className="font-bold text-lg">Cuenta propia</p>
					</div>
					<div>
						<p className="font-normal text-base mb-2">Brubank</p>
						<p className="font-normal text-base">CVU {cvu}</p>
					</div>
				</div>
				<Button
					type="submit"
					className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-full xl:w-64">
					Continuar
				</Button>
			</div>
		</section>
	);
}
