import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
    subtitle: string;
    onClick?: () => void
}

export default function CardItem({ children, title, subtitle, onClick}: Props) {
  return (
    <div onClick={onClick} className={`flex w-full justify-between items-center pl-2 md:pl-4 lg:pl-8 xl:pl-10 pr-4 md:pr-6 lg:pr-10 xl:pr-12 ${onClick ? 'cursor-pointer' : 'cursor-default'}`}>
      <div className="flex gap-4 items-center">
        {children}
        <div className="flex flex-col">
          <div className="font-poppins text-lg text-gray-700">{title}</div>
          <div className="font-poppins text-sm text-gray-400">{subtitle}</div>
        </div>
      </div>
      <svg
        className="w-4 h-4 text-gray-600"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 8 14"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="0.5"
          d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
        />
      </svg>
    </div>
  );
}
