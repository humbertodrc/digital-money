import LoginForm from "@/app/components/auth/loginForm/LoginForm";
import Header from "@/app/components/layout/header/Header";
import { cookies } from 'next/headers';

export default function LoginPage() {
  const signupSuccess = cookies().get("signupSuccess");
  return (
    <>
      <Header logoLink="/" headerClassName="bg-primary" logoClassName="fill-black" />
      <LoginForm isSignupSuccess={signupSuccess} />
    </>
  );
}