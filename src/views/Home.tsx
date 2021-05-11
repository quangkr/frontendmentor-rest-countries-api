import { useState, useMemo } from "react";
import { useData, Country } from "context/DataContext";

import SearchBar from "components/SearchBar";
import FilterSelector from "components/FilterSelector";
import CountryCard from "components/CountryCard";

export default function Home() {
  const { data: countriesList } = useData();
  const [searchQuery, setSearchQuery] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const regionList = useMemo(
    () =>
      countriesList.reduce(
        (accumulator: Array<string>, country: Country) =>
          accumulator.includes(country.region)
            ? accumulator
            : [...accumulator, country.region].sort(),
        []
      ),
    [countriesList]
  );

  const countriesByRegion = useMemo(
    () =>
      regionFilter
        ? countriesList.filter((country) => country.region === regionFilter)
        : countriesList,
    [countriesList, regionFilter]
  );

  const filteredCountriesList = useMemo(
    () =>
      searchQuery
        ? countriesByRegion.filter((country) =>
            country.name.toLowerCase().includes(searchQuery.toLowerCase())
          )
        : countriesByRegion,
    [countriesByRegion, searchQuery]
  );

  return (
    <div className="w-full h-full flex flex-row flex-wrap justify-between bg-gray-50">
      <SearchBar value={searchQuery} setValue={setSearchQuery} />
      <FilterSelector
        options={regionList}
        value={regionFilter}
        setValue={setRegionFilter}
      />
      <div className="w-full flex flex-row flex-wrap justify-center">
        {filteredCountriesList.map((country: Country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
}
