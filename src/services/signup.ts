import {PostSignupBody, PostSignupResponse} from "@/interfaces/signup";
import {httpPost} from "./common/http";
import { setCookieRegisterSuccess } from "@/utils/cookie";

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
		.then((data) => {
			return data as PostSignupResponse
		})
		.catch((error) => {
			console.log(error);
			throw error;
		});
}
