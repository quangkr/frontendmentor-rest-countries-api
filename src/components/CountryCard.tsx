import { Country } from "context/DataContext";
import { Link } from "react-router-dom";

type CountryNameProps = {
  name: string;
};

type CountryInfoProps = {
  label: string;
  value: string | number;
};

type Props = {
  country: Country;
  className?: string;
};

const CountryName = ({ name }: CountryNameProps) => (
  <h2 className="py-4 font-extrabold tracking-wide cursor-pointer text-lg">
    {name}
  </h2>
);

const CountryInfo = ({ label, value }: CountryInfoProps) => (
  <p className="text-sm tracking-wide font-light leading-normal">
    <strong className="font-semibold">{label}: </strong> {value}
  </p>
);

export default function CountryCard({ country, className = "" }: Props) {
  const formattedPopulation = new Intl.NumberFormat("en-US").format(
    country.population
  );

  return (
    <div
      className={`w-60 h-80
      rounded overflow-hidden
      bg-white dark:bg-blue-800
      shadow-md
      ${className}`}
    >
      <Link to={`/detail/${country.alpha3Code}`}>
        <img
          src={country.flag}
          alt={`${country.name}'s flag'`}
          className="w-60 h-40 object-cover cursor-pointer"
        />
      </Link>
      <div className="px-4">
        <Link to={`/detail/${country.alpha3Code}`}>
          <CountryName name={country.name} />
        </Link>
        <CountryInfo label={"Population"} value={formattedPopulation} />
        <CountryInfo label={"Region"} value={country.region} />
        <CountryInfo label={"Capital"} value={country.capital} />
      </div>
    </div>
  );
}
