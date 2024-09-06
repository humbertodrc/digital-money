interface PencilIconProps {
	className?: string;
	onClick?: () => void;
}

export default function PencilIcon({ className, onClick }: PencilIconProps) {
	return (
		<svg
			width="22"
			height="22"
			viewBox="0 0 22 22"
			fill="none"
      xmlns="http://www.w3.org/2000/svg"
			className={className}
			onClick={onClick}
		>
			<g clipPath="url(#clip0_1623_2698)">
				<path
					d="M2.44531 15.5091V18.9466H5.88281L16.0211 8.80829L12.5836 5.37079L2.44531 15.5091ZM18.6795 6.14996C19.037 5.79246 19.037 5.21496 18.6795 4.85746L16.5345 2.71246C16.177 2.35496 15.5995 2.35496 15.242 2.71246L13.5645 4.38996L17.002 7.82746L18.6795 6.14996Z"
					fill="#CECECE"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1623_2698">
					<rect width="22" height="22" fill="white" />
				</clipPath>
			</defs>
		</svg>
	);
}
