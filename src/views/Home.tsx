import { useState, useMemo } from "react";
import { useData, Country } from "context/DataContext";

import SearchBar from "components/SearchBar";
import FilterSelector from "components/FilterSelector";
import CountryCard from "components/CountryCard";

export default function Home() {
  const { countries } = useData();
  const [searchInput, setSearchInput] = useState("");
  const [regionFilter, setRegionFilter] = useState("");

  const countriesList = useMemo(() => Object.values(countries), [countries]);

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
      searchInput
        ? countriesByRegion.filter((country) =>
            country.name.toLowerCase().includes(searchInput.toLowerCase())
          )
        : countriesByRegion,
    [countriesByRegion, searchInput]
  );

  return (
    <div className="w-full h-full flex flex-col justify-center relative">
      <div className="w-full flex flex-col justify-center md:flex-row md:justify-between md:items-center md:px-6 lg:px-12">
        <SearchBar value={searchInput} setValue={setSearchInput} />
        <FilterSelector
          options={regionList}
          value={regionFilter}
          setValue={setRegionFilter}
        />
      </div>
      <div className="grid grid-cols-fill-60 gap-8 mx-8 my-12 md:gap-16 md:mx-12 lg:gap-20 lg:mx-16 justify-center">
        {filteredCountriesList.map((country: Country) => (
          <CountryCard key={country.alpha3Code} country={country} />
        ))}
      </div>
    </div>
  );
}
