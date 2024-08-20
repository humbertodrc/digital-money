import ArrowRight from "@/components/common/Icons/ArrowRight";
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

	return (
		<>
			<h1 className={"self-start text-black font-semibold"}>Tu perfil</h1>
			<ProfileInfo profileInfo={profileInfo} />
			<div className="w-full py-5 bg-primary rounded-md text-black font-bold shadow-md pl-8 pr-14 pt-11 pb-12 flex items-center justify-between">
				<Link href="/dashboard/cards">Gestionar los medios de pago</Link>
				<ArrowRight />
			</div>
			{/* <AccountsInfo/> */}
		</>
	);
}
