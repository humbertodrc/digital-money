import {httpPost} from "./common/http";

interface PostSignupBody {
	dni: number,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string,
  phone: string,
}

interface PostSignupResponse {
	account_id: number;
	email: string;
	user_id: number;
}

export async function postSignup(
	body: PostSignupBody,
	options = {}
): Promise<PostSignupResponse> {
	return httpPost("/users", body, {
		headers: {
			"Content-Type": "application/json",
		},
		...options,
	})
		.then((data) => data as PostSignupResponse)
		.catch((error) => {
			console.log(error);
			throw error;
		});
}
