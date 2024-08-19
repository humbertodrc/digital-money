"use client";
import ArrowRight from "@/components/common/Icons/ArrowRight";
import Bullet from "@/components/common/Icons/Bullet";
import SearchIcon from "@/components/common/Icons/SearchIcon";
import {activityDictionary} from "@/constants/activityDictionary";
import {ActivityList} from "@/interfaces/activity";
import {formatDayOfWeek} from "@/utils/formatDayOfWeek";
import Link from "next/link";
import {useRouter} from "next/navigation";
import {ChangeEvent, KeyboardEvent, useState} from "react";

export default function Activity({activityList}: ActivityList) {
	// Filtar por type
	const [searchInput, setSearchInput] = useState<string>("");
	const router = useRouter();

	const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter") {
			searchInput.trim();
			redirectToActivityPage();
		}
	};

	// Llevar al usuario a la página de actividad con un query param de lo que busca
	const redirectToActivityPage = () => {
		if (searchInput.trim().length > 0) {
			router.push(`/dashboard/activity?search=${searchInput}`);
		}
	};

	return (
		<div className="w-full">
      <div className="bg-white w-full flex items-center border border-gray-300 rounded-lg p-5 relative shadow-md mb-5">
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
			<section className="w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15">
				<h2 className="pb-5 border-b border-secondary text-base font-bold">
					Tu actividad
				</h2>
				<ul className="flex flex-col gap-5">
					{activityList.map((activity) => (
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
					))}
				</ul>
				<Link
					href="/dashboard/activity"
					className="flex flex-row justify-between"
				>
					<span className="text-base text-black font-bold">
						Ver toda tu actividad
					</span>
					<ArrowRight />
				</Link>
			</section>
		</div>
	);
}
