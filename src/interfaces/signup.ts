export interface SignupData {
	dni: string,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string,
  phone: string,
}

export interface PostSignupBody {
	dni: number,
  email: string,
  firstname: string,
  lastname: string,
  password: string,
  confirmPassword: string,
  phone: string,
}

export interface PostSignupResponse {
	account_id: number;
	email: string;
	user_id: number;
}
