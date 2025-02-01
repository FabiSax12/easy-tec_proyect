import { SectionCard } from "@/shared/components"
import { CoursesTable } from "@/modules/course/components"
import { Periods } from "@/modules/period/components"

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