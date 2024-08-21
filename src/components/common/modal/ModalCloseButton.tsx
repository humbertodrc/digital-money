import clsx from "clsx";

interface ModalCloseButtonProps {
	className?: string;
	onClick: (value: boolean) => void;
	width?: number;
	height?: number;
}

export default function ModalCloseButton({
	className,
	onClick,
	width = 14,
	height = 14,
}: ModalCloseButtonProps) {
	return (
		<button
			className={clsx("p-2 transition hover:opacity-75", className)}
			type="button"
			onClick={() => onClick(false)}
		>
			<svg
				width={width}
				height={height}
				viewBox="0 0 14 14"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				aria-label="Cerrar"
			>
				<path
					d="M7.02299 7.9522L2.1954 12.7706C2.04215 12.9235 1.87739 13 1.70115 13C1.5249 13 1.36782 12.9235 1.22989 12.7706C1.07663 12.6329 1 12.4761 1 12.3002C1 12.1243 1.07663 11.9675 1.22989 11.8298L6.08046 6.98853L1.2069 2.14723C1.06897 2.00956 1 1.85277 1 1.67686C1 1.50096 1.06897 1.34417 1.2069 1.2065C1.34483 1.06883 1.50192 1 1.67816 1C1.85441 1 2.01916 1.06883 2.17241 1.2065L7 6.02486L11.8276 1.2065C11.9655 1.06883 12.1226 1 12.2989 1C12.4751 1 12.6398 1.06883 12.7931 1.2065C12.931 1.35947 13 1.52772 13 1.71128C13 1.89484 12.931 2.05545 12.7931 2.19312L7.96552 7.01147L12.7931 11.8528C12.931 11.9904 13 12.1472 13 12.3231C13 12.499 12.931 12.6558 12.7931 12.7935C12.6552 12.9312 12.4981 13 12.3218 13C12.1456 13 11.9962 12.9312 11.8736 12.7935L7.02299 7.9522Z"
					fill="currentColor"
					stroke="currentColor"
				/>
			</svg>
		</button>
	);
}
