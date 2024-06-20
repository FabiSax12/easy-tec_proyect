import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Horarios TEC",
  description: "Horarios del TEC",
  keywords: ["TEC", "Horarios tec", "Cursos del tec"]
}

export default function ScheduleLayout({ children }: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}