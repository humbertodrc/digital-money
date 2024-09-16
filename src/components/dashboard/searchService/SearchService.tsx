import SearchIcon from "@/components/common/Icons/SearchIcon";

interface SearchServiceProps {
  searchInput: string;
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SearchService({searchInput, handleSearchInputChange}: SearchServiceProps) {
	return (
		<div className="bg-white w-full flex items-center border border-gray-300 rounded-lg p-5 relative shadow-md">
			<SearchIcon />
			<input
				type="text"
				placeholder="Buscar en tu actividad"
				className="flex-grow pl-2 py-1 text-base border-none focus:border-none focus-visible:outline-none text-black"
				value={searchInput}
				// onKeyDown={handleSearchInputKeyDown}
				onChange={handleSearchInputChange}
			/>
		</div>
	);
}
