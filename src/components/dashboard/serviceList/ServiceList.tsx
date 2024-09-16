import { Service } from "@/interfaces/service";
import ServiceItem from "../serviceItem/ServiceItem";

interface ServiceListProps {
	services: Service[];
}

export default function ServiceList({services}: ServiceListProps) {
  return (
    <ul className="flex flex-col gap-5">
      {services.map((service) => (
        <ServiceItem key={service.id} service={service} />
      ))}
    </ul>
  )
}
