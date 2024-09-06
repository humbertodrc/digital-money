import { formatAmount } from "@/utils/formatAmount";
import Link from "next/link";

interface AcountInfoProps {
  amount: number;
}

export default function AcountInfo({ amount }: AcountInfoProps) {
  
  return (
    <section className="w-full p-5 flex flex-col gap-5 rounded-lg bg-black-primary shadow-md md:p-10 xl:pl-6 xl:pr-[60px] xl:pb-12 xl:pt-8">
      <div className="flex flex-row gap-5 self-end">
        <Link href="/dashboard/cards" className="border-b text-base">Ver tarjetas</Link>
        <Link href="/dashboard/deposit" className="border-b text-base">Ver CVU</Link>
      </div>
      <div className="flex flex-col gap-5">
        <h2 className="text-base font-semibold">Dinero disponible</h2>
        <span
          className="w-fit p-5 rounded-full border-2 border-primary text-[36px] font-bold">
          {formatAmount(amount)}
        </span>
      </div>
    </section>
  )
}