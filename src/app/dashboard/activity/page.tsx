import Activity from "@/app/components/dashboard/activity/Activity";
import { getAcountInfo } from "@/services/acountInfo";
import { getActivity } from "@/services/activity";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function ActivityPage() {

  const token = getTokenFromCookie();
	const accountInfo = await getAcountInfo(token);
  const activities = await getActivity(accountInfo.id, token);
  
  const activitiesShowByOrder = activities.toReversed();

  return (
    <>
      <Activity
        activityList={activitiesShowByOrder}
        hasOptionsActivity
        hasPagination
      />
    </>
  );
}