import { Suspense } from "react"
import { SectionCard } from "@/components"
import { CoursesTable } from "@/course/components"
import { Periods } from "@/period/components"
import { Spinner } from "@nextui-org/react"

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionCard title="Semestres" className="h-min min-h-[204px]">
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