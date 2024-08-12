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
			// Si el registro es exitoso, seteamos la cookie de registro exitoso
			setCookieRegisterSuccess();
			return data as PostSignupResponse
		})
		.catch((error) => {
			console.log(error);
			throw error;
		});
}
