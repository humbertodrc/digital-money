import Link from "next/link";

export default function AddMoneyAndPay() {
  return (
    <div className={"w-full flex flex-col gap-5 xl:flex-row"}>
        <Link href="dashboard/deposit" className="w-full py-5 bg-primary rounded-md text-black-primary text-center font-semibold shadow-md">Ingresar dinero</Link>
        <Link href="/dashboard/payment" className="w-full py-5 bg-primary rounded-md text-black-primary text-center font-semibold shadow-md">Pago de servicios</Link>
      </div>
  )
}