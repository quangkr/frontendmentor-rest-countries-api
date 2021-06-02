import { ReactNode } from "react";
import { useTheme, Theme } from "context/ThemeContext";

import Header from "components/Header";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { theme } = useTheme();
  return (
    <div className={`${theme === Theme.Dark ? "dark" : ""}`}>
      <div
        className="w-full min-h-screen
                  bg-gray-50 dark:bg-blue-900
                  text-blue-950 dark:text-white"
      >
        <Header />
        {children}
      </div>
    </div>
  );
}
