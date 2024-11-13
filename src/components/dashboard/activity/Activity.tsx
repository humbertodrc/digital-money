"use client";
import ArrowRight from "@/components/common/Icons/ArrowRight";
import Bullet from "@/components/common/Icons/Bullet";
import SearchIcon from "@/components/common/Icons/SearchIcon";
import { activityDictionary } from "@/constants/activityDictionary";
import { useFilteredActivity } from "@/hooks/useFilteredActivity";
import { usePagination } from "@/hooks/usePagination";
import { ActivityItem } from "@/interfaces/activity";
import { formatDayOfWeek } from "@/utils/formatDayOfWeek";
import clsx from "clsx";
import Link from "next/link";
import OptionsFilter from "../optionsFilter/OptionsFilter";
import { FILTER_OPTIONS } from "@/constants/filterOptions";

interface ActivityProps {
	activityList: ActivityItem[];
	showMoreActivity?: boolean;
	hasOptionsActivity?: boolean;
	hasPagination?: boolean;
}

const itemsPerPage = 10;

export default function Activity({
	activityList = [],
	showMoreActivity,
	hasOptionsActivity,
	hasPagination,
}: ActivityProps) {
  // Hook para filtrar la lista de actividades
	const {
		filteredActivityList,
		searchInput,
		selectedFilter,
		handleSearchInputChange,
		handleSearchInputKeyDown,
		handleFilterChange,
		clearFilters,
  } = useFilteredActivity(activityList);
  // Hook para la paginación
	const {currentItems, currentPage, totalPages, paginate} = usePagination(
		filteredActivityList,
		itemsPerPage
	);

	return (
		<div className="w-full">
			<div className="flex items-center mb-5 gap-10">
				<div className="bg-white w-full flex items-center border border-gray-300 rounded-lg p-5 relative shadow-md">
					<SearchIcon />
					<input
						type="text"
						placeholder="Buscar en tu actividad"
						className="flex-grow pl-2 py-1 text-base border-none focus:border-none focus-visible:outline-none text-black"
						value={searchInput}
						onKeyDown={handleSearchInputKeyDown}
						onChange={handleSearchInputChange}
					/>
				</div>
				{hasOptionsActivity && (
					<OptionsFilter
						options={FILTER_OPTIONS}
						selectedFilter={selectedFilter}
						handleFilterChange={handleFilterChange}
						clearFilters={clearFilters}
					/>
				)}
			</div>

			<section className="w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15">
				<h2 className="pb-5 border-b border-secondary text-base font-bold">
					Tu actividad
				</h2>
				<ul className="flex flex-col gap-5">
					{currentItems.length > 0 ? (
						currentItems.map((activity) => (
							<li
								key={activity.id}
								className="w-full pb-5 flex flex-row justify-between items-center border-b border-secondary"
							>
								<div className="flex flex-row gap-4">
									<Bullet className="fill-primary" />
									<h3>
										{
											activityDictionary[
												activity.type as keyof typeof activityDictionary
											]
										}
									</h3>
								</div>
								<div className="flex flex-col items-end">
									<span className="text-md">$ {activity.amount},00</span>
									<span className="text-sm opacity-50">
										{formatDayOfWeek(activity.dated)}
									</span>
								</div>
							</li>
						))
					) : (
						<li>No se encontraron actividades</li>
					)}
				</ul>

				{hasPagination && totalPages > 1 && (
					<div className="flex justify-center mt-5">
						{totalPages > 0 &&
							Array.from({length: totalPages}, (_, index) => (
								<button
									key={index + 1}
									className={clsx(
										"px-4 py-2 mx-1 rounded-lg text-black text-base font-bold",
										{
											"bg-tertiary": index + 1 === currentPage,
											"bg-transparent hover:bg-tertiary":
												index + 1 !== currentPage,
										}
									)}
									onClick={() => paginate(index + 1)}
								>
									{index + 1}
								</button>
							))}
					</div>
				)}

				{showMoreActivity && (
					<Link
						href="/dashboard/activity"
						className="flex flex-row justify-between mt-5"
					>
						<span className="text-base text-black font-bold">
							Ver toda tu actividad
						</span>
						<ArrowRight className="fill-secondary" />
					</Link>
				)}
			</section>
		</div>
	);
}
