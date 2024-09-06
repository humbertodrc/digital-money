import ArrowRight from "@/components/common/Icons/ArrowRight";
import AccountAndAlias from "@/components/dashboard/accountAndAlias/AccountAndAlias";
import ProfileInfo from "@/components/dashboard/profileInfo/ProfileInfo";
import { getAcountInfo } from "@/services/acountInfo";
import { getUserInfo } from "@/services/userInfo";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";
import Link from "next/link";

export default async function ProfilePage() {
	const token = getTokenFromCookie();
	const accountInfo = await getAcountInfo(token);
	const profileInfo = await getUserInfo(accountInfo.user_id, token, "user-info");

	return (
		<>
			<ProfileInfo profileInfo={profileInfo} token={token}  />
			<div className="w-full py-5 bg-primary rounded-md text-black font-bold shadow-md pl-8 pr-14 pt-11 pb-12 flex items-center justify-between">
				<Link
					href="/dashboard/cards"
					className="flex items-center justify-between w-full"
				>
					<span>Gestionar los medios de pago</span>
					<ArrowRight className="fill-secondary" />
				</Link>
			</div>
			<AccountAndAlias accountInfo={accountInfo} />
		</>
	);
}
