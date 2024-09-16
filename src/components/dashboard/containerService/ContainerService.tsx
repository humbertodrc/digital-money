'use client';
import { Service } from "@/interfaces/service";
import SearchService from "../searchService/SearchService";
import ServiceList from "../serviceList/ServiceList";
import { useSimpleFilter } from "@/hooks/useFilter";

interface ContainerServiceProps {
  services: Service[];
}

export default function ContainerService({ services }: ContainerServiceProps) {
  const { filteredList, searchInput, handleSearchInputChange } = useSimpleFilter(
    services,
    "name"
  );
  
  return (
    <>
      <SearchService
        searchInput={searchInput}
        handleSearchInputChange={handleSearchInputChange}
      />
			<section className="w-full p-5 flex flex-col gap-5 rounded-md bg-white text-black shadow-md md:p-10 xl:p-15">
				<h1 className="border-b border-gray pb-5 text-lg font-bold">
					Más recientes
				</h1>
				<ServiceList services={filteredList} />
			</section>
		</>
  )
}