import { SectionCard } from "@/components"
import { CoursesTable } from "@/course/components"
import { Periods } from "@/period/components"

export function DashboardPage() {
  return (
    <div className="flex flex-col gap-6">
      <SectionCard title="Semestres" className="h-min min-h-[204px]">
        <Periods />
      </SectionCard>
      <SectionCard title="Cursos">
        <CoursesTable />
      </SectionCard>
    </div>
  )
}