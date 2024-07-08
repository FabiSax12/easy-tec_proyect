import { Suspense } from "react"
import { SectionCard } from "@/components"
import { Semestres } from "@/components/semester"
import { CoursesMainTable, Spinner } from "@/components/nextui"

export default async function Home() {
  return (
    <div className="home-main_grid gap-10">
      <SectionCard title="Semestres" className="h-min">
        <Suspense fallback={<Spinner />}>
          <Semestres />
        </Suspense>
      </SectionCard>
      <SectionCard title="Cursos">
        <Suspense fallback={<Spinner />}>
          <CoursesMainTable />
        </Suspense>
      </SectionCard>
    </div>
  )
}