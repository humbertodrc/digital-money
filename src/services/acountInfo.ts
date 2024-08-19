import {httpGet} from "./common/http";

export async function getAcountInfo(endpoint: string, token: any, options = {}): Promise<any> {
	return httpGet(endpoint, token, {
		headers: {
      "Content-Type": "application/json",
      Authorization: token,
		},
		...options,
	})
		.then((data) => data as any)
		.catch((error) => {
			console.log(error);
			throw error;
		});
}

