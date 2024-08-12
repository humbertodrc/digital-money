export interface UserData {
  email: string;
  password?: string;
}


export interface Cookie {
  name: string;
  value: string;
}

export interface LoginFormProps {
  isSignupSuccess: Cookie | undefined;
}