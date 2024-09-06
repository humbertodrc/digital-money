"use client";
import TextInput from "@/components/common/textInput/TextInput";
import Card from "@/components/dashboard/card/Card";
import {schemaCard} from "@/schema";
import {postCards} from "@/services/cards";
import { convertDateFormat } from "@/utils/convertDateFormat";
import {yupResolver} from "@hookform/resolvers/yup";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import {Controller, useForm} from "react-hook-form";

interface FormCardProps {
  userId: number;
}


interface CardData {
	number: string;
	name: string;
	expiry: string;
	cvc: string;
}

export default function FormCard({ userId }: FormCardProps) {
	const router = useRouter();
	const {
		control,
		handleSubmit,
		formState: {errors, isValid},
		reset,
		watch,
	} = useForm({
		resolver: yupResolver(schemaCard),
		defaultValues: {
			number: "",
			name: "",
			expiry: "",
			cvc: "",
		},
		mode: "onChange",
	});


	const cardValues = watch();

  const onSubmit = async (data: CardData) => {
    const body = {
      expiration_date: convertDateFormat(data.expiry),
      first_last_name: data.name,
      number_id: Number(data.number),
      cod: Number(data.cvc),
    }

		await postCards(userId, body);
		reset();
		// llamar al endpoint de ravalidate
		await fetch("/api/revalidate");
		router.push("/dashboard/cards");
	};
	return (
		<div className="bg-white rounded-xl py-6 md:py-10 px-5 md:px-16 xl:py-12 xl:px-22 w-full text-black shadow-md flex items-center flex-col gap-7 xl:mt-12">
			<Card
				number={cardValues.number || ""}
				name={cardValues.name || ""}
				expiry={cardValues.expiry || ""}
				cvc={cardValues.cvc || ""}
			/>
			<form
				className="grid grid-cols-1 xl:grid-cols-2 xl:gap-x-16 xl:gap-y-10 w-full"
				onSubmit={handleSubmit(onSubmit)}
			>
				{/* Numero */}
				<div>
					<Controller
						name="number"
						control={control}
						render={({field}) => (
							<TextInput
								{...field}
								className="p-5 shadow-md border boder-[#D2FFEC] focus:border-[#D2FFEC] focus:outline-none focus:ring-2 focus:ring-[#D2FFEC]"
								id="number"
								type="text"
								noBorder
								placeholder="Número de la tarjeta*"
								wrapperClassName="w-full"
								errorText={errors.number?.message}
								maxLength={16}
							/>
						)}
					/>
				</div>
				{/* Fecha de Vencimiento */}
				<div>
					<Controller
						name="expiry"
						control={control}
						render={({field}) => (
							<TextInput
								{...field}
								className="p-5 shadow-md border boder-[#D2FFEC] focus:border-[#D2FFEC] focus:outline-none focus:ring-2 focus:ring-[#D2FFEC]"
								id="expiry"
								type="text"
								noBorder
								placeholder="Fecha de vencimiento*"
								wrapperClassName="w-full"
								errorText={errors.expiry?.message}
								maxLength={5}
							/>
						)}
					/>
				</div>
				{/* Nombre y Apellido */}
				<div>
					<Controller
						name="name"
						control={control}
						render={({field}) => (
							<TextInput
								{...field}
								className="p-5 shadow-md border boder-[#D2FFEC] focus:border-[#D2FFEC] focus:outline-none focus:ring-2 focus:ring-[#D2FFEC]"
								id="name"
								type="text"
								noBorder
								placeholder="Nombre y apellido*"
								wrapperClassName="w-full"
								errorText={errors.name?.message}
							/>
						)}
					/>
				</div>
				{/* CVC */}
				<div>
					<Controller
						name="cvc"
						control={control}
						render={({field}) => (
							<TextInput
								{...field}
								className="p-5 shadow-md border boder-[#D2FFEC] focus:border-[#D2FFEC] focus:outline-none focus:ring-2 focus:ring-[#D2FFEC]"
								id="cvc"
								type="text"
								noBorder
								placeholder="CVC*"
								wrapperClassName="w-full"
								errorText={errors.cvc?.message}
								maxLength={3}
							/>
						)}
					/>
				</div>
				<button
					type="submit"
					disabled={!isValid}
					className={clsx(
						"w-full text-black rounded-lg py-3 font-bold shadow-md col-end-3",
						{
							"bg-primary": isValid,
							"bg-gray": !isValid,
						}
					)}
				>
					Continuar
				</button>
			</form>
		</div>
	);
}
