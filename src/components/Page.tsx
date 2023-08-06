import { ReactNode } from "react"

type PageProps = {
    children: ReactNode;
    className?: string;
}
export default function Container({ children, className }: PageProps) {
  return (
    <main className={`min-h-screen ${className}`}>
      {children}
    </main>
  )
}
