import AcountInfo from "@/components/dashboard/accountInfo/AcountInfo";
import Activity from "@/components/dashboard/activity/Activity";
import AddMoneyAndPay from "@/components/dashboard/addMoneyAndPay/AddMoneyAndPay";
import { getAcountInfo } from "@/services/acountInfo";
import { getActivity } from "@/services/activity";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function DashboardPage() {
	const token = getTokenFromCookie();
	const accountInfo = await getAcountInfo(token);
	const activities = await getActivity(accountInfo.id, token);

	// Mostar solo las primeras 10 primeras actividades
	const activitiesShowByOrder = activities.toReversed().slice(0, 10);

	return (
		<>
			<AcountInfo amount={accountInfo.available_amount} />
			<AddMoneyAndPay />
			<Activity
				activityList={activitiesShowByOrder}
				showMoreActivity
			/>
		</>
	);
}
