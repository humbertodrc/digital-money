interface EditIconProps {
	className?: string;
	onClick?: () => void;
}

export default function EditIcon({className, onClick}: EditIconProps) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="30"
			height="30"
			fill="none"
			className={className}
			onClick={onClick}
		>
			<g fill="#C1FD35" clipPath="url(#a)">
				<path d="M23.332 25H4.999V6.667h11.016L17.682 5H4.999a1.667 1.667 0 0 0-1.667 1.667V25a1.667 1.667 0 0 0 1.667 1.667h18.333A1.666 1.666 0 0 0 24.999 25V12.5l-1.667 1.667V25Z" />
				<path d="m27.94 4.867-2.808-2.809a1.341 1.341 0 0 0-1.9 0L11.807 13.55l-.925 4.008a1.342 1.342 0 0 0 1.309 1.609c.102.01.205.01.308 0l4.042-.892 11.4-11.508a1.344 1.344 0 0 0 0-1.9ZM15.675 16.733l-3.05.675.708-3.025 8.6-8.658 2.35 2.35-8.608 8.658Zm9.55-9.6-2.35-2.35 1.292-1.316 2.366 2.366-1.308 1.3Z" />
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h30v30H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}
