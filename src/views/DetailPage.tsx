import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useData, Country } from "context/DataContext";

import Button from "components/Button";

type RouteParams = {
  id: string;
};

const InfoBlock = ({
  label,
  value,
}: {
  label: string;
  value: string | number | null;
}) => {
  return (
    <div className="my-1 flex flex-row">
      <span className="font-semibold flex-shrink-0">{label}:&nbsp;</span>
      <span className="font-light">{value}</span>
    </div>
  );
};

function arrayToString(array: Array<string | null>) {
  return array.reduce(
    (result, item) => (item ? (result ? result + ", " + item : item) : result),
    ""
  );
}

export default function DetailPage() {
  const { countries } = useData();
  const { id } = useParams<RouteParams>();

  const country = useMemo(() => countries[id], [countries, id]);

  const borderCountries: Array<Country> = useMemo(
    () =>
      country
        ? country.borders.reduce(
            (accumulator: Array<Country>, value) => [
              ...accumulator,
              countries[value],
            ],
            []
          )
        : [],
    [countries, country]
  );

  const formattedPopulation: string = useMemo(
    () =>
      country ? new Intl.NumberFormat("en-US").format(country.population) : "",
    [country]
  );

  return (
    <>
      {country ? (
        <>
          <div className="max-w-xl mx-auto px-8 py-12">
            <Link to="/">
              <Button>Back</Button>
            </Link>
            <div className="my-8">
              <img src={country.flag} alt={`${country.name}'s flag'`} />
            </div>
            <h1 className="my-6 font-extrabold text-2xl">{country.name}</h1>
            <div className="flex flex-col">
              <div className="flex flex-col">
                <InfoBlock label="Native Name" value={country.nativeName} />
                <InfoBlock label="Population" value={formattedPopulation} />
                <InfoBlock label="Region" value={country.region} />
                <InfoBlock label="Sub Region" value={country.subregion} />
                <InfoBlock label="Capital" value={country.capital} />
              </div>
              <div className="flex flex-col mt-6">
                <InfoBlock
                  label="Top Level Domain"
                  value={arrayToString(country.topLevelDomain)}
                />
                <InfoBlock
                  label="Currencies"
                  value={arrayToString(
                    country.currencies.map((item) => item.name)
                  )}
                />
                <InfoBlock
                  label="Languages"
                  value={arrayToString(
                    country.languages.map((item) => item.name)
                  )}
                />
              </div>
            </div>
            <h2 className="mt-8 mb-4 font-semibold text-lg">
              Border countries:&nbsp;
            </h2>
            <span className="flex flex-wrap -mx-2">
              {borderCountries.map((country) => (
                <Link
                  to={`/detail/${country.alpha3Code}`}
                  key={country.alpha3Code}
                  className="m-2"
                >
                  <Button>{country.name}</Button>
                </Link>
              ))}
            </span>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
