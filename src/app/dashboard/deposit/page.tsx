import ArrowRight from "@/components/common/Icons/ArrowRight";
import CardsIcon from "@/components/common/Icons/CardsIcon";
import ProfileIcon from "@/components/common/Icons/ProfileIcon";
import Link from "next/link";

export default function DepositPage() {
	return (
		<>
			<Link
				href="/dashboard/deposit/bank"
				className="w-full py-16 px-9  rounded-xl bg-black-primary shadow-md md:p-15 flex items-center justify-between"
			>
				<div className="flex flex-row gap-5 items-center">
					<ProfileIcon className="text-primary" />
					<h2 className="text-primary text-lg font-semibold md:text-lg">
						Transferencia bancaria
					</h2>
        </div>
        <ArrowRight className="fill-primary" />
			</Link>
			<Link
				href="/dashboard/deposit/card"
				className="w-full py-16 px-9  rounded-xl bg-black-primary shadow-md md:p-15 flex items-center justify-between"
			>
				<div className="flex flex-row gap-5 items-center">
					<CardsIcon className="text-primary" />
					<h2 className="text-primary text-lg font-semibold md:text-lg">
						Deposito con tarjeta
					</h2>
        </div>
        <ArrowRight className="fill-primary" />
			</Link>
		</>
	);
}
