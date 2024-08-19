import AcountInfo from "@/components/dashboard/accountInfo/AcountInfo";
import Header from "@/components/layout/header/Header";
import { getAcountInfo } from "@/services/acountInfo";

export default async function DashboardPage() {
	
	// TODO: Get account info from API
	const accountInfo = {
		available_amount: 1000,
	}

	return (
		<>
			<Header logoLink="/" logoClassName="fill-primary" userName="Humberto Rivero" />
			<div className="w-full h-full flex flex-row grow">
				<aside className="hidden w-1/3 md:block xl:w-1/4 bg-primary text-black-primary">
					{/* <Navbar/> */}
				</aside>
				<main className="w-full p-5 flex flex-col grow gap-5 items-center bg-tertiary-light md:p-10 xl:px-20">
					<AcountInfo amount={accountInfo.available_amount} />
					{/* AddMoney and PayServices */}
					{/* Activity */}
				</main>
			</div>
		</>
	);
}
