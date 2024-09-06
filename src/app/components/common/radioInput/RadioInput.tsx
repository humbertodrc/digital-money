import clsx from "clsx";
import { forwardRef } from "react";

interface RadioInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	children?: React.ReactNode;
	labelPosition?: "left" | "right";
	disabled?: boolean;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  classNameLabel?: string;
  classNameInput?: string;
	name: string;
	value: string;
	checked?: boolean;
}

export default forwardRef(function RadioInput(
	{
		children,
		labelPosition = "left",
		disabled,
		onChange,
    classNameLabel,
    classNameInput,
		name,
		value,
		checked,
		...props
	}: RadioInputProps,
	ref: React.Ref<HTMLInputElement>
) {
	return (
		<label
			className={clsx(
				"flex items-center cursor-pointer",
				classNameLabel,
			)}
		>
			{labelPosition === "left" && <span>{children}</span>}
			<input
				type="radio"
				ref={ref}
				onChange={onChange}
				name={name}
				value={value}
				className={clsx('w-4 h-4 border border-secondary/30 rounded-full appearance-none checked:bg-primary checked:border-secondary checked:after:bg-black checked:after:rounded-full checked:after:w-2 checked:after:h-2 relative cursor-pointer checked:after:block checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:transform checked:after:-translate-x-1/2 checked:after:-translate-y-1/2', classNameInput)}
				checked={checked}
				{...props}
			/>
			{labelPosition === "right" && <span>{children}</span>}
		</label>
	);
});
