import AcountInfo from "@/components/dashboard/accountInfo/AcountInfo";

export default async function DashboardPage() {
	// TODO: Get account info from API
	const accountInfo = {
		available_amount: 1000,
	};

	return (
		<>
			<AcountInfo amount={accountInfo.available_amount} />
			{/* AddMoney and PayServices */}
			{/* Activity */}
		</>
	);
}
