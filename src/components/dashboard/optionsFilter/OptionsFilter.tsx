import Button from "@/components/common/button/Button";
import FilterIcon from "@/components/common/Icons/FilterIcon";
import RadioInput from "@/components/common/radioInput/RadioInput";
import {Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import {ChangeEvent} from "react";

interface FilterOption {
	label: string;
	value: string;
}

interface OptionsFilterProps {
	options: FilterOption[];
	selectedFilter: string;
	handleFilterChange: (e: ChangeEvent<HTMLInputElement>) => void;
	clearFilters?: () => void;
}

export default function OptionsFilter({
	options,
	selectedFilter,
	handleFilterChange,
	clearFilters,
}: OptionsFilterProps) {
	return (
		<Menu>
			<MenuButton className="p-5 rounded-lg text-black text-base font-bold text-center flex items-center justify-center bg-primary py-6 w-fit-content gap-20 shadow-md">
				<span>Filtrar</span>
				<FilterIcon />
			</MenuButton>
			<MenuItems
				className="left-0 w-full xl:w-[354px] bg-tertiary shadow-md"
				anchor="bottom end"
			>
				<div className="flex justify-between items-center px-7 py-5 border-b-2 border-black-primary">
					<div>
						<p className="text-black text-base font-semibold">Período</p>
					</div>
					<button
						className="text-black/50 text-base font-normal"
						onClick={clearFilters}
					>
						Borrar filtros
					</button>
				</div>
				<div className="px-7 py-5 flex flex-col gap-5">
					{options.map((option) => (
						<MenuItem key={option.value}>
							<RadioInput
								name="filter"
								value={option.value}
								checked={selectedFilter === option.value}
								onChange={handleFilterChange}
								classNameLabel="flex items-center justify-between text-black text-base font-normal"
							>
								{option.label}
							</RadioInput>
						</MenuItem>
					))}
				</div>
			</MenuItems>
		</Menu>
	);
}
