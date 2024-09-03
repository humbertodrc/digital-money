import { useState, useEffect, ChangeEvent, KeyboardEvent } from "react";
import { ActivityItem } from "@/interfaces/activity";
import { activityDictionary } from "@/constants/activityDictionary";
import { useRouter, useSearchParams } from "next/navigation";


// Función para verificar si dos fechas son el mismo día
const isSameDay = (date1: Date, date2: Date): boolean => {
  return date1.toDateString() === date2.toDateString();
};

// Función para añadir días a una fecha
const addDays = (date: Date, days: number): Date => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};

// Función para verificar si una fecha está dentro de los últimos "n" días
const isWithinLastDays = (date: Date, days: number): boolean => {
  const pastDate = addDays(new Date(), -days);
  return date >= pastDate;
};


// Hook para filtrar la lista de actividades
export function useFilteredActivity(
  activityList: ActivityItem[],
) {

  const [searchInput, setSearchInput] = useState<string>("");
  const [selectedFilter, setSelectedFilter] = useState<string>("");
  const router = useRouter();
  const searchParams = useSearchParams();


  useEffect(() => {
    // Al montar el componente, obtenemos el valor del query param "search"
    const searchQuery = searchParams.get("search") || "";
    setSearchInput(searchQuery);
	}, [searchParams]);
	
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  const handleSearchInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      redirectToActivityPage();
    }
  };

  const handleFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSelectedFilter(e.target.value);
  };

  const redirectToActivityPage = () => {
    if (searchInput.trim().length > 0) {
      router.push(`/dashboard/activity?search=${searchInput}`);
    }
  };

  const filterFunctions: Record<string, (date: Date) => boolean> = {
    today: (activityDate) => isSameDay(activityDate, new Date()),
    yesterday: (activityDate) => isSameDay(activityDate, addDays(new Date(), -1)),
    lastWeek: (activityDate) => isWithinLastDays(activityDate, 7),
    last15Days: (activityDate) => isWithinLastDays(activityDate, 15),
    lastMonth: (activityDate) => isWithinLastDays(activityDate, 30),
    lastYear: (activityDate) => isWithinLastDays(activityDate, 365),
  };

  const filteredActivityList = activityList.filter((activity) => {
    const filterFn = filterFunctions[selectedFilter];
    const matchesFilter = filterFn ? filterFn(new Date(activity.dated)) : true;
    const matchesSearch = activityDictionary[
      activity.type as keyof typeof activityDictionary
    ]
      .toLowerCase()
      .includes(searchInput.toLowerCase());

    return matchesFilter && matchesSearch;
	});
	
	const clearFilters = () => {
    setSelectedFilter("");
  };

  return {
    filteredActivityList,
    searchInput,
    selectedFilter,
    handleSearchInputChange,
    handleSearchInputKeyDown,
    handleFilterChange,
    clearFilters,
  };
}


