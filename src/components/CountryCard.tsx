import { Country } from "context/DataContext";

type CountryNameProps = {
  name: string;
};

type CountryInfoProps = {
  label: string;
  value: string | number;
};

type Props = {
  country: Country;
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

export default function CountryCard({ country }: Props) {
  const formattedPopulation = new Intl.NumberFormat("en-US").format(
    country.population
  );

  return (
    <div className="w-60 h-80 m-8 bg-white rounded overflow-hidden shadow-md">
      <img
        src={country.flag}
        alt={`${country.name}'s flag'`}
        className="w-60 h-40 object-cover cursor-pointer"
      />
      <div className="px-4">
        <CountryName name={country.name} />
        <CountryInfo label={"Population"} value={formattedPopulation} />
        <CountryInfo label={"Region"} value={country.region} />
        <CountryInfo label={"Capital"} value={country.capital} />
      </div>
    </div>
  );
}
