import SignupForm from "@/components/auth/signupForm/SignupForm";
import Header from "@/components/layout/header/Header";


export default function SuccessPage() {
  return (
    <>
      <Header logoLink="/" headerClassName="bg-primary" logoClassName="fill-black" />
      <h1>Registro Exitoso</h1>
    </>
  );
}