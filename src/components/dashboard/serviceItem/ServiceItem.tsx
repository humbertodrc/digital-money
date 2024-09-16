import {SERVICE} from "@/constants/service";
import {Service} from "@/interfaces/service";
import Image from "next/image";
import Link from "next/link";

interface ServiceItemProps {
	service: Service;
}

export default function ServiceItem({service}: ServiceItemProps) {
	return (
		<li className="w-full pb-5 flex flex-row justify-between items-center border-b border-gray">
			<div className="flex gap-8">
				<Image
					className={"min-h-full max-h-full object-contain"}
					src={SERVICE[service.id as keyof typeof SERVICE].src}
					alt={SERVICE[service.id as keyof typeof SERVICE].alt}
					width={80}
					height={25}
				/>
				<span>{service.name}</span>
			</div>
			<Link
				className="text-base font-bold"
				href={`/dashboard/payment/${service.id}`}
			>
				Seleccionar
			</Link>
		</li>
	);
}
