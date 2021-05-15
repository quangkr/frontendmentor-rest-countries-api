import { Icon } from "@iconify/react";
import search from "@iconify/icons-ic/outline-search";

type Props = {
  value: string;
  setValue: (value: string) => void;
};

export default function SearchBar({ value, setValue }: Props) {
  return (
    <div className="mx-6 my-8 md:w-1/2 relative">
      <Icon
        icon={search}
        className="h-8 w-auto mx-4 my-auto bg-transparent text-gray-500 absolute top-1/2 left-0 transform -translate-y-1/2"
      />
      <input
        type="search"
        name="search"
        placeholder="Search for a country..."
        className="w-full p-4 pl-16 flex flex-row flex-nowrap bg-white rounded overflow-hidden shadow-md focus:outline-none focus:ring ring-gray-500"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}
