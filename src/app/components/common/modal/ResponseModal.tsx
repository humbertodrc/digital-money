import {DialogPanel, DialogTitle} from "@headlessui/react";
import React, {isValidElement} from "react";

import clsx from "clsx";
import ModalCloseButton from "./ModalCloseButton";
import ModalTemplate from "./ModalTemplate";

interface ResponseModalProps {
	title?: string;
	content?: string | JSX.Element;
	type: "success" | "error";
	show: boolean;
	onClose: () => void;
	icon?: JSX.Element;
	hiddenCloseButton?: boolean;
	iconBgColor?: string;
	zIndex?: number;
	hideBackdrop?: boolean;
	children?: React.ReactNode;
}

interface ResponseModalButtonsProps {
	children: React.ReactNode;
	className?: string;
}

const ResponseModal = {
	Modal: ({
		title,
		content,
		type,
		show,
		onClose,
		icon,
		hiddenCloseButton = false,
		children,
		iconBgColor,
		zIndex = 60,
		hideBackdrop,
	}: ResponseModalProps) => {
		return (
			<ModalTemplate
				show={show}
				onClose={hiddenCloseButton ? () => {} : onClose}
				zIndex={zIndex}
				hideBackdrop={hideBackdrop}
			>
				<DialogPanel className="w-full max-w-[400px] sm:min-w-[400px] sm:w-auto transform rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
					<section className="p-8 flex flex-col">
						{/* Header */}
						<div className="flex justify-between">
							<div className="flex-1 flex flex-col items-center">
								<div
									className={clsx(
										"flex items-center justify-center w-11 h-11 rounded-2lg text-primary",
										iconBgColor || "bg-primary-light"
									)}
								>
									{icon || (type === "error" ? <ErrorIcon /> : <SuccessIcon />)}
								</div>
								<DialogTitle
									className="text-xl text-black-primary font-black mt-5"
									as="h2"
								>
									{title}
								</DialogTitle>
							</div>
							{!hiddenCloseButton && (
								<ModalCloseButton
									className="text-gray-400 absolute right-6 top-6"
									width={12}
									height={12}
									onClick={onClose}
								/>
							)}
						</div>
						<div className="flex flex-col items-center">
							{(typeof content === "string" || !content) && (
								<p className="text-sm text-black-primary text-center font-medium mt-2.5">
									{content}
								</p>
							)}
							{/* Render ResponseModal.Buttons */}
							{children &&
								React.Children.map(children, (child) => {
									if (
										isValidElement(child) &&
										child.type === ResponseModal.Buttons
									) {
										return child;
									}
								})}
						</div>
					</section>
				</DialogPanel>
			</ModalTemplate>
		);
	},
	Buttons: ({children, className}: ResponseModalButtonsProps) => (
		<div className={clsx("mt-5 flex w-full", className)}>{children}</div>
	),
};

function ErrorIcon() {
	return (
		<svg
			width="21"
			height="22"
			viewBox="0 0 21 22"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M19.2965 8.97708C20.2012 12.9013 18.3974 16.9503 14.8748 18.9021C11.3522 20.854 6.96287 20.2368 4.11522 17.3891C1.26757 14.5414 0.650329 10.1521 2.6022 6.62951C4.55406 3.10694 8.60299 1.3031 12.5272 2.20779M10.5272 10.9771V7.47708M10.5277 13.9771C10.4944 13.9768 10.4624 13.9898 10.4388 14.0133C10.4152 14.0368 10.4021 14.0688 10.4022 14.1021C10.4022 14.1711 10.4581 14.227 10.5271 14.2271M19.0272 4.47708C19.0272 5.58165 18.1318 6.47708 17.0272 6.47708C15.9227 6.47708 15.0272 5.58165 15.0272 4.47708C15.0272 3.37251 15.9227 2.47708 17.0272 2.47708C18.1318 2.47708 19.0272 3.37251 19.0272 4.47708Z"
				stroke="currentColor"
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}

function SuccessIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 20 20"
			fill="currentColor"
			className="w-5 h-5"
		>
			<path
				fillRule="evenodd"
				d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

export default ResponseModal;
