'use client';
import Button from "../../common/button/Button";
import CheckIcon from "@/components/common/Icons/CheckIcon";
import {formatAmount} from "@/utils/formatAmount";
import {formatDate} from "@/utils/formatDate";
import {useRouter} from "next/navigation";
import {useFormContext} from "react-hook-form";

interface SuccessDepositProps {
	cvu: string;
}

export default function SuccessDeposit({cvu}: SuccessDepositProps) {
	const {getValues} = useFormContext();
	const date = new Date();
	const router = useRouter();

	const handleBackToDashboard = () => {
		router.push("/dashboard");
	};

	return (
		<section className="flex flex-col gap-5">
			<div className="w-full flex flex-col gap-3 items-center justify-center bg-primary py-4 rounded-lg">
				<CheckIcon className="fill-black" />
				<h2 className="text-xl text-black font-bold">
					Ya cargamos el dinero en tu cuenta
				</h2>
			</div>
			<div className="bg-black-primary p-5 xl:pt-9 xl:pl-16 xl:pb-11 rounded-lg">
				<div className="flex flex-col gap-2 mb-8">
					<p className="text-base font-normal">{formatDate(date)}</p>
					<span className="font-bold text-base text-primary">
						{formatAmount(getValues("amount"))}
					</span>
				</div>
				<div className="flex flex-col gap-2 mb-6">
					<p className="text-base font-normal">Para</p>
					<p className="font-bold text-lg text-primary">Cuenta propia</p>
				</div>
				<div className="flex flex-col gap-2">
					<p>Brubank</p>
					<p>CVU {cvu}</p>
				</div>
			</div>
			<div className="flex gap-5 justify-end">
				<Button
					type="button"
					className="bg-gray hover:bg-primary-dark focus:outline-2 focus:outline-grbg-gray w-full xl:w-60"
					onClick={handleBackToDashboard}
				>
					Volver al inicio
				</Button>
				<Button
					type="button"
					className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-full xl:w-60">
					Descargar comprobante
				</Button>
			</div>
		</section>
	);
}
