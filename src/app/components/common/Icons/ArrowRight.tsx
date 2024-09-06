interface ArrowRightProps {
  className?: string;
}

export default function ArrowRight({ className }: ArrowRightProps) {
	return (
		<svg
			width="22"
			height="23"
			viewBox="0 0 22 23"
			fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
		>
			<path
				d="M2 10C1.17157 10 0.5 10.6716 0.5 11.5C0.5 12.3284 1.17157 13 2 13L2 10ZM21.0607 12.5607C21.6464 11.9749 21.6464 11.0251 21.0607 10.4393L11.5147 0.893397C10.9289 0.307611 9.97918 0.307611 9.3934 0.893398C8.80761 1.47918 8.80761 2.42893 9.3934 3.01472L17.8787 11.5L9.3934 19.9853C8.80761 20.5711 8.80761 21.5208 9.3934 22.1066C9.97919 22.6924 10.9289 22.6924 11.5147 22.1066L21.0607 12.5607ZM2 13L20 13L20 10L2 10L2 13Z"
			/>
		</svg>
	);
}
