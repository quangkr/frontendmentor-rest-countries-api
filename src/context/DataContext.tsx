import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

type Language = {
  iso639_1: string | null;
  iso639_2: string | null;
  name: string;
  nativeName: string | null;
};

type Currency = Record<"code" | "name" | "symbol", string | null>;

type Translation = Record<
  "de" | "es" | "fr" | "ja" | "it" | "br" | "pt" | "nl" | "hr" | "fa",
  string | null
>;

type RegionalBlocs = {
  acronym: string;
  name: string;
  otherAcronyms: Array<string>;
  otherNames: Array<string>;
};

export type Country = {
  name: string;
  topLevelDomain: Array<string>;
  alpha2Code: string;
  alpha3Code: string;
  callingCodes: Array<string>;
  capital: string;
  altSpellings: Array<string>;
  region: string;
  subregion: string;
  population: number;
  latlng: Array<number>;
  demonym: string | null;
  area: number | null;
  gini: number | null;
  timezones: Array<string>;
  borders: Array<string>;
  nativeName: string | null;
  numericCode: string | null;
  currencies: Array<Currency>;
  languages: Array<Language>;
  translations: Translation;
  flag: string;
  regionalBlocs: Array<RegionalBlocs>;
  cioc: string | null;
};

type CountriesList = { [p: string]: Country };

export type DataContextType = {
  data: CountriesList;
  loading: boolean;
  fetchData: () => void;
};

export const DataContext = createContext<DataContextType>({
  data: {},
  loading: false,
  fetchData: () => {
    console.log("No data provider");
  },
});

export const useData = () => useContext(DataContext);

type Props = {
  children: ReactNode;
};

export const DataContextProvider = ({ children }: Props) => {
  const [data, setData] = useState<CountriesList>({});
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    setLoading(true);
    const response = await fetch("https://restcountries.eu/rest/v2/all");
    const json: Array<Country> = await response.json();
    const result = json.reduce(
      (accumulator, value) => ({ ...accumulator, [value.alpha3Code]: value }),
      {}
    );

    setData(result);
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <DataContext.Provider value={{ data, loading, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};
