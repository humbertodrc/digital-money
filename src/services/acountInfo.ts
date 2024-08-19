import {httpGet} from "./common/http";

export async function getAcountInfo(token: string, options = {}): Promise<any> {
	return httpGet('/account', token, {
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

