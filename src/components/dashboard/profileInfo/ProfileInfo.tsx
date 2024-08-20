"use client";
import PencilIcon from "@/components/common/Icons/PencilIcon";
import TextInput from "@/components/common/TextInput";
import {profileDictionary} from "@/constants/profileDictionary";
import {Profile} from "@/interfaces/profile";
import {sortKeyProfile} from "@/utils/sortKeyProfile";
import clsx from "clsx";
import {KeyboardEvent, useEffect, useState} from "react";
import {Controller, useForm} from "react-hook-form";

interface ProfileInfoProps {
	profileInfo: Profile;
}

interface Editing {
	key: string;
	value: string | number;
}

export default function ProfileInfo({ profileInfo }: ProfileInfoProps) {
	// Estado para saber si se está editando un campo
	const [editing, setEditing] = useState<Editing>({
		key: "",
		value: "",
	});
	// Hook de react-hook-form
	const {
		control,
		handleSubmit,
		formState: {errors},
		reset,
	} = useForm({
		mode: "onBlur",
	});

	// Normalizar los datos del perfil
	const profileInfoNormalized = sortKeyProfile(profileInfo);

	// Función para manejar la edición de un campo
	const handleEdit = (key: string) => {
		if (editing.key === key) {
			setEditing({
				key: "",
				value: "",
			});
		} else {
			setEditing({
				key,
				value: profileInfoNormalized[key],
			});
		}
	};

	const onSubmit = (data: any) => {
		console.log(data);
		// Actualizar el valor en el estado profileInfoNormalized
		profileInfoNormalized[editing.key] = data[editing.key];
		// Resetear el estado de edición
		setEditing({key: "", value: ""});
	};

	// LLamar a la función onSubmit con los datos del formulario cuando se toca la tecla Enter
	const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			handleSubmit(onSubmit)();
		}
	};

	useEffect(() => {
		reset(profileInfoNormalized); // Resetea el formulario con los valores iniciales
	}, [profileInfo]);


	return (
		<section className="w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15">
			<h2 className="text-lg font-bold">Tus datos</h2>
			<form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
				{Object.entries(profileInfoNormalized).map(([key, value]) => {
					return (
						<div
							key={key}
							className="w-full pb-2 border-b border-gray flex justify-between items-center"
						>
							<div className="flex flex-col md:flex-row md:gap-5 w-full">
								<h3 className="w-1/4 font-semibold">{key}</h3>
								{/* TODO input */}
								<Controller
									defaultValue={""}
									name={key}
									control={control}
									render={({field}) => (
										<TextInput
											{...field}
											id={key}
											type="text"
											value={field.value}
											onKeyDown={handleKeyDown}
											wrapperClassName="w-2/5"
											noBorder={true}
											className={clsx({
												"text-opacity-50": editing.key !== key,
											})}
											errorText={errors[key]?.message}
											disabled={!editing || editing.key !== key}
										/>
									)}
								/>
							</div>
							<div className="w-6">
								{key.toLocaleLowerCase() !==
									profileDictionary.email.toLocaleLowerCase() && (
									<PencilIcon
										className="cursor-pointer"
										onClick={() => handleEdit(key)}
									/>
								)}
							</div>
						</div>
					);
				})}
				<div className="w-full pb-2 border-b border-gray flex justify-between items-center">
					<div className="flex flex-col md:flex-row md:gap-5 w-full">
						<h3 className="w-1/4 font-semibold">Contraseña</h3>
						{editing.key === "password" ? (
							<Controller
							defaultValue={""}
							name="password"
							control={control}
							render={({field}) => (
								<TextInput
									{...field}
									id="password"
									type="password"
									value={field.value}
									onKeyDown={handleKeyDown}
									placeholder="********"
									noBorder={true}
									wrapperClassName="w-2/5"
									className={clsx({
										"placeholder-black": editing.key == "password",
									})}
									errorText={errors.password?.message}
									disabled={!editing || editing.key !== "password"}
								/>
							)}
						/>
						) : (
								<span className="text-black text-opacity-50">********</span>
						)}
					</div>
					<div className="w-6">
						<PencilIcon
							className="cursor-pointer"
							onClick={() => handleEdit("password")}
						/>
					</div>
				</div>
			</form>
		</section>
	);
}
