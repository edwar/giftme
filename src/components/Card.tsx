import { ReactNode } from "react"

interface Props{
    children: ReactNode;
    className?: string;
}
export default function Card({ children, className }: Props) {
  return (
    <div className={`flex gap-6 items-center bg-white w-full rounded-lg px-4 py-6 ${className}`}>
      {children}
    </div>
  )
}
