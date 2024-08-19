interface SearchIconProps {
  className?: string;
}

export default function SearchIcon({ className }: SearchIconProps) {
	return (
		<svg
			width="16"
			height="17"
			viewBox="0 0 16 17"
			fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
		>
			<circle cx="6.5" cy="6.5" r="5.75" stroke="#828282" stroke-width="1.5" />
			<path
				d="M10.1992 11L14.7195 16.1191"
				stroke="#828282"
				stroke-width="1.5"
			/>
		</svg>
	);
}
