import SignupForm from "@/app/components/auth/signupForm/SignupForm";
import Header from "@/app/components/layout/header/Header";

const links = [
	{href: "/login", text: "Iniciar sesión", solid: true},
];

export default function SignupPage() {
  return (
    <>
      <Header logoLink="/" headerClassName="bg-primary" logoClassName="fill-black" links={links} />
      <SignupForm />
    </>
  );
}