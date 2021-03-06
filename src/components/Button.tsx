import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function Button({ children, className = "" }: Props) {
  return (
    <button
      className={`px-8 py-1
                  inline-flex flex-row
                  justify-center items-center
                  bg-white dark:bg-blue-800
                  rounded-sm shadow-bold border-2 border-transparent
                  transition-transform transform
                  hover:cursor-pointer
                  active:scale-95 active:shadow
                  focus:outline-none focus:border-current
                  ${className}`}
    >
      {children}
    </button>
  );
}
