import DepositsCards from "@/components/dashboard/depositCards/DepositsCards";
import { getAcountInfo } from "@/services/acountInfo";
import { getCards } from "@/services/cards";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function DepositCardPage() {
  const token = getTokenFromCookie();
	const accountInfo = await getAcountInfo(token);
	const cards = await getCards(accountInfo.id, token);

  return (
    <>
      <DepositsCards cards={cards} userId={accountInfo.id} />
    </>
  )
}