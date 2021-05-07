import { createContext, useContext, useState, FC } from "react";
import mockData from "./mockData";

type Language = {
  iso639_1: string | null;
  iso639_2: string | null;
  name: string;
  nativeName: string | null;
};

type Currency = {
  code: string | null;
  name: string | null;
  symbol: string | null;
};

type Translation = {
  de: string | null;
  es: string | null;
  fr: string | null;
  ja: string | null;
  it: string | null;
  br: string | null;
  pt: string | null;
  nl: string | null;
  hr: string | null;
  fa: string | null;
};

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

export type DataContextType = {
  data: Array<Country> | null;
  setData: (Data: Array<Country> | null) => void;
};

export const DataContext = createContext<DataContextType>({
  data: null,
  setData: (data) => console.warn("No data provider"),
});

export const DataContextProvider: FC = ({ children }) => {
  const [data, setData] = useState<Array<Country> | null>(mockData);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
