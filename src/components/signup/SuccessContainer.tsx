"use client";
import Button from "@/components/common/Button/Button";
import CheckIcon from "@/components/common/Icons/CheckIcon";
import Header from "@/components/layout/header/Header";

export default function SuccessContainer() {
	return (
		<>
			<Header
				logoLink="/"
				headerClassName="bg-primary"
				logoClassName="fill-black"
			/>
			<main className="w-full flex flex-col items-center gap-16">
				<div className="flex flex-col gap-8 items-center w-80 md:w-full max-w-xl">
					<h1 className="text-2xl lg:text-5xl font-normal">Registro Exitoso</h1>
					<CheckIcon />
					<p className="text-base font-normal text-center">
						Hemos enviado un correo de confirmación para validar tu email, por
						favor revisalo para iniciar sesión
					</p>
				</div>
				<Button
					asLink
					href="/login"
					className="bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary w-72 lg:w-[360px]"
				>
					Continuar
				</Button>
			</main>
		</>
	);
}
