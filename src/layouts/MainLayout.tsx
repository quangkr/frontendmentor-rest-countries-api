import { ReactNode } from "react";
import { useTheme, Theme } from "context/ThemeContext";

import Header from "components/Header";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  const { theme } = useTheme();
  return (
    <div
      className={`w-full min-h-screen bg-gray-50
                ${theme === Theme.Dark ? "dark" : ""}`}
    >
      <Header />
      {children}
    </div>
  );
}
