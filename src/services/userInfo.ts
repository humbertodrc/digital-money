import {httpGetRevalidate, httpPatch} from "./common/http";

export async function getUserInfo(id: number, token: string, revalidateTag = "", options = {}): Promise<any> {
	return httpGetRevalidate(`/users/${id}`, token, revalidateTag, {
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


export async function patchUserInfo(id: number, body: any, options = {}): Promise<any> {
	return httpPatch(`/users/${id}`,body, {
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