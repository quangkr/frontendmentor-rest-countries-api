import { useState } from "react";

import { InlineIcon } from "@iconify/react";
import arrowDown from "@iconify/icons-ic/baseline-keyboard-arrow-down";

type OptionProps = {
  value: string;
  onClick: () => void;
} & Record<string, any>;

type Props = {
  options: Array<string>;
};

const StyledOption = ({ value, onClick, ...rest }: OptionProps) => {
  const capitalizedValue = value.trim().replace(/^\w/, (c) => c.toUpperCase());
  return (
    <li className="p-2 pl-6 cursor-pointer" {...rest} onClick={onClick}>
      {capitalizedValue}
    </li>
  );
};

export default function FilterSelector({ options }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  const dropdownClass =
    (isOpen ? "flex" : "hidden") +
    " flex-col rounded overflow-hidden shadow-md w-full p-2 mt-2 bg-white absolute";

  return (
    <div className="ml-6 w-60 relative">
      <div
        className="w-full p-4 pl-8 flex flex-row justify-between items-center rounded overflow-hidden shadow-md bg-white capitalize cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
          console.log(dropdownClass);
        }}
      >
        <span>{value}</span>
        <InlineIcon
          icon={arrowDown}
          className="text-xl bg-transparent text-gray-500"
        />
      </div>
      <ul className={dropdownClass}>
        {options.map((option) => (
          <StyledOption
            value={option}
            onClick={() => {
              setValue(option);
              setIsOpen(false);
            }}
          />
        ))}
      </ul>
    </div>
  );
}
