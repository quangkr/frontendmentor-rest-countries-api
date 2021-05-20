import { useTheme, Theme } from "context/ThemeContext";
import { InlineIcon } from "@iconify/react";
import iconLightMode from "@iconify/icons-ic/outline-light-mode";
import iconDarkMode from "@iconify/icons-ic/outline-dark-mode";

export default function Header() {
  const { theme, setTheme } = useTheme();
  function toggleTheme() {
    if (theme === Theme.Light) {
      setTheme(Theme.Dark);
    } else {
      setTheme(Theme.Light);
    }
  }

  return (
    <header className="w-full h-20 flex flex-col justify-center items-center bg-white shadow-md">
      <div className="w-full px-8 flex justify-between items-end">
        <h1 className="font-extrabold text-lg">Where in the world?</h1>
        <button
          className={`flex items-center font-semibold
                    bg-transparent border-none
                    focus:outline-none
                    select-none cursor-pointer`}
          onClick={() => toggleTheme()}
        >
          <span className="mr-2">Dark Mode</span>
          <span className="text-3xl">
            <InlineIcon icon={iconLightMode} className="block dark:hidden" />
            <InlineIcon icon={iconDarkMode} className="hidden dark:block" />
          </span>
        </button>
      </div>
    </header>
  );
}
