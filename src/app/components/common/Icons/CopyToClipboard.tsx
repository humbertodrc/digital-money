"use client";
import {Toaster, toast} from "sonner";
import clsx from "clsx";

interface CopyToClipboardProps {
	value: string;
	className?: string;
}

export default function CopyToClipboard({
	value,
	className,
}: CopyToClipboardProps) {

	const copyToClipboard = () => {
    navigator.clipboard.writeText(value);
    toast.success("Copiado al portapapeles");
	};

	return (
		<>
      <Toaster
        toastOptions={{
          className: "text-secondary bg-primary border-primary",
        }}
      />
			<svg
				width="38"
				height="32"
				viewBox="0 0 38 32"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
				className={clsx("cursor-pointer", className)}
				onClick={copyToClipboard}
			>
				<path
					d="M28.4375 10V28H10.4375V10H28.4375ZM28.4375 8H10.4375C9.90707 8 9.39836 8.21071 9.02329 8.58579C8.64821 8.96086 8.4375 9.46957 8.4375 10V28C8.4375 28.5304 8.64821 29.0391 9.02329 29.4142C9.39836 29.7893 9.90707 30 10.4375 30H28.4375C28.9679 30 29.4766 29.7893 29.8517 29.4142C30.2268 29.0391 30.4375 28.5304 30.4375 28V10C30.4375 9.46957 30.2268 8.96086 29.8517 8.58579C29.4766 8.21071 28.9679 8 28.4375 8Z"
					fill="#C1FD35"
				/>
				<path
					d="M4.4375 18H2.4375V4C2.4375 3.46957 2.64821 2.96086 3.02329 2.58579C3.39836 2.21071 3.90707 2 4.4375 2H18.4375V4H4.4375V18Z"
					fill="#C1FD35"
				/>
			</svg>
		</>
	);
}
