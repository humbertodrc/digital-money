"use client";
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";

interface CardProps {
	number: string;
	expiry: string;
	cvc: string;
	name: string;
}

export default function Card({number, expiry, cvc, name}: CardProps) {
	return (
		<div className="shadow-md rounded-[14.5px]">
			<Cards number={number} expiry={expiry} cvc={cvc} name={name} />
		</div>
	);
}
