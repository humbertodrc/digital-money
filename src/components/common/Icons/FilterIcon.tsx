interface FilterIconProps {
  className?: string;
}

export default function FilterIcon({ className }: FilterIconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="17" height="13" fill="none" className={className}>
			<path stroke="#201F22" d="M0 9.7h17M17 2.767H0" />
			<circle cx="5.099" cy="9.633" r="2.333" fill="#C1FD35" stroke="#201F22" />
			<circle
				cx="11.901"
				cy="2.834"
				r="2.333"
				fill="#C1FD35"
				stroke="#201F22"
				transform="rotate(-180 11.901 2.834)"
			/>
		</svg>
	);
}
