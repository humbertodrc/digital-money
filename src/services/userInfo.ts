import {httpGet} from "./common/http";

export async function getUserInfo(id: number, token: string, options = {}): Promise<any> {
	return httpGet(`/users/${id}`, token, {
		headers: {
      "Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.log(error);
			throw error;
		});
}