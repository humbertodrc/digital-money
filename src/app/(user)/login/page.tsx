import LoginForm from "@/components/auth/loginForm/LoginForm";
import Header from "@/components/layout/header/Header";
import { cookies } from 'next/headers'

export default function LoginPage() {
  const signupSuccess = cookies().get("signupSuccess");
  console.log(signupSuccess);
  return (
    <>
      <Header logoLink="/" headerClassName="bg-primary" logoClassName="fill-black" />
      <LoginForm isSignupSuccess={signupSuccess} />
    </>
  );
}