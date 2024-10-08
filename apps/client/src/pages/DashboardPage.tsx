// import { CoursesMainTable, Spinner } from "@/components/nextui"
import { Suspense } from "react"
import { SectionCard } from "@/components"
import { Periods } from "@/components/periods"
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
          {/* <CoursesMainTable /> */}
        </Suspense>
      </SectionCard>
    </div>
  )
}