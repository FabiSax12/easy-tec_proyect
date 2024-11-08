import { Suspense } from "react"
import { SectionCard, Periods } from "@/components"
import { CoursesTable } from "@/components/courses/table"
import { Spinner } from "@nextui-org/react"

export function DashboardPage() {
  return (
    <div className="home-main_grid gap-10">
      <SectionCard title="Semestres" className="h-min">
        <Suspense fallback={<Spinner />}>
          <Periods />
        </Suspense>
      </SectionCard>
      <SectionCard title="Cursos">
        <Suspense fallback={<Spinner />}>
          <CoursesTable />
        </Suspense>
      </SectionCard>
    </div>
  )
}