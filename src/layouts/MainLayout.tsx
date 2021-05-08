import { ReactNode } from "react";
import Header from "components/Header";

type Props = {
  children: ReactNode;
};

export default function MainLayout({ children }: Props) {
  return (
    <div className="w-full min-h-screen bg-gray-50">
      <Header />
      {children}
    </div>
  );
}
