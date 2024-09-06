import AccountAndAlias from "@/components/dashboard/accountAndAlias/AccountAndAlias";
import { getAcountInfo } from "@/services/acountInfo";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function DepositBankPage() {

  const token = getTokenFromCookie();
	const accountInfo = await getAcountInfo(token);

  return (
    <div className="w-full">
      <AccountAndAlias accountInfo={accountInfo} />
    </div>
  )
}