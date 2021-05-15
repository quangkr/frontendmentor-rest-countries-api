import { useCallback, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { useData, Country } from "context/DataContext";

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
    <div className="flex flex-row">
      <span className="font-semibold">{label}:&nbsp;</span>
      <span className="font-light">{value}</span>
    </div>
  );
};

export default function DetailPage() {
  const { data: countriesList } = useData();
  const { id } = useParams<RouteParams>();

  const arrayToString = useCallback(
    (array: Array<string | null>) =>
      array.reduce(
        (result, item) =>
          item ? (result ? result + ", " + item : item) : result,
        ""
      ),
    []
  );

  const country = useMemo(
    () =>
      countriesList.filter(
        (item: Country) => item.alpha3Code.toLowerCase() === id.toLowerCase()
      )[0],
    [id, countriesList]
  );

  return (
    <div>
      <div>
        <img src={country.flag} alt={`${country.name}'s flag'`} />
      </div>
      <Link to="/">Back</Link>
      <div>{country.name}</div>
      <InfoBlock label="Native Name" value={country.nativeName} />
      <InfoBlock label="Population" value={country.population} />
      <InfoBlock label="Region" value={country.region} />
      <InfoBlock label="Sub Region" value={country.subregion} />
      <InfoBlock label="Capital" value={country.capital} />
      <InfoBlock
        label="Top Level Domain"
        value={arrayToString(country.topLevelDomain)}
      />
      <InfoBlock
        label="Currencies"
        value={arrayToString(country.currencies.map((item) => item.name))}
      />
    </div>
  );
}
