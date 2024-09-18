import ContainerService from "@/components/dashboard/containerService/ContainerService";
import { getService } from "@/services/service";

export default async function PaymentPage() {
	const services = await getService();
	return (
		<>
			<ContainerService services={services} />
		</>
	);
}
