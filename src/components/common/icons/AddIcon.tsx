interface AddIconProps {
	className?: string;
}

export default function AddIcon({className}: AddIconProps) {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="none">
			<g stroke="#C1FD35" strokeWidth="1.3">
				<circle cx="17" cy="17" r="16.35" />
				<path strokeLinejoin="round" d="M16.75 10v14.5M24 17H9.5" />
			</g>
		</svg>
	);
}
