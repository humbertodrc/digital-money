
interface CheckIconProps {
  className?: string;
}

export default function CheckIcon({ className }: CheckIconProps) {
	return (
		<svg className={className} xmlns="http://www.w3.org/2000/svg" width="92" height="95" fill="none">
			<g clip-path="url(#a)">
				<path
					fill="#C1FD35"
					d="M48.898 5.973a41.832 41.832 0 0 0-16.51 3.369 42.946 42.946 0 0 0-13.993 9.652C1.575 36.361 1.575 64.612 18.4 81.98c16.82 17.361 44.178 17.361 60.996 0 16.813-17.367 16.813-45.618 0-62.985A42.916 42.916 0 0 0 65.41 9.342a41.805 41.805 0 0 0-16.505-3.369h-.006Zm0 5.902c9.557 0 19.113 3.77 26.427 11.317a38.662 38.662 0 0 1 8.116 12.52 39.651 39.651 0 0 1 2.85 14.775c0 5.07-.968 10.091-2.85 14.775a38.664 38.664 0 0 1-8.116 12.52 37.288 37.288 0 0 1-12.124 8.38 36.32 36.32 0 0 1-14.308 2.943c-4.91 0-9.773-1-14.309-2.943a37.288 37.288 0 0 1-12.124-8.38 38.665 38.665 0 0 1-8.116-12.52 39.653 39.653 0 0 1-2.85-14.775c0-5.071.969-10.092 2.85-14.776a38.664 38.664 0 0 1 8.116-12.519 37.218 37.218 0 0 1 12.125-8.383 36.252 36.252 0 0 1 14.313-2.934Zm17.02 26.73a2.824 2.824 0 0 0-1.495.612l-21.01 16.269-9.735-10.046a2.874 2.874 0 0 0-.933-.665 2.797 2.797 0 0 0-2.223-.02 2.87 2.87 0 0 0-.945.648c-.27.279-.483.61-.628.975a3.053 3.053 0 0 0 .02 2.296c.15.362.37.69.644.964l11.5 11.875a2.836 2.836 0 0 0 1.827.862 2.811 2.811 0 0 0 1.928-.583l23-17.813c.487-.367.85-.882 1.038-1.474a3.06 3.06 0 0 0 .008-1.823 2.968 2.968 0 0 0-1.025-1.485 2.816 2.816 0 0 0-1.672-.585 2.76 2.76 0 0 0-.293 0l-.006-.006Z"
				/>
			</g>
			<defs>
				<clipPath id="a">
					<path fill="#fff" d="M0 0h92v95H0z" />
				</clipPath>
			</defs>
		</svg>
	);
}