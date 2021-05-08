import { useData, Country } from "context/DataContext";

import CountryCard from "components/CountryCard";

export default function Home() {
  const { data: countriesList } = useData();

  return (
    <div className="w-full h-full bg-gray-500">
      <p>HomePage</p>
      {countriesList.map((country: Country) => (
        <CountryCard country={country} />
      ))}
    </div>
  );
}
