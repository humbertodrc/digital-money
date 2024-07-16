export default function SignupForm() {
	return (
		<main className="w-full px-4 md:px-0 flex flex-col gap-8 items-center justify-center md:w-2/3 xl:w-1/2 mx-auto my-8">
			<h1 className="text-lg font-bold text-center">Crear cuenta</h1>
			<form className="w-full">
				<div className="grid xl:grid-cols-2 gap-5 2xl:gap-x-16 2xl:gap-y-10">
					{/* Nombre */}
					<div>
						<input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Nombre*"
							type="text"
							id="name"
						/>
					</div>
					{/* Apellido */}
					<div>
						<input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Apellido*"
							type="text"
							id="lastName"
						/>
					</div>
					{/* DNI */}
					<div>
						<input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="DNI*"
							type="text"
							id="dni"
						/>
					</div>
					{/* Correo */}
					<div>
						<input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Correo*"
							type="email"
							id="email"
						/>
					</div>
				</div>
				{/* Message contraseña */}
				<div className="w-full my-5">
					<p className="text-sm xl:text-[15px] font-normal text-tertiary">
						Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
						carácter especial, una mayúscula y un número
					</p>
				</div>
				<div className="grid xl:grid-cols-2 gap-5 2xl:gap-x-16 2xl:gap-y-10">
					{/* Contraseña */}
					<div>
						<input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Contraseña*"
							type="password"
							id="password"
						/>
					</div>
					{/* Confirmar contraseña */}
					<div>
						<input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Confirmar contraseña*"
							type="password"
							id="confirmPassword"
						/>
					</div>
					{/* Telefono */}
					<div>
						<input
							className="w-full p-5 rounded-lg text-black text-base focus:outline-2 focus:outline-primary "
							placeholder="Teléfono*"
							type="text"
							id="phone"
						/>
					</div>
					{/* Button */}
					<div>
						<button className="w-full p-5 rounded-lg text-black text-base font-bold bg-primary hover:bg-primary-dark focus:outline-2 focus:outline-primary">
							Crear cuenta
						</button>
					</div>
				</div>
			</form>
		</main>
	);
}
