import {httpPost} from "./common/http";

interface PostLoginBody {
	email: string;
	password: string;
}

interface PostLoginResponse {
	token: string;
	error?: string;
}

export async function postLogin(
	body: PostLoginBody,
	options = {}
): Promise<PostLoginResponse> {
	return httpPost("/login", body, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then(data => data as PostLoginResponse)
		.catch((error) => {
			console.error(error);
			throw error;
		});
}
