import {Service} from "@/interfaces/service";

export async function getService(): Promise<Service[]> {
	return fetch(`https://digitalmoney.digitalhouse.com/service`)
		.then((response) => response.json())
		.then((data) => data)
		.catch((error) => {
			throw error;
		});
}
