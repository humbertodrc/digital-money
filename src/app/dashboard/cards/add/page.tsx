import FormCard from "@/components/dashboard/formCard/FormCard";
import { getAcountInfo } from "@/services/acountInfo";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function AddCardPage() {
	const token = getTokenFromCookie();
	const accountInfo = await getAcountInfo(token);
	
	return (
		<>
			<FormCard userId={accountInfo.id} />
		</>
	);
}
