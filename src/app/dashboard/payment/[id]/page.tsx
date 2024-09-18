import PaymentWrapper from "@/components/dashboard/paymentWrapper/PaymentWrapper";
import { getAcountInfo } from "@/services/acountInfo";
import { getCards } from "@/services/cards";
import { getServiceById } from "@/services/service";
import { getTokenFromCookie } from "@/utils/getTokenFromCookie";

export default async function PaymentServicePage({ params }: { params: { id: string } }) {
  
  const token = getTokenFromCookie();
  const accountInfoPromise = getAcountInfo(token);
  const servicePromise = getServiceById(params.id);

  const [accountInfo, service] = await Promise.all([accountInfoPromise, servicePromise]);
  const cardsPromise = await getCards(accountInfo.id, token);

  return (
    <PaymentWrapper
      service={service}
      accountInfo={accountInfo}
      cards={cardsPromise}
    />
  )
}