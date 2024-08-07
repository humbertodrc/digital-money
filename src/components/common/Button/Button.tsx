import clsx from "clsx";
import Link from "next/link";

interface ButtonProps {
	children: React.ReactNode;
	className?: string;
	href?: string;
	asLink?: boolean;
}

export default function Button({
	children,
	className,
	href,
	asLink = false,
	...props
}: ButtonProps) {
	if (asLink && href) {
		return (
			<Link
				href={href}
				className={clsx(
					"w-full p-5 rounded-lg text-black text-base font-bold text-center",
					className
				)}
			>
				{children}
			</Link>
		);
	}

	return (
		<button
			{...props}
			className={clsx(
				"w-full p-5 rounded-lg text-black text-base font-bold text-center",
				className
			)}
		>
			{children}
		</button>
	);
}
