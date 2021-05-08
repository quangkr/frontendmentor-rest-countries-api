import { createContext, useContext, useState, ReactNode } from "react";

export enum Theme {
  Dark = "Dark",
  Light = "Light",
}

export type ThemeContextType = {
  theme: Theme;
  setTheme: (Theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.Dark,
  setTheme: (theme) => console.warn("no theme provider"),
});

export const useTheme = () => useContext(ThemeContext);

type Props = {
  children: ReactNode;
};

export const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(Theme.Light);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
