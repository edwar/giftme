import { ReactNode } from "react"

interface Props{
    children: ReactNode;
    className?: string;
}
export default function Card({ children, className }: Props) {
  return (
    <div className={`flex items-center bg-white w-full rounded-lg px-4 overflow-clip ${className}`}>
      {children}
    </div>
  )
}
