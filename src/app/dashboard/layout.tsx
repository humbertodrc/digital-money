import ExpireModal from "@/components/common/modal/ExpireModal";
import Navbar from "@/components/dashboard/navbar/Navbar";
import Header from "@/components/layout/header/Header";
import { getAcountInfo } from "@/services/acountInfo";
import { getUserInfo } from "@/services/userInfo";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export const metadata = {
	title: "Dashboard",
	description: "Digital Money Dashboard",
};

export default async function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
	}) {
	const token = getTokenFromCookie();
	const accountInfo = await getAcountInfo(token);
	console.log(accountInfo);
	const userInfo = await getUserInfo(accountInfo.user_id, token, "user-info");
	console.log(userInfo);
	
	return (
		<>
			<Header
				logoLink="/"
				logoClassName="fill-primary"
				userName={`${userInfo.firstname} ${userInfo.lastname}`}
			/>
			<div className="w-full h-full flex flex-row grow">
				<aside className="hidden w-1/3 md:block xl:w-1/4 bg-primary text-black-primary">
					<Navbar />
				</aside>
				<main className="w-full p-5 flex flex-col grow gap-5 items-center bg-tertiary-light md:p-10 xl:px-20">
					{children}
				</main>
			</div>
			<ExpireModal />
		</>
	);
}
