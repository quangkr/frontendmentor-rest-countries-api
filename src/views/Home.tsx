import { useData, Country } from "context/DataContext";

import SearchBar from "components/SearchBar";
import FilterSelector from "components/FilterSelector";
import CountryCard from "components/CountryCard";

export default function Home() {
  const { data: countriesList } = useData();

  const regionList = ["africa", "america", "asia", "europe", "ocenia"];

  return (
    <div className="w-full h-full flex flex-row flex-wrap justify-between bg-gray-50">
      <SearchBar />
      <FilterSelector options={regionList} />
      <div className="w-full flex flex-row flex-wrap justify-center">
        {countriesList.map((country: Country) => (
          <CountryCard country={country} />
        ))}
      </div>
    </div>
  );
}
