import { Icon } from "@iconify/react";
import search from "@iconify/icons-ic/outline-search";

export default function SearchBar() {
  return (
    <div className="mx-6 my-8 w-full relative">
      <Icon
        icon={search}
        className="h-8 w-auto mx-4 my-auto bg-transparent text-gray-500 absolute top-1/2 left-0 transform -translate-y-1/2"
      />
      <input
        type="search"
        name="search"
        placeholder="Search for a country..."
        className="w-full p-4 pl-16 flex flex-row flex-nowrap bg-white rounded overflow-hidden shadow-md focus:outline-none focus:ring ring-gray-500"
      />
    </div>
  );
}
