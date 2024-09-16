import { useState, ChangeEvent } from "react";

export function useSimpleFilter<T>(list: T[], filterKey: keyof T) {
  const [searchInput, setSearchInput] = useState<string>("");

  // Manejar el cambio en el campo de búsqueda
  const handleSearchInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };

  // Filtrar la lista basada en el campo indicado
  const filteredList = list.filter((item) =>
    String(item[filterKey])
      .toLowerCase()
      .includes(searchInput.toLowerCase())
  );

  return {
    filteredList,
    searchInput,
    handleSearchInputChange,
  };
}
