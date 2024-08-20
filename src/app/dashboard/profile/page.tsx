import ArrowRight from "@/components/common/Icons/ArrowRight";
import AccountAndAlias from "@/components/dashboard/accountAndAlias/AccountAndAlias";
import ProfileInfo from "@/components/dashboard/profileInfo/ProfileInfo";
import Link from "next/link";

export default function ProfilePage() {
	const profileInfo = {
		id: 19,
		firstname: "Daniel",
		lastname: "Rivero",
		dni: 95794558,
		email: "humberto.rivero@digitalhouse.com",
		phone: "1149458678",
	};

	const accountInfo = {
		id: 15,
		user_id: 19,
		cvu: "50257992909156335",
		alias: "PLANTA.ASADO.ARBOL",
		available_amount: 54700,
	};

	return (
		<>
			<h1 className={"self-start text-black font-semibold"}>Tu perfil</h1>
			<ProfileInfo profileInfo={profileInfo} />
			<div className="w-full py-5 bg-primary rounded-md text-black font-bold shadow-md pl-8 pr-14 pt-11 pb-12 flex items-center justify-between">
				<Link
					href="/dashboard/cards"
					className="flex items-center justify-between w-full"
				>
					<span>Gestionar los medios de pago</span>
					<ArrowRight />
				</Link>
			</div>
			<AccountAndAlias accountInfo={accountInfo} />
		</>
	);
}
