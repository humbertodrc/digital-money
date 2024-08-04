import parse from 'html-react-parser';

interface TitleProps {
	title: string;
	subtitle: string;
}

export default function Title({title, subtitle}: TitleProps) {
	return (
		<>
			<h1 className="font-normal text-2xl md:text-4xl xl:text-5xl">{title}</h1>
			<div className="w-1/5 border-t-4 border-primary md:w-1/4 md:hidden"></div>
			<h2 className="font-semibold text-xl text-primary md:text-2xl xl:text-3xl">
				{parse(subtitle)}
			</h2>
		</>
	);
}
