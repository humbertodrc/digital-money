import {httpGet} from "./common/http";

export async function getActivity(id: number, token: string, options = {}): Promise<any> {
	return httpGet(`/accounts/${id}/activity`, token, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}
