import ServiceList from "@/components/dashboard/serviceList/ServiceList";
import { getService } from "@/services/service";

export default async function PaymentPage() {

  const services = await getService();

  return (
    <section className="w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15">
      <h1 className="border-b border-gray pb-5 text-lg font-bold">Más recientes</h1>
      <ServiceList services={services} />
    </section>
  );
}