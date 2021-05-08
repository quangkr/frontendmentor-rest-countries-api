import { Country } from "context/DataContext";

type Props = {
  country: Country;
};

export default function CountryCard({ country }: Props) {
  return <div className="w-64 h-80 m-8 bg-gray-50">{country.name}</div>;
}
