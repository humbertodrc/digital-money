import HeaderLogo from "@/components/common/Icons/HeaderLogo";
import clsx from "clsx";
import Link from "next/link";

type Link = {
	href: string;
	text: string;
	outline?: boolean;
	solid?: boolean;
};

interface HeaderProps {
  logoClassName: string;
	logoLink: string;
	headerClassName?: string;
	links?: Link[];
}

export default function Header({logoClassName, logoLink, headerClassName, links}: HeaderProps) {
	return (
		<header className={clsx('p-5 flex flex-row justify-between md:px-20 xl:px-5', headerClassName)}>
			<HeaderLogo className={logoClassName} href={logoLink} />
			<div className="flex flex-row gap-2">
				{links && links.map((link, index) => (
					<Link
						key={`${link.text}-${index}`}
						href={link.href}
						className={clsx(
							"py-2 px-3 border-2 rounded-lg font-semibold text-center",
							{
								"bg-primary text-black border-none": !link.outline,
								"border-primary text-primary": link.outline,
								"bg-secondary text-white": link.solid,
							}
						)}
					>
						{link.text}
					</Link>
				))}
			</div>
		</header>
	);
}
