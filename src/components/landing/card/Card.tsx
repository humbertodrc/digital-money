interface CardProps {
	title: string;
	description: string;
}

export default function Card({title, description}: CardProps) {
	return (
		<div className="w-full p-5 bg-white rounded-xl text-black flex flex-col gap-2 md:p-7 md:gap-5 xl:w-[500px]">
			<h3 className="pb-2 font-bold text-xl border-b-2 border-primary md:text-2xl xl:text-3xl">
				{title}
			</h3>
			<p className="text-sm md:text-base xl:text-lg text-balance">
				{description}
			</p>
		</div>
	);
}
