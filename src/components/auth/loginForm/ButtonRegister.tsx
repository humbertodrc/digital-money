'use client';
import Button from "../../common/button/Button";


export default function ButtonRegister() {
	return (
		<Button
			asLink
			href="/signup"
			className="text-black bg-gray hover:bg-tertiary mt-8 w-full"
		>
			Crear cuenta
		</Button>
	);
}
