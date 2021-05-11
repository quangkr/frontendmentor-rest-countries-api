import { useState } from "react";

import { InlineIcon } from "@iconify/react";
import arrowDown from "@iconify/icons-ic/baseline-keyboard-arrow-down";
import close from "@iconify/icons-ic/baseline-close";

type OptionProps = {
  value: string;
  onClick: () => void;
} & Record<string, any>;

type Props = {
  options: Array<string>;
  value: string;
  setValue: (value: string) => void;
};

const StyledOption = ({ value, onClick, ...rest }: OptionProps) => {
  const capitalizedValue = value.trim().replace(/^\w/, (c) => c.toUpperCase());
  return (
    <li className="p-2 pl-6 cursor-pointer" {...rest} onClick={onClick}>
      {capitalizedValue}
    </li>
  );
};

export default function FilterSelector({ options, value, setValue }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="ml-6 w-60 relative">
      <div
        className="w-full p-4 pl-8
                    flex flex-row justify-between items-center
                    rounded overflow-hidden shadow-md
                    bg-white capitalize cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{value}</span>
        <span className="flex flex-row">
          <InlineIcon
            icon={close}
            className={`${value === "" ? "hidden" : "inline"}
                      text-xl bg-transparent text-gray-500`}
            onClick={() => setValue("")}
          />
          <InlineIcon icon={arrowDown} className="text-xl bg-transparent" />
        </span>
      </div>
      <ul
        className={`${isOpen ? "flex" : "hidden"}
                    flex-col rounded overflow-hidden shadow-md
                    w-full p-2 mt-2 bg-white absolute`}
      >
        {options.map((option) => (
          <StyledOption
            key={option}
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
